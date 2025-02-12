const {path} = await import(`./Components/path/path.js${app_version}`)
const {router} = await import(`./Components/router/router.js${app_version}`)
const {Navbar} = await import(`./Components/Navbar/Navbar.js${app_version}`)
export const App = () =>{
    const langCode = window.localStorage.getItem("Lang") == null ? "hu" : window.localStorage.getItem("Lang")
    const navMenu = new Navbar({target:"#root", langCode:langCode});
    const root = document.getElementById("root")
    root.innerHTML += '<div id="pageContent">router</div>'
    const currentRoute = new router({path:path, langCode:langCode})
    navMenu.events(path)
    onhashchange = () => { 
        const currentRoute = new router({path:path, langCode:langCode})
    }
}