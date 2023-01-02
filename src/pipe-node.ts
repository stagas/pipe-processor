import { rpc, Rpc } from 'rpc-mini'

export class PipeNode extends AudioWorkletNode {
  static registeredContexts = new Set<BaseAudioContext>()

  static async register(context: BaseAudioContext) {
    if (this.registeredContexts.has(context)) return
    await context.audioWorklet.addModule(
      // TODO: this doesn't show in network tab wtf
      // related:
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1073295
      // https://bugs.chromium.org/p/chromium/issues/detail?id=880784

      // @ts-ignore
      new URL('./pipe-processor.js', import.meta.url).href //+ '?' + location.hash.slice(1)
    )
    this.registeredContexts.add(context)
  }

  static async create(
    context: BaseAudioContext,
    options: AudioWorkletNodeOptions & { port: MessagePort },
  ) {
    await this.register(context)
    return new this(context, options)
  }

  rpc: Rpc

  constructor(
    public context: BaseAudioContext,
    public options: AudioWorkletNodeOptions & { port: MessagePort }
  ) {
    super(context, 'pipe', options)
    this.rpc = rpc(this.port)
    this.rpc('setPort', options.port)
  }
}
