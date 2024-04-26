// using ES6 module syntax
import { v4 as uuidv4 } from "uuid";

export async function onClientRequest(request: EW.IngressOriginRequest) {
  request.addHeader("x-uuid-info", uuidv4());
}
