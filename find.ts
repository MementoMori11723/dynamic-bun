import { Glob } from "bun";
const obj = new Glob("./pages/**/*.js");
let arr = [];
for await (let i of obj.scan(".")) {
  arr.push(i);
}
console.log(arr);
