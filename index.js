function getName() {
    console.log(this.name);
    console.log(this.age);
}

const o = {
    name: "fuad",
    age: 3,
}
const o2 = {
    name: "aju",
    age: 343,
}

getName.call()