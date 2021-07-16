const $template = document.createElement('template');
$template.innerHTML = `
    <div class = "input-container">
        <h1>Link Shortener</h1> 
        <form id="link-input-form">
            <div class="flex-btw">
                <div>Enter a Link: </div>
                <input id ="input-link" type="text" placeholder="https://hello.com"> 
                <button id="submit-btn"><i class="fas fa-arrow-right"></i></button>
            </div>
            <div class="domain-selection flex-btw">
                <div>Short domain: </div>
                <div class="selection sl-1">shrtco.de</div>
                <div class="selection sl-2">9qr.de</div>
                <div class="selection sl-3">shiny.link</div>
            </div>
        </form>

        
    </div>
`;

export default class InputContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true)); 
   
        this.$form = this.querySelector('#link-input-form');
        this.$inputLink = this.querySelector('#input-link');
        this.$submitBtn = this.querySelector('#submit-btn');

        this.$selection1 = this.querySelector('.sl-1');
        this.$selection2 = this.querySelector('.sl-2');
        this.$selection3 = this.querySelector('.sl-3');

        this.$selected = false;
    }

    connectedCallback() {
        this.$selection1.addEventListener('click', ()=>{
            this.$selection1.classList.add('selected');
            this.$selection2.classList.remove('selected');
            this.$selection3.classList.remove('selected');
            this.$selected = true;
        })
        this.$selection2.addEventListener('click', ()=>{
            this.$selection2.classList.add('selected');
            this.$selection1.classList.remove('selected');
            this.$selection3.classList.remove('selected');
            this.$selected = true;
        })
        this.$selection3.addEventListener('click', ()=>{
            this.$selection3.classList.add('selected');
            this.$selection1.classList.remove('selected');
            this.$selection2.classList.remove('selected');
            this.$selected = true;
        })

        this.$submitBtn.addEventListener('click',async (e) => {
            e.preventDefault();
            if (!this.$inputLink.value) {alert('Enter a link!');}
            if (!this.$selected){alert('Select a domain');}

            try {
                let shortenLink;
                let preData = fetch(`https://api.shrtco.de/v2/shorten?url=${this.$inputLink.value}`).then(rawdata => 
                rawdata.json().then(data =>{
                    console.log(data);
                    //console.log(data.result.full_short_link);
                    
                    if (this.$selection1.classList.contains('selected')) {
                        shortenLink = data.result.full_short_link;
                    } else
                    if (this.$selection2.classList.contains('selected')) {
                        shortenLink = data.result.full_short_link2;
                    } else {
                        shortenLink = data.result.full_short_link3;
                    }

                    alert(shortenLink)
                }
                ))
                            
            }
            catch (err) {
                alert(err);
            }
            
        })
    }
}

window.customElements.define('input-container', InputContainer);



