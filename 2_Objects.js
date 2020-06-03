const person = {
    name: "Max",
    age: 41,
    city: "New York",
    country: "USA"
}

console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.entries(person));
console.log(Object.fromEntries([["status", "quo"], ["veni", "vidi"], ["vici", "go"]]));

for (const [key, value] of Object.entries(person)) {
    console.log(key, " :: ", value)
}