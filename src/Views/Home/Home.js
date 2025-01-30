
export class Home{
    constructor(props){
        this.props = props
        this.lang = props.lang
        console.log(props)
    }
    init(){
        return `
            <div class="d-flex justify-content-center">
                <div class="col-10 col-lg-6 border text-center">
                   ${this.lang.title}
               </div>
            </div>
            `
    }
    events(){
        
    }
}