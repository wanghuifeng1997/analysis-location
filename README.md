# Analysis Location

## A Url library parses Url information And he's lightweight .

## Converted to ES5, it's only 4.78KB

## use Url

```JavaScript
const analysisLocation = require('analysis-location');
let urltset = "https://www.google.com:5500/search?q=vscode+%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1%E6%8F%92%E4%BB%B6&rlz=1C1SIAJ_zh-CN__929__929&ei=sI1_YKilBYb8rQHa6aDYBQ&oq=vscode+%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1%E6%8F%92%E4%BB%B6&gs_lcp=Cgdnd3Mtd2l6EAM6BQgAELADOgcIABCwAxAeULggWMotYK4vaAFwAHgAgAHIAYgBow2SAQUwLjguMZgBAKABAaoBB2d3cy13aXrIAQLAAQE&sclient=gws-wiz&ved=0ahUKEwiovfD9pI7wAhUGfisKHdo0CFsQ4dUDCA4&uact=5/#/2321312312312/dsfasdf/?dasdfas=sfsadf&asfdsad=erwerw/#/123"

let url = new analysisLocation(urltset);
console.log(url);

/* ———————————————————————————————————————————————————— */
/* |- Which brings us to the following information . -| */
/* |-    Use to view or change URL information .     -| */
/* ———————————————————————————————————————————————————— */

/**
 *  {
 *  "locationData": {
 *       "hash": "#/2321312312312/dsfasdf/?dasdfas=sfsadf&asfdsad=erwerw",
 *       "host": "www.google.com:5500",
 *       "hostname": "www.google.com",
 *       "href": "#/123",
 *       "origin": "https://www.google.com:5500",
 *       "pathname": "/search",
 *       "port": "5500",
 *       "protocol": "https:",
 *       "search": "?q=vscode+%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1%E6%8F%92%E4%BB%B6&rlz=1C1SIAJ_zh-CN__929__929&ei=sI1_YKilBYb8rQHa6aDYBQ&oq=vscode+%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1%E6%8F%92%E4%BB%B6&gs_lcp=Cgdnd3Mtd2l6EAM6BQgAELADOgcIABCwAxAeULggWMotYK4vaAFwAHgAgAHIAYgBow2SAQUwLjguMZgBAKABAaoBB2d3cy13aXrIAQLAAQE&sclient=gws-wiz&ved=0ahUKEwiovfD9pI7wAhUGfisKHdo0CFsQ4dUDCA4&uact=5/"
 *   }
 *}
 */

/* ———————————————————————*/
/* |- Usage examples . -| */
/* —————————————————————— */

console.log(url.hash); // #/123
url.hash = "#/dadfasfa"
console.log(url.hash) // #/dadfasfa
console.log(url)
/**
 *  {
 *  "locationData": {
 *       "hash": "#/2321312312312/dsfasdf/?dasdfas=sfsadf&asfdsad=erwerw",
 *       "host": "www.google.com:5500",
 *       "hostname": "www.google.com",
 *       "href": "#/dadfasfa",
 *       "origin": "https://www.google.com:5500",
 *       "pathname": "/search",
 *       "port": "5500",
 *       "protocol": "https:",
 *       "search": "?q=vscode+%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1%E6%8F%92%E4%BB%B6&rlz=1C1SIAJ_zh-CN__929__929&ei=sI1_YKilBYb8rQHa6aDYBQ&oq=vscode+%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1%E6%8F%92%E4%BB%B6&gs_lcp=Cgdnd3Mtd2l6EAM6BQgAELADOgcIABCwAxAeULggWMotYK4vaAFwAHgAgAHIAYgBow2SAQUwLjguMZgBAKABAaoBB2d3cy13aXrIAQLAAQE&sclient=gws-wiz&ved=0ahUKEwiovfD9pI7wAhUGfisKHdo0CFsQ4dUDCA4&uact=5/"
 *   }
 *}
 */
```

## plan (version => 0.0.5.rc)

- [+] Parse the information after the question mark.
  - [+] has
  - [+] get
  - [+] set
  - [+] getAll
  - [+] append
  - [+] toString
  - [+] delete
  - [+] keys ?
  - [+] values ?
  - [-] entries
  - [-] sort

## use parseRequest

```JavaScript
    const {parseRequest} = require('analysis-location');
    /* ——————————————————————————————————————————————————————————————————————*/
    /* |-            Refer to the W3C URLSearchParams standard .          -| */
    /* |- https://developer.mozilla.org/docs/Web/API/URLSearchParams/keys -| */
    /* ————————————————————————————————————————————————————————————————————— */

    const analysisLocation = require("analysis-location");
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

```
