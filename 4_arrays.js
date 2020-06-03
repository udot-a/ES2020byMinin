const nested = ["a", "b", ["c", "d"], ["e", ["f", "g"]]];

console.log(nested.toString().split(","));

console.log(nested)

console.log(nested.flat(2));

const tech = ["react hooks func", "apollo server side rendering", "redux form", "node js"];

const newTech = tech.reduce((prev, item) =>  [...prev, ...item.split(" ")], []);

const flatTech = tech.flatMap(item => item.split(" "));
console.log(newTech);
console.log(newTech);