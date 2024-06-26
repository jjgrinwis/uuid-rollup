// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import inject from "@rollup/plugin-inject";

export default {
  input: "main.ts", // Your main input file
  output: {
    dir: "built",
    format: "es", // CommonJS format (use 'es' for ES module format which Akamai EdgeWorkers is using
  },
  external: [], // don't rollup these packages, EdgeWorker cookies for example.
  plugins: [
    resolve(),
    typescript(),
    inject({
      // Force the inclusion of the crypto package as import { crypto } from 'crypto';
      crypto: ["crypto", "crypto"],
    }),
  ],
};
