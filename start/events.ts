import Event from "@ioc:Adonis/Core/Event";

Event.on("new:user", user => {
  console.log(user);
});
