
let txho = document.querySelector('#txttexto');
let btho = document.querySelector('#btnenviar');
let conChathora = document.querySelector('.con__chat');



class hora{
    constructor(yo,tal){
        this.yo = yo
        this.talves = tal
        this.amity = ''

        this.h()
    }
    h(){
        if (this.yo == this.talves) {
            let a = new Date()
            this.amity = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
            conChathora.innerHTML += `<div class="yo"><div class="yo__div"><p class="yo__txt">${this.yo}</p></div></div>`;
            setTimeout(() => {
                conChathora.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">son las: ${this.amity}</p></div></div>`
            }, 900);
        }
    }
}

btho.addEventListener('click',()=>{
    const ho = new hora(txho.value,'dime la hora');
    const cual = new hora(txho.value,'cual es la hora')
    const hor = new hora(txho.value,'que hora es');
})