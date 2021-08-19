/**
 * Copyright (c) [Year] [Wang hui feng]
 * [analysis-location] is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *       http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

/* URLSearchParams 类库 */
export default class parseRequest {
  parse = {};
  appendParse = {};

  constructor(aj) {
    // super(url);
    this._init(aj);
  }

  _init(aj) {
    if (aj.indexOf("?") != -1) {
      aj = aj.split("?")[1];
    } else {
    }
    this._parseRequest(aj);
  }

  _parseRequest(aj = "") {
    if (!aj) return (this.parse = {});
    // 解析参数
    let parameterArr = aj.split("&");
    let parameter = {};
    parameterArr.forEach((item) => {
      let itemVal = item.split("=");
      if (!parameter[itemVal[0]] || !(parameter[itemVal[0]] instanceof Array)) {
        parameter[itemVal[0]] = [];
      } else {
      }
      parameter[itemVal[0]].push(itemVal[1]);
    });
    return (this.parse = parameter);
  }
  /* 合并 */
  _assign() {
    let parse = this.parse;
    let appendParse = this.appendParse;
    return Object.assign(parse, appendParse);
  }

  /* 返回 Boolean 判断是否存在此搜索参数 */
  _has(name) {
    let has = Object.hasOwnProperty;
    return has.call(this.parse, name) || has.call(this.appendParse, name);
  }

  /*  返回 Boolean 判断是否存在此搜索参数。 */
  has(name) {
    return this._has(name);
  }

  /*  获取指定搜索参数的第一个值。 */
  get(name) {
    return this.getAll(name)[0] || null;
  }

  /*  设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值。 */
  set(name, value) {
    this.appendParse = {};
    return (this.parse = { [name]: [value] });
  }

  /*  获取指定搜索参数的所有值，返回是一个数组。 */
  getAll(name) {
    if (!this.has(name)) return [];
    let parse = this.parse[name];
    let appendParse = this.appendParse[name];
    if (parse && appendParse) {
      return [...parse, ...appendParse];
    } else {
      return parse || appendParse;
    }
  }

  /* 插入一个指定的键/值对作为新的搜索参数。 */
  append(name, value) {
    if (this.appendParse[name] && this.appendParse[name] instanceof Array) {
      this.appendParse[name].push(value);
    } else {
      this.appendParse[name] = [value];
    }
    return;
  }

  /* 返回搜索参数组成的字符串，可直接使用在URL上。 */
  toString() {
    let parse = this.parse;
    let appendParse = this.appendParse;
    let URL = "";
    for (const key in parse) {
      if (Object.hasOwnProperty.call(parse, key)) {
        const element = parse[key];
        element.forEach((item) => {
          URL += `${key}=${item}&`;
        });
      }
    }
    for (const key in appendParse) {
      if (Object.hasOwnProperty.call(appendParse, key)) {
        const element = appendParse[key];
        element.forEach((item) => {
          URL += `${key}=${item}&`;
        });
      }
    }
    return URL.substr(0, URL.length - 1);
  }

  /*  */
  toParse() {
    let parameterArr = this.toString().split("&");
    let parameter = {};
    parameterArr.forEach((item) => {
      let itemVal = item.split("=");
      parameter[itemVal[0]] = itemVal[1];
    });
    return parameter;
  }

  /* 从搜索参数列表里删除指定的搜索参数及其对应的值。 */
  delete(name) {
    delete this.parse[name];
    delete this.appendParse[name];
    return;
  }

  /* URLSearchParams.keys()返回一个iterator，遍历器允许遍历对象中包含的所有键。这些键都是USVString对象。 */
  keys() {
    return Object.keys(this._assign());
  }

  /* URLSearchParams.values()方法返回一个iterator，该遍历器允许遍历对象中包含的所有值。这些值都是USVString对象。 */
  values() {
    let Arr1 = Object.values(this.parse);
    let Arr2 = Object.values(this.appendParse);
    return [...Arr1, ...Arr2].flat();
  }

  /* 方法返回一个iterator，允许遍历该对象中包含的所有键/值对。每一组键值对都是 USVString对象 */
  /* entries() {
    return;
  } */

  /* 方法对包含在此对象中的所有键/值对进行排序，并返回undefined。排序顺序是根据键的Unicode代码点。该方法使用稳定的排序算法 (即，将保留具有相等键的键/值对之间的相对顺序)。 */
  /* sort() {
    return;
  } */
}
