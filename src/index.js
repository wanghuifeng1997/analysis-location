/**
 * 创建一个Url 类库解析Url 信息  */
export default class analysisLocation {
  location = {
    hash: "",
    host: "", // 有端口号
    hostname: "", // 无端口号信息
    href: "",
    origin: "", // 有端口号信息
    pathname: "",
    port: "", // 端口号
    protocol: "",
    search: "",
  };
  /*  */
  constructor(url) {
    this._init(url);
  }
  /* 解析url */
  _init(url) {
    const urlList = url.split("//");
    const hostList = urlList.slice(1).join("//").split("/");
    const hashList = hostList.slice(1).join("/").split("#");
    const searchList = hashList[0].split("?");
    const portList = hostList[0].split(":");

    this.location.pathname = "/" + searchList[0];
    this.location.hostname = portList[0] ? portList[0] + "" : "";
    this.location.port = portList[1] ? parseInt(portList[1]) + "" : "";
    this.location.protocol = urlList[0] ? urlList[0] : "";
    this.location.hash = hashList[1] ? "#" + hashList.slice(1).join("#") : "";
    this.location.search = searchList[1]
      ? "?" + searchList.slice(1).join("?")
      : "";
    this._host();
    this._origin();
    this._host();
  }
  /* 数组合并 */
  /* arrayMerging(arr=[],sbol=""){

		 return arr.join(sbol)
	 } */

   /* 删除最后的/线 */
   _omit(url){
    if(url.substr(-1)=='/'){
      let urlList= [...url]
      urlList.pop()
      return urlList.join();
    }else{
      return url
    }

   }

  /* 处理href */
  _href() {
    let { hash, protocol, pathname, search } = this.location;
    let host = this._host();
    let href =
      protocol + "//" + host + pathname + search + (hash ? "/" + hash : "");
    this.location.href = href;
    return href;
  }
  /* 处理origin */
  _origin() {
    let { protocol } = this.location;
    let origin = protocol + "//" + this._host();
    this.location.origin = origin;
    return origin;
  }
  /* 处理host */
  _host() {
    let { hostname, port } = this.location;
    let host = hostname + (port ? ":" + port : "");
    this.location.host = host;
    return host;
  }
  /* 解析origin */
  _abalysisOrigin(url) {
    // protocol + "//" + this._host();
	const urlList = url.split("//");
    const hostList = urlList.slice(1).join("//").split("/");
	const portList = hostList[0].split(":");

	this.location.hostname = portList[0] ? portList[0] + "" : "";
    this.location.port = portList[1] ? parseInt(portList[1]) + "" : "";
	this.location.protocol = urlList[0] ? urlList[0] : "";

    return this.location.protocol + "//" + this._host();
  }
  /*  */
  get protocol() {
    return this.location.protocol;
  }
  set protocol(val) {
    return (this.location.protocol = val);
  }
  /*  */
  get port() {
    return this.location.port;
  }
  set port(val) {
    return (this.location.port = val);
  }
  /*  */
  get pathname() {
    return this.location.pathname;
  }
  set pathname(val) {
    return (this.location.pathname = val);
  }
  /*  */
  get hostname() {
    return this.location.hostname;
  }
  set hostname(val) {
    return (this.location.hostname = val);
  }
  /*  */
  get search() {
    return this.location.search;
  }
  set search(val) {
    return (this.location.search = val);
  }

  /*  */
  get hash() {
    return this.location.hash;
  }
  set hash(val) {
    return (this.location.hash = val);
  }
  /*  */
  get host() {
    return this._host();
  }
  set host(val) {
    let hostList = val.split(":");
    this.location.hostname = hostList[0];
    this.location.port = hostList[1] ? hostList[1] : "";
    return (this.location.host = val);
  }

  /*  */
  get href() {
    return this._href();
  }
  set href(val) {
    this._init(val);
    return this._href();
  }
  /*  */
  get origin() {
    return this._origin();
  }
  set origin(val) {
    let origin = this._abalysisOrigin(val);
    return (this.location.origin = origin);
  }

}
