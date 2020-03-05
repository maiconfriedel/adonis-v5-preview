import Route from "@ioc:Adonis/Core/Route";

import "./user.routes";

Route.get("/", async () => {
  return { hello: "world" };
});
