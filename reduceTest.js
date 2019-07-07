const reduceArraObjects = require('./reduceArraObjects');
const newUser = {
    id: 4,
    name: "Denomer Crazy",
    username: "crazy.1",
    email: "deno@crazy.com",
    phone: "",
    website: "crazy.app",
    password: "crazed_checker"
};
users = [newUser,newUser]
,
console.log(reduceArraObjects(users,{"id":"eee","name":"azad"}))