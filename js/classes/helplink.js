class HelpLink{
    constructor(title, link, icon){
        this.title = title
        this.link = link
        this.icon = icon
    }

    render(){
        return `<div class="col-4 col-md-6 col-xs-12">
                    <a class="help-link" href="${this.link}" target="_blank">
                        <div class="card">
                            <img class="help-link-icon pt-3" src="${this.icon}">
                            <div class="card-content pb-1">
                                <h3 class="card-title">${this.title}</h3>
                            </div>
                        </div>
                    </a>
                </div>`
    }
}

export { HelpLink }