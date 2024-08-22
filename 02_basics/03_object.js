//Literals

const mysym = Symbol("key1")

const jsuser = {
    name: "Anukalp",
    age: 20,
    email: "raajanukalp@gmail.com",
    location: "Bihar Sharif",
    isloggedin: false,
    [mysym]: "newkey" // to access the symbol in object use [].
}

console.log(jsuser.location);
console.log(jsuser["email"]);  // eassy way to access the object.

console.log(jsuser[mysym])

jsuser.email = "anukalp2809@gmail.com";

Object.freeze(jsuser);

jsuser.email = "raajanukalp@gmail.com"

console.log(jsuser)