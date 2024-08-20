import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Node.js에서 Mock 서버 설정
export const server = setupServer(...handlers);
