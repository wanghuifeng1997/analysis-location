const analysisLocation = require("./index.js");
const { parseRequest } = require("./index.js");
// import {parseRequest} from "./index.js";
let url =
  "https://www.google.com:5500/search?q=vscode+%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1%E6%8F%92%E4%BB%B6&rlz=1C1SIAJ_zh-CN__929__929&ei=sI1_YKilBYb8rQHa6aDYBQ&oq=vscode+%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1%E6%8F%92%E4%BB%B6&gs_lcp=Cgdnd3Mtd2l6EAM6BQgAELADOgcIABCwAxAeULggWMotYK4vaAFwAHgAgAHIAYgBow2SAQUwLjguMZgBAKABAaoBB2d3cy13aXrIAQLAAQE&sclient=gws-wiz&ved=0ahUKEwiovfD9pI7wAhUGfisKHdo0CFsQ4dUDCA4&uact=5";
url += "/#/erqwerqw?1=2&s=2&r=44&r=2323&r=444";
var a = new analysisLocation(url);
var b = new parseRequest(a.hash);
console.log(a);
console.log(b.get("a"));
console.log(b.getAll());

for (var value of b.values()) {
  console.log(value);
}
