// @env browser

import { wait } from 'everyday-utils'
import { PipeNode } from '..' // <- we have to use the dist (which is under root, not ../src)

jest.setTimeout(10000)

describe('PipeNode', () => {
  it('posts one quantum', async () => {
    const ctx = new OfflineAudioContext({ length: 128, numberOfChannels: 1, sampleRate: 44100 })
    const constantNode = new ConstantSourceNode(ctx, { offset: 42 })
    const channel = new MessageChannel()
    const results: any[] = []
    channel.port1.onmessage = (ev) => {
      results.push(ev)
    }
    const pipeNode = await PipeNode.create(ctx, { port: channel.port2 })
    constantNode.connect(pipeNode)
    constantNode.start()

    // for some reason we need to wait 1ms
    // otherwise test is flaky, sometimes inputs don't arrive
    // probably has something to do with sending the message port
    // taking too long
    await wait(1)

    await ctx.startRendering()

    expect(results.length).toBe(1)
    expect(results[0]).toBeInstanceOf(MessageEvent)
    expect(results[0].data.inputs).toBeInstanceOf(Array)
    expect(results[0].data.inputs[0]).toBeInstanceOf(Array)
    expect(results[0].data.inputs[0][0]).toBeInstanceOf(Float32Array)
    expect(results[0].data.inputs[0][0][0]).toBe(42)
  })

  it('posts two quanta', async () => {
    const ctx = new OfflineAudioContext({ length: 128 * 2, numberOfChannels: 1, sampleRate: 44100 })
    const constantNode = new ConstantSourceNode(ctx, { offset: 42 })
    const channel = new MessageChannel()
    const results: any[] = []
    channel.port1.onmessage = (ev) => {
      results.push(ev)
    }
    const pipeNode = await PipeNode.create(ctx, { port: channel.port2 })
    constantNode.connect(pipeNode)
    constantNode.start()

    // for some reason we need to wait 1ms
    // otherwise test is flaky, sometimes inputs don't arrive
    // probably has something to do with sending the message port
    // taking too long
    await wait(1)

    await ctx.startRendering()

    // we also need to wait at the return when there are >1 quanta?
    await wait(1)

    expect(results.length).toBe(2)
    expect(results[0]).toBeInstanceOf(MessageEvent)
    expect(results[0].data.inputs).toBeInstanceOf(Array)
    expect(results[0].data.inputs[0]).toBeInstanceOf(Array)
    expect(results[0].data.inputs[0][0]).toBeInstanceOf(Float32Array)
    expect(results[0].data.inputs[0][0][0]).toBe(42)
    expect(results[1].data.inputs[0][0][0]).toBe(42)
  })
})
