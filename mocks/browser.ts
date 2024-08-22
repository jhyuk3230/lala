import { setupServer } from "msw/node";
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

const server = setupServer(...handlers);
export default server;