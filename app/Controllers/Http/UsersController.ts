import Event from "@ioc:Adonis/Core/Event";

export default class UsersController {
  public async index() {
    Event.emit("new:user", [
      { id: 1, name: "Maicon" },
      { id: 2, name: "Rafael" }
    ]);

    return [
      { id: 1, name: "Maicon" },
      { id: 2, name: "Rafael" }
    ];
  }
}
