import { rpc } from 'rpc-mini'

export class PipeProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    rpc(this.port, this as any)
  }

  targetPort?: MessagePort

  async setPort(port: MessagePort) {
    this.targetPort = port
  }

  process(inputs: Float32Array[][]) {
    this.targetPort?.postMessage({ inputs })
    return true
  }
}

registerProcessor('pipe', PipeProcessor)
