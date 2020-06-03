const start = "          Hello guys ";

const end = "This is all                  ";

console.log(start.trimStart()+end.trimEnd());
console.log((start+end).trim());

console.log("vk".padStart(4, "www."));
console.log("vk".padEnd(10, "!"));

//=============== tags =================

    function tag(strings, name, age, country, city) {
        const [s1, s2, s3, s4, s5] = strings;
    const s6 = ` Он ${age < 20 ? "молодой" : age > 20 && age < 50 ? "зрелый" : "старый"}.`

    return `${s1}${name}${s2}${age}${s3}${country}${s4}${city}${s5}${s6}`
}

const person = {
  name: "Dron",
  age: 19,
  city: "Kharkiv",
  country: "Ukraine"
};
const {name, age, city, country} = person;
const output = tag`Чедовек по имени ${name}, возраст ${age}лет, живет в ${country} город ${city}.`
console.log(output)
