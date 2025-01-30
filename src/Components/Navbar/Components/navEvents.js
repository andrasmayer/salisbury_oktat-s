let {navMenu} = await import(`./navMenu.js${app_version}`)
const {Langs} = await import(`../../Langs/Langs.js${app_version}`)
const validateMenu = (itm,url,props,title)=>{
    return   `<li class="nav-item">
                <a class="nav-link active" aria-current="page" href="${url}">${title}</a>
            </li>`
}

export const navEvents = (props) =>{
    const curLang = Langs[props.langCode]

    let NavMenu = ``
    Object.keys(navMenu).forEach(key=>{
        const subLinks = navMenu[key].content
        if( props.path[key] != null ){
            const menu_ = validateMenu(props.path[key],key, props, curLang.views[key].title)
            NavMenu += menu_ == false ? "" : menu_
        }
        else if(  subLinks != null){
           
            let dropdownItems = ``
            subLinks.forEach(key2=>{
                const menu_ = validateMenu(props.path[key2],key2, props,curLang.views[key2].title  )
                dropdownItems += menu_ == false ? "" : menu_
            })
            
            if( dropdownItems != ""){
                NavMenu +=  `
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown_${key}" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${curLang.navBar[key]}
                    </a>
                    <ul class="dropdown-menu p-2" aria-labelledby="navbarDropdown_${key}">${dropdownItems}</ul>
                </li>`
            }
        }
    })
    
    const navBar = document.getElementById("navBar")
    const navbarSupportedContent = document.getElementById("navbarSupportedContent")
    navbarSupportedContent.innerHTML =  navbarSupportedContent.innerHTML
    const navbar_nav = navbarSupportedContent.querySelector(".navbar-nav")
    navbar_nav.innerHTML += NavMenu
}