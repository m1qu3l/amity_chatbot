
let txmeme = document.querySelector('#txttexto');
let btnmeme = document.querySelector('#btnenviar');
let conchatmeme = document.querySelector('.con__chat');


class meme{
    constructor(yo,tal){
        this.yo = yo
        this.talves = tal

        this.amitymeme = [
            '<img src="https://memes.cool/memes-graciosos/memes-graciosos-arreglandome-para-escuela.jpg">',
            '<img src="https://de10.com.mx/sites/default/files/2019/08/06/dia_del_gato_mejores_memes_humor_2_0.jpg">',
            '<img src="https://www.eltiempo.com/files/article_multimedia/uploads/2020/02/28/5e591424a207a.jpeg">',
            '<img src="https://www.tuexperto.com/wp-content/uploads/2021/04/meme-martes-13-01.jpg">',
            '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbimvd0Unrp_rTK2EBTMbD5aNHrfwzOC6BZA&usqp=CAU">',
            '<img src="https://ximagen.com/images/2019/05/17/cuando-conquetean-a-mi-novio-que-no-es-mi-novio.md.jpg">',
            '<img src="https://californiamemes.com/wp-content/uploads/2019/10/Top-21-Memes-divertidos-sobre-chicos-11.jpg">',
            '<img src="https://i.blogs.es/0ec27f/memess/1366_2000.jpg">',
            '<img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/10/14/16026820905595.png">',
            '<img src="https://diarioenfermero.es/wp-content/uploads/2021/10/meme-1jpg-scaled.jpeg">',
            '<img src="https://i.pinimg.com/236x/fe/4b/10/fe4b10e8b85ac84820e64d8ece9c82c1.jpg">',
            '<img src="https://media.primicias.ec/2021/11/24103516/gatoESCALADA-1024x574.jpg">',
            '<img src="https://www.tuexpertoapps.com/wp-content/uploads/2020/12/memes-2020-2021-05.png">',
            '<img src="https://www.okchicas.com/wp-content/uploads/2021/09/Memes-el-juego-del-calamar-10-730x617.jpg">',
            '<img src="https://www.tuexperto.com/wp-content/uploads/2021/07/mememartesytrecegato-3.png">',
            '<img src="https://img.wattpad.com/5c31fa35bf00889522720bda608fefd5695ed99f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f37467a41306737737978594734413d3d2d3134322e313632653132363531363531383736373132353631343735343437342e6a7067?s=fit&w=720&h=720">',
            '<img src="https://memes-graciosos.com/images/2019/03/03/memes-graciosos-en-espanol-1.png">',
            '<img src="https://imagenesactual.com/wp-content/uploads/2018/10/5b81e2a77613c.jpeg">',
        ];
        this.mos()
    }
    mos(){
        if (this.yo == this.talves) {
            let rammeme = parseInt(Math.random()*this.amitymeme.length)
            conchatmeme.innerHTML += `<div class="yo"><div class="yo__div"><p class="yo__txt">${this.yo}</p></div></div>`;
            setTimeout(() => {
                conchatmeme.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">okey</p></div></div>`
                setTimeout(() => {
                    conchatmeme.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">${this.amitymeme[rammeme]}</p></div></div>`
                }, 800);
            }, 900);
        }
    }
}

btnmeme.addEventListener('click',()=>{
    const m = new meme(txmeme.value,'muestrame un meme')
    const pa = new meme(txmeme.value,'pasame un meme')
    const ma = new meme(txmeme.value,'mandame un meme')
})