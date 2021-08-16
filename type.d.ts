import analysisLocation from "./src/index.js";

declare class AnalysisLocation {
    
    location: {
        hash: String,
        host: String, // 有端口号
        hostname: String, // 无端口号信息
        href: String,
        origin: String, // 有端口号信息
        pathname: String,
        port: String, // 端口号
        protocol: String,
        search: String,
      }

    /*  */
    get protocol(): String
    set protocol(val: String)

    /*  */
    get port(): String
    set port(val: String)

    /*  */
    get pathname(): String
    set pathname(val: String)

    /*  */
    get hostname(): String
    set hostname(val: String)

    /*  */
    get search(): String
    set search(val: String)

    /*  */
    get hash(): String
    set hash(val: String)
    /*  */
    get host(): String
    set host(val: String)

    /*  */
    get href(): String
    set href(val)

    /*  */
    get origin(): String
    set origin(val: String)
}

export default AnalysisLocation