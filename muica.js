
let txca = document.querySelector('#txttexto');
let btca = document.querySelector('#btnenviar');
let conChathoca = document.querySelector('.con__chat');


class musica{
    constructor(yo,tal){
        this.yo = yo
        this.talves = tal
        this.amityvideo = [
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/p1JmzB6E-C8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/-2yfV53d3ks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/z0hWGUfxbbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/uEDhGX-UTeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y8Fp0jrAwqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/o9EBm4-9isI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/3aB41fwBvmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/3aB41fwBvmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',    
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/e4sEKdOOY3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/lp-EO5I60KA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/gOsM-DYAEhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/pC4RRPY32RY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/t6TxZn4zXB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/NfTS7gM7zQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/NfTS7gM7zQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/O1o4KKipaC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/1b3UdPbqc-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/p0ST2f2ouJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/8shedTPtNj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/yCv7ZAOMxso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/kTV9awulXqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/dFp_b5DPIIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ab6E2BsuLJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ]
        this.mus()
    }
    mus(){
        if (this.yo == this.talves) {
            let ramdomu = parseInt(Math.random()*this.amityvideo.length)
            conChathoca.innerHTML += `<div class="yo"><div class="yo__div"><p class="yo__txt">${this.yo}</p></div></div>`;
            setTimeout(() => {
                conChathoca.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">okey</p></div></div>`
                setTimeout(() => {
                    conChathoca.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">${this.amityvideo[ramdomu]}</p></div></div>`
                }, 800);
            }, 900);
        }
    }
}

btca.addEventListener('click',()=>{
    const remu = new musica(txca.value,'recomiendame una musica')
    const pamu = new musica(txca.value,'pasame una musica')
    const ponmu = new musica(txca.value,'pon musica');
    const esmu = new musica(txca.value,'pasame una musica que escuchas')
})