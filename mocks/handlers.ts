import { http, HttpResponse } from "msw"; // 최신 API에서 `http` 대신 `rest`를 사용하는 경우가 많습니다.

export const handlers = [
  http.get("/api/data", ({ request }) => {
    const data = {
      items: [
        { url: "/page1", list: ["item1", "item2"] },
        { url: "/page2", list: ["item3", "item4"] },
      ],
    };

    return HttpResponse.json(data);
  }),
];
