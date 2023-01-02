

<h1>
pipe-processor <a href="https://npmjs.org/package/pipe-processor"><img src="https://img.shields.io/badge/npm-v1.0.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-44-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/pipe-processor@1.0.0/dist/pipe-processor.min.js"><img src="https://img.shields.io/badge/brotli-687b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

AudioWorklet that pipes its output to a given message port.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i pipe-processor </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add pipe-processor </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add pipe-processor</code>
</td></tr></table>
</h4>


# [🥁 Use this template 🥁](https://github.com/stagas/typescript-minimal-template/generate)

## Features

- TypeScript with [SWC](https://swc.rs/)
- **JSX/TSX** out of the box
- Outputs both **CommonJS** and **ES Modules**, ready to **publish on npm**
- Automatic dist bundling using [bunzee](https://github.com/stagas/bunzee)
- Documentation generation using [dokio](https://github.com/stagas/dokio)
- Isomorphic Node.js and real browser testing incl. coverage and snapshots with [utr](https://github.com/stagas/utr)
- Examples / Playground using [devito](https://github.com/stagas/devito)
- Evergreen using [pull-configs](https://github.com/stagas/pull-configs)
- [ESLint](https://eslint.org/)
- [dprint](https://dprint.dev/)
- [Husky](https://typicode.github.io/husky/)




## API

<p>  <details id="PipeNode$1" title="Class" open><summary><span><a href="#PipeNode$1">#</a></span>  <code><strong>PipeNode</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="constructor$12" title="Constructor" ><summary><span><a href="#constructor$12">#</a></span>  <code><strong>constructor</strong></code><em>(context, options)</em>    </summary>  <a href=""></a>  <ul>    <p>  <details id="new PipeNode$13" title="ConstructorSignature" ><summary><span><a href="#new PipeNode$13">#</a></span>  <code><strong>new PipeNode</strong></code><em>()</em>    </summary>    <ul><p><a href="#PipeNode$1">PipeNode</a></p>      <p>  <details id="context$14" title="Parameter" ><summary><span><a href="#context$14">#</a></span>  <code><strong>context</strong></code>    </summary>    <ul><p><span>BaseAudioContext</span></p>        </ul></details><details id="options$15" title="Parameter" ><summary><span><a href="#options$15">#</a></span>  <code><strong>options</strong></code>    </summary>    <ul><p><span>AudioWorkletNodeOptions</span> &amp; {<p>  <details id="port$17" title="Property" ><summary><span><a href="#port$17">#</a></span>  <code><strong>port</strong></code>    </summary>  <a href=""></a>  <ul><p><span>MessagePort</span></p>        </ul></details></p>}</p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="context$19" title="Property" ><summary><span><a href="#context$19">#</a></span>  <code><strong>context</strong></code>    </summary>  <a href=""></a>  <ul><p><span>BaseAudioContext</span></p>        </ul></details><details id="options$20" title="Property" ><summary><span><a href="#options$20">#</a></span>  <code><strong>options</strong></code>    </summary>  <a href=""></a>  <ul><p><span>AudioWorkletNodeOptions</span> &amp; {<p>  <details id="port$22" title="Property" ><summary><span><a href="#port$22">#</a></span>  <code><strong>port</strong></code>    </summary>  <a href=""></a>  <ul><p><span>MessagePort</span></p>        </ul></details></p>}</p>        </ul></details><details id="rpc$18" title="Property" ><summary><span><a href="#rpc$18">#</a></span>  <code><strong>rpc</strong></code>    </summary>  <a href=""></a>  <ul><p><span>Rpc</span></p>        </ul></details><details id="registeredContexts$2" title="Property" ><summary><span><a href="#registeredContexts$2">#</a></span>  <code><strong>registeredContexts</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href=""></a>  <ul><p><span>Set</span>&lt;<span>BaseAudioContext</span>&gt;</p>        </ul></details><details id="create$6" title="Method" ><summary><span><a href="#create$6">#</a></span>  <code><strong>create</strong></code><em>(context, options)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="context$8" title="Parameter" ><summary><span><a href="#context$8">#</a></span>  <code><strong>context</strong></code>    </summary>    <ul><p><span>BaseAudioContext</span></p>        </ul></details><details id="options$9" title="Parameter" ><summary><span><a href="#options$9">#</a></span>  <code><strong>options</strong></code>    </summary>    <ul><p><span>AudioWorkletNodeOptions</span> &amp; {<p>  <details id="port$11" title="Property" ><summary><span><a href="#port$11">#</a></span>  <code><strong>port</strong></code>    </summary>  <a href=""></a>  <ul><p><span>MessagePort</span></p>        </ul></details></p>}</p>        </ul></details>  <p><strong>create</strong><em>(context, options)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;<a href="#PipeNode$1">PipeNode</a>&gt;</ul></p></p>    </ul></details><details id="register$3" title="Method" ><summary><span><a href="#register$3">#</a></span>  <code><strong>register</strong></code><em>(context)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="context$5" title="Parameter" ><summary><span><a href="#context$5">#</a></span>  <code><strong>context</strong></code>    </summary>    <ul><p><span>BaseAudioContext</span></p>        </ul></details>  <p><strong>register</strong><em>(context)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;void&gt;</ul></p></p>    </ul></details></p></ul></details></p>

## Credits
- [alice-bob](https://npmjs.org/package/alice-bob) by [stagas](https://github.com/stagas) &ndash; transport agnostic strongly typed duplex rpc interfaces
- [rpc-mini](https://npmjs.org/package/rpc-mini) by [stagas](https://github.com/stagas) &ndash; A mini RPC for MessagePort interfaces.

## Contributing

[Fork](https://github.com/stagas/pipe-processor/fork) or [edit](https://github.dev/stagas/pipe-processor) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2023 [stagas](https://github.com/stagas)
