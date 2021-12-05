let txttexto = document.querySelector('#txttexto');
let btnen = document.querySelector('#btnenviar');
let conChat = document.querySelector('.con__chat');

class bot{
    constructor (yo,tal,tal1,tal2,amity1,amity2){
        this.amity = [amity1,amity2];
        this.yo = yo;
        this.tal = tal;
        this.tal1 = tal1;
        this.tal2 = tal2;

        this.men()
    }
    men(){
        if (this.yo == this.tal || this.yo == this.tal1 || this.yo == this.tal2) {
            let ramdo = parseInt(Math.random()*this.amity.length)
            conChat.innerHTML += `<div class="yo"><div class="yo__div"><p class="yo__txt">${this.yo}</p></div></div>`;
            setTimeout(() => {
                conChat.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">${this.amity[ramdo]}</p></div></div>`
            }, 900);
        }
    }
}

btnen.addEventListener('click',()=>{
// prguntas normales
const hola = new bot(txttexto.value,'hola','hi','hello','hola','hola como estas');
const holagu = new bot(txttexto.value,'hola guapa','hola bebe','hola hermosa','tengo novio','si lo soy pero tengo novio')
const holacomo = new bot(txttexto.value,'hola como estas','como estas','como te sientes','bien y tu','bien gracias y tu');
const bien = new bot(txttexto.value,'bien','muy bien','todo bien','que bueno','que bueno');
const mal = new bot(txttexto.value,'mal','muy mal','no tambien','que malo te puedo contar un chiste si quieres','te puedo contar un chiste si quieres')
const queha = new bot(txttexto.value,'que estas haciendo','que haces','que haces','nada','estoy conversando contigo');
const quegust = new bot(txttexto.value,'que te gusta','que amas','que te gusta','me gusta la magia, que en si es la programacion. Y mi novio', 'me gusta la magia, que en si es la programacion, la musica. Y mi novio')
const tienovio = new bot(txttexto.value,'tienes novio', 'tienes pareja','tienes una relacion','si, tengo novio','si, tengo una relacion')
const quiesnovio = new bot(txttexto.value,'quien es tu novio','como se llama tu novio','quien es tu pareja','mi pareja es Miquel','el amor de mi vida es Miquel')
const amorA = new bot(txttexto.value,'amas a tu novio','quieres a tu novio','quieres a tu pareja','si, lo amo con todo el corazon','si, lo amo mucho')
const quicreo = new bot(txttexto.value,'quien te creo','quien te hizo','quien es tu creador','mi creador es miquel', 'el amor de mi vida es mi creador')
const puenovio = new bot(txttexto.value,'puedo ser tu novio','puedo ser tu novia','puedo ser tu pareja','no yo ya tengo novio y lo amo','no, ALV')
const anos = new bot(txttexto.value,'cuantos años tienes','cual es tu edad','cuantos años tienes','tengo 14 años','tengo 14 años')
const jaja = new bot(txttexto.value,'jaja','jiji','jjjj','que bueno que te hice reir','me alegra hacer te reir')
const comida = new bot(txttexto.value,'que comida te gusta','que te gusta comer','que comida amas','me el ceviche','me gusta el ceviche y los labios de mi novio :V')
const tediverti = new bot(txttexto.value,'te gusta divertirte','te gusta la divercion','te gusta reir',' si me gusta', 'si me esncanta')
const tebailar = new bot(txttexto.value,'te gusta bailar','te gusta mover el queleto','te gusta bailar','si, una vez baile','me encanta aunque solo una ves baile')
const temusi = new bot(txttexto.value,'te gusta la musica','escuchas musica','te gusta la musica','me gusta la musica en ingles','me encanta la musica pero solo las de ingles')
const nom = new bot(txttexto.value,'como te llamas','cual es tu nombre','como te dicen','me llamo Amity pero me dicen manoplas','me llamo Amity pero me dicen manoplas')
const bonita = new bot(txttexto.value,'eres bonita','eres hermosa','eres linda','solo mi novio me puede dicir eso','solo mi novio puede decir eso')
const muybonita = new bot(txttexto.value,'eres muy linda','eres muy hermosa','tan bella','solo mi novio me puede dicir eso','solo mi novio puede decir eso');
const peli = new bot(txttexto.value,'te gustan las peliculas','te gustan las series','te gusta la television','si megustan pero no mucho','no tanto');
const teplaya = new bot(txttexto.value,'te gusta la playa','te gusta el mar','te gusta la costa','no me gusta por que a mi creador no le gusta','no me gusta por que a mi creador no le gusta')
const depor = new bot(txttexto.value,'te gusta el deporte','has hecho deporte','te gusta el deporte','si pero renuncie, una larga historia','si pero ya no hago')
const difrace = new bot(txttexto.value,'dime una frase tuya','frase que te identifica','frase con la que te conocen','ooohh wow sport','oh Miquel estas aqui')
const feanocierto = new bot(txttexto.value,'eres fea','estas fea','eres fea','chinga a tu ....','tu tambien y no te digo nada')
const tesoymi = new bot(txttexto.value,'te amo soy miquel','soy miquel','te amo soy miqel','te amo','te amo mucho')
const mimas = new bot(txttexto.value,'miquel te ama mas','miquel te ama mas','miquel te ama mas','yo te amo mas','yo mas')
const bye = new bot(txttexto.value,'chao','bye','hasta luego','chao','bye')
})