
let txthoy = document.querySelector('#txttexto');
let btnhoy = document.querySelector('#btnenviar');
let conchathoy = document.querySelector('.con__chat');



class dia{
    constructor(yo,tal){
        this.yo = yo
        this.talves = tal
        this.amity = ''
        this.amity1=''        
        this.h()
    }
    h(){
        if (this.yo == this.talves) {
            let a = new Date()
            this.amity = a.toDateString();
            this.amity1=a.toLocaleDateString();
            conchathoy.innerHTML += `<div class="yo"><div class="yo__div"><p class="yo__txt">${this.yo}</p></div></div>`;
            setTimeout(() => {
                conchathoy.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">el dia es: ${this.amity} o tambien ${this.amity1}</p></div></div>`
            }, 900);
        }
    }
}

btnhoy.addEventListener('click',()=>{
    const ho = new dia(txthoy.value,'dime el dia');
    const cual = new dia(txthoy.value,'cual es el dia')
    const hor = new dia(txthoy.value,'que dia es');    
    
    const Ho = new dia(txthoy.value,'Dime el dia');
    const Cual = new dia(txthoy.value,'Cual es el dia')
    const Hor = new dia(txthoy.value,'Que dia es');


    const Cual2 = new dia(txthoy.value,'cuál es el dia')
    const Hor2 = new dia(txthoy.value,'qué dia es');

    const Cual3 = new dia(txthoy.value,'Cuál es el dia')
    const Hor3 = new dia(txthoy.value,'Qué dia es');


    const ho1 = new dia(txthoy.value,'dime el día');
    const cual1 = new dia(txthoy.value,'cual es el día')
    const hor1 = new dia(txthoy.value,'que día es');    
    
    const Ho1 = new dia(txthoy.value,'Dime el día');
    const Cual1 = new dia(txthoy.value,'Cual es el día')
    const Hor1 = new dia(txthoy.value,'Que día es');


    const Cual21 = new dia(txthoy.value,'cuál es el día')
    const Hor21 = new dia(txthoy.value,'qué día es');

    const Cual31 = new dia(txthoy.value,'Cuál es el día')
    const Hor11 = new dia(txthoy.value,'Qué día es');
})