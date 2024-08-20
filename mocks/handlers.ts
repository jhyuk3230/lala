import { rest } from "msw";

export const handlers = [
  // Example API endpoint
  rest.get("/api/data", (req: any, res: any, ctx: any) => {
    return res(
      ctx.status(200),
      ctx.json({
        items: [
          { url: "/page1", list: ["item1", "item2"] },
          { url: "/page2", list: ["item3", "item4"] },
        ],
      })
    );
  }),
];
