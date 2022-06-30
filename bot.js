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
            txttexto.value = ""
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

const hola1 = new bot(txttexto.value,'Hola','Hi','Hello','hola','hola como estas');
const holagu1 = new bot(txttexto.value,'Hola guapa','Hola bebe','Hola hermosa','tengo novio','si lo soy pero tengo novio')
const holacomo1 = new bot(txttexto.value,'Hola como estas','Como estas','Como te sientes','bien y tu','bien gracias y tu');
const bien1 = new bot(txttexto.value,'Bien','Muy bien','Todo bien','que bueno','que bueno');
const mal1 = new bot(txttexto.value,'Mal','Muy mal','No tambien','que malo te puedo contar un chiste si quieres','te puedo contar un chiste si quieres')
const queha1 = new bot(txttexto.value,'Que estas haciendo','Que haces','Que haces','nada','estoy conversando contigo');
const quegust1 = new bot(txttexto.value,'Que te gusta','Que amas','Que te gusta','me gusta la magia, que en si es la programacion. Y mi novio', 'me gusta la magia, que en si es la programacion, la musica. Y mi novio')
const tienovio1 = new bot(txttexto.value,'Tienes novio', 'Tienes pareja','Tienes una relacion','si, tengo novio','si, tengo una relacion')
const quiesnovio1 = new bot(txttexto.value,'Quien es tu novio','Como se llama tu novio','Quien es tu pareja','mi pareja es Miquel','el amor de mi vida es Miquel')
const amorA1 = new bot(txttexto.value,'Amas a tu novio','Quieres a tu novio','Quieres a tu pareja','si, lo amo con todo el corazon','si, lo amo mucho')
const quicreo1 = new bot(txttexto.value,'Quien te creo','Quien te hizo','Quien es tu creador','mi creador es miquel', 'el amor de mi vida es mi creador')
const puenovio1 = new bot(txttexto.value,'Puedo ser tu novio','Puedo ser tu novia','Puedo ser tu pareja','no yo ya tengo novio y lo amo','no, ALV')
const anos1 = new bot(txttexto.value,'Cuantos años tienes','Cual es tu edad','Cuantos años tienes','tengo 14 años','tengo 14 años')
const jaja1 = new bot(txttexto.value,'Jaja','Jiji','Jjjj','que bueno que te hice reir','me alegra hacer te reir')
const comida1 = new bot(txttexto.value,'Que comida te gusta','Que te gusta comer','Que comida amas','me el ceviche','me gusta el ceviche y los labios de mi novio :V')
const tediverti1 = new bot(txttexto.value,'Te gusta divertirte','Te gusta la divercion','Te gusta reir',' si me gusta', 'si me esncanta')
const tebailar1 = new bot(txttexto.value,'Te gusta bailar','Te gusta mover el queleto','Te gusta bailar','si, una vez baile','me encanta aunque solo una ves baile')
const temusi1 = new bot(txttexto.value,'Te gusta la musica','Escuchas musica','Te gusta la musica','me gusta la musica en ingles','me encanta la musica pero solo las de ingles')
const nom1 = new bot(txttexto.value,'Como te llamas','Cual es tu nombre','Como te dicen','me llamo Amity pero me dicen manoplas','me llamo Amity pero me dicen manoplas')
const bonita1 = new bot(txttexto.value,'Eres bonita','Eres hermosa','Eres linda','solo mi novio me puede dicir eso','solo mi novio puede decir eso')
const muybonita1 = new bot(txttexto.value,'Eres muy linda','Eres muy hermosa','Tan bella','solo mi novio me puede dicir eso','solo mi novio puede decir eso');
const peli1 = new bot(txttexto.value,'Te gustan las peliculas','Te gustan las series','Te gusta la television','si megustan pero no mucho','no tanto');
const teplaya1 = new bot(txttexto.value,'Te gusta la playa','Te gusta el mar','Te gusta la costa','no me gusta por que a mi creador no le gusta','no me gusta por que a mi creador no le gusta')
const depor1 = new bot(txttexto.value,'Te gusta el deporte','Has hecho deporte','Te gusta el deporte','si pero renuncie, una larga historia','si pero ya no hago')
const difrace1 = new bot(txttexto.value,'Dime una frase tuya','Frase que te identifica','Frase con la que te conocen','ooohh wow sport','oh Miquel estas aqui')
const feanocierto1 = new bot(txttexto.value,'Eres fea','Estas fea','Eres fea','chinga a tu ....','tu tambien y no te digo nada')
const tesoymi1 = new bot(txttexto.value,'Te amo soy miquel','Soy miquel','Te amo soy miqel','Te amo','te amo mucho')
const mimas1 = new bot(txttexto.value,'Miquel te ama mas','Miquel te ama mas','Miquel te ama mas','yo te amo mas','yo mas')
const bye1 = new bot(txttexto.value,'Chao','Bye','Hasta luego','Chao','bye')
const nom3 = new bot(txttexto.value,'cómo te llamas','cuál es tu nombre','cómo te dicen','me llamo Amity pero me dicen manoplas','me llamo Amity pero me dicen manoplas')
const nom2 = new bot(txttexto.value,'Cómo te llamas','Cuál es tu nombre','Cómo te dicen','me llamo Amity pero me dicen manoplas','me llamo Amity pero me dicen manoplas')
const temusi2 = new bot(txttexto.value,'te gusta la música','te gusta la música','te gusta la música','me gusta la musica en ingles','me encanta la musica pero solo las de ingles')
const temusi3 = new bot(txttexto.value,'Te gusta la música','Escuchas música','escuchas música','me gusta la musica en ingles','me encanta la musica pero solo las de ingles')
const peli2 = new bot(txttexto.value,'Te gustan las películas','te gusta la televisión','Te gusta la televisión','si megustan pero no mucho','no tanto');
const peli3 = new bot(txttexto.value,'te gustan las películas','te gustan las películas','te gustan las películas','si megustan pero no mucho','no tanto');
const tediverti2 = new bot(txttexto.value,'Te gusta la diversión','Te gusta la diversión','Te gusta reír',' si me gusta', 'si me esncanta')
const tediverti3 = new bot(txttexto.value,'te gusta reír','te gusta reír','te gusta reír',' si me gusta', 'si me esncanta')
const anos2 = new bot(txttexto.value,'cuál es tu edad','cuál es tu edad','Cuál es tu edad','tengo 14 años','tengo 14 años')
const quiesnovio3 = new bot(txttexto.value,'Cómo se llama tu novio','cómo se llama tu novio','cómo se llama tu novio','mi pareja es Miquel','el amor de mi vida es Miquel')
const tienovio2 = new bot(txttexto.value,'tienes una relación', 'tienes una relación','Tienes una relación','si, tengo novio','si, tengo una relacion')
const mal2 = new bot(txttexto.value,'no también','no también','No también','que malo te puedo contar un chiste si quieres','te puedo contar un chiste si quieres')
const queha3 = new bot(txttexto.value,'Que estás haciendo','que estás haciendo','que estás haciendo','nada','estoy conversando contigo');
const holacomo3 = new bot(txttexto.value,'Cómo te sientes','cómo te sientes','Cómo te sientes','No estoy autoriza en decir el nombre pero el nombre es "....."','No estoy autoriza en decir el nombre pero el nombre es "....."');
const persolovemiquel = new bot(txttexto.value,'Que persona le gusta a Miquel','Que persona le gusta a miquel','que persona le gusta a miquel','No estoy autoriza en decir el nombre pero el nombre es "....."','No estoy autoriza en decir el nombre pero el nombre es "....."');
const persolovemiquel2 = new bot(txttexto.value,'QUE PERSONA LE GUSTA A MIQUEl','Qué persona le gusta a Miquel','que persona le gusta a Miquel','No estoy autoriza en decir el nombre pero el nombre es "....."','No estoy autoriza en decir el nombre pero el nombre es "....."');
})
