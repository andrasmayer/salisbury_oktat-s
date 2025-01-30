const {Langs} = await import(`../Langs/Langs.js${app_version}`)
export class router{
    constructor(props){
        const path = {}
        Object.keys(props.path).forEach(key=>{
            const itm = props.path[key]
                path[key] = itm
        })
        this.path = path
        let route = location.hash.split("?")[0]

        if( ["","#"].includes(route) ){ route = "#home" }
        if( this.path[route] == null){ route = "#error404"}
        const languagePackage = Langs[props.langCode].views[route];
        const content= document.getElementById("pageContent")
        const activeRoute = new this.path[route].page({lang:languagePackage,langCode:props.langCode})
        content.innerHTML = activeRoute.init()
        activeRoute.events()
        document.title = languagePackage.title
    }
}