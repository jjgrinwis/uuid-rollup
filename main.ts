/*
Some example code using rollup and the uuid npm package we're using.
We're using ES module format so rollup will only include the v4 package, nothing else.

This uuid package requires a crypto module which supports the getRandomValues() method
https://github.com/uuidjs/uuid#getrandomvalues-not-supported

Akamai EdgeWorkers has this functionality https://techdocs.akamai.com/edgeworkers/docs/crypto#getrandomvalues in the crypto module of EdgeWorkers
We're forcing rollup to include this standard EdgeWorker crypto package using the @rollup/plugin-inject plugin
inject({crypto: ["crypto", "crypto"]}), which will add "import { crypto } from 'crypto'" in the main.js.
*/

/*
Importing the npm uuid module to create RFC4122 compliant UUIDs. Using the ES6 module syntax so rollup can do the 'Tree Shaking'
https://rollupjs.org/introduction/#tree-shaking
*/
import { v4 as uuidv4 } from "uuid";

export async function onClientRequest(request: EW.IngressOriginRequest) {
  // our json object with uuid and dynamically created uuid
  const body = {
    uuid: uuidv4(),
  };

  // just respond with our generated uuid, that's it.
  request.respondWith(
    200,
    { "Content-Type": ["application/json;charset=utf-8"] },
    JSON.stringify(body)
  );
}
