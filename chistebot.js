
let tx = document.querySelector('#txttexto');
let btnc = document.querySelector('#btnenviar');
let conChatchi = document.querySelector('.con__chat');


class chiste{
    constructor(yo,tal){
        this.yo = yo
        this.talves = tal
        this.amitychistes = [
            'Está un niño haciendo deberes y le pregunta a su papá: ¡Papá!, ¿cómo se escribe la palabra campana? Su padre responde: Pues se escribe igual que suena hijo. Gracias, papá, le responde el niño antes de escribir tolón, tolón.',
            'Un grupo de personas están haciendo el censo en la ciudad cuando llegan a una casa llamada "Paraíso". Tocan a la puerta y sale un hombre, de modo que preguntan: Señor, buenos días. ¿Cuál es su nombre? Mi nombre es Adán. Señor Adán, ¿cuál es el nombre de su esposa? El nombre de mi esposa es Eva, responde. Ummmm, a ver… ¿Por casualidad la serpiente también vive aquí? ¡No amigo, claro que no!, la suegra fue desterrada de este paraíso hace tiempo.',
            'Un hombre todo feliz le pregunta a su esposa: ¿Mi amor, qué me vas a regalar el día de mi cumpleaños? Ella le responde: mira, ¿ves ese coche que hay en la esquina? El hombre, super emocionado le dice: ¡Dios mío! ¿Enserio vas a regalarme ese coche? Ella, sorprendida, le dice: ¡claro que no!, te voy a regalar una plancha de ese mismo color.',
            'El niño le pregunta a la mamá: ¿Mamá, de dónde venimos nosotros? La madre responde: Hijo, venimos de Adán y Eva. El niño replica: ¡Mamá! En la escuela nos dicen que venimos del mono. La madre le responde: Hijo mío, una cosa es la familia de tu padre y otra cosa es la mía.',
            '¿A qué te dedicas? , le preguntan a un hombre en una agencia de empleos. El hombre responde: a matar dragones. Y de forma exclamativa le dicen: ¡pero los dragones no existen! El hombre responde de manera interrogativa: ¿Ustedes han visto alguno? El que le está entrevistando de inmediato responde: no señor, claro que no. Y el hombre, orgulloso, replica: pues eso, porque yo los maté a todos.',
            'Anita le dice a su amiga: Loca, ya sé por qué estoy engordando. ¡Es por culpa del champú! En el envase dice "para dar cuerpo y volumen". ¿Y que vas a hacer? Le pregunta su amiga. Mira, dice Anita, a partir de ahora me lavaré el pelo con jabón para lavar los platos, en el encase dice "quita grasa, hasta la más difícil".',
            'Mamá, mamá, ¿sabías que Juana de Arco era drogadicta? La mamá le mire y le dice: ¿Pero qué dices? Eso no es cierto. Que sí, mamá, en el libro pone que murió por heroína.',
            '¿Cómo se llama el campeón de apnea japonés? Tokofondo.',
            'El General de batallón le pregunta a un soldado: Soldado, ¿cuál es mi rango? El soldado, dubitativo, contesta: No lo sé, ¿mi capitán? ¡No seas ridículo! contesta el general, ¿no ves todas las estrellas que llevo en el pecho? ¡Ah sí! dice el soldado, entonces eres mi cielo.',
            'Una mujer le dice a su marido: Juan, estás obsesionado con el fútbol y la verdad es que me haces falta. Él, enfadado, le contesta: ¡eso no es verdad, ni te he tocado! Vamos a recurrir al VAR.',
            'Un padre en la misa dice en alta voz: Hoy solo me limitaré a confesar a las devotas. Se detiene delante de su asiento una feligresa y le dice al padre: ¿Y cuándo nos toca a las que no vinimos en botas?',
            'Una liebre le dice a una tortuga en una fiesta: Tortuga, se acabó el vino, toma este dinero y ve a comprar. La tortuga se va y vuelve al cabo de un año. Entonces le dice a la liebre: ¿Cómo lo quieres, blanco o tinto?',
            'La profesora le dice a Jaimito: Jaimito, ¿qué me puedes decir sobre la gelatina? No sé, profesora. En mi antigua escuela solo conocí la "I" latina y la "Y" griega, pero la "G" latina nunca la escuche.',
            'Un loco con un palo de escoba hace ver que mira por uno de los extremos. Llegan los psiquiatras y le preguntan: ¿Qué está pasando aquí? El loco les responde: Estamos viendo la luna. Uno de los psiquiatras hace lo mismo que los locos y dice: Pero ustedes están más locos que cuando llegaron, por aquí no se puede ver nada. El loco les responde entonces: Más loco está usted, nosotros llevamos todo el día intentando ver algo y usted quiere verlo a la primera.',
            'En una discoteca, se acerca un hombre a una mesa y le dice a una de las chicas: ¿Bailamos? La muchacha le dice al caballero: ¿Y quién sacará a mi amiga? No te preocupes, le dice el hombre, ¡seguridad, saquen a esa mujer de aquí!',
            '¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.',
            '- Oye, ¿cuál es tu plato favorito y por qué? <br>- Pues el hondo, porque cabe más comida…',
            '- ¿Tienes WiFi?- Sí- ¿Y cuál es la clave?- Tener dinero y pagarlo',
            '¿Por qué las focas del circo miran siempre hacia arriba? Porque es donde están los focos.',
            '¿Qué le dice una iguana a su hermana gemela? Somos iguanitas',
            '-Abuelo, ¿por qué estás delante del ordenador con los ojos cerrados? - Es que Windows me ha dicho que cierre las pestañas.',
            'Si los zombies se deshacen con el paso del tiempo ¿zombiodegradables?',
            '- Hola muñeca. - Hola tobillo.',
            '- Papá, papá, ¿puedo ir al cine?- Sí, Jaimito, pero no entres.',
            '- Jaimito, ¿quién fue Juana de Arco?- Una drogadicta, maestra.- ¿De dónde sacas eso?- El libro dice que murió por heroína.',
            '- Papá, ¿qué se siente tener un hijo tan guapo?- No sé hijo, pregúntale a tu abuelo...',
            'La maestra:- Jaimito, si en esta mano tengo 8 naranjas y en esta otra 6 naranjas ¿Qué tengo?- Unas manos enormes, señorita.',
            'Una mujer le dice a su marido: Cariño, ¿te gusta mi disfraz? Sí, mi amor, contesta el hombre, es un disfraz de vaca muy bonito. ¡Pero si voy disfrazada de dálmata!',
            'Un padre le dice a su hijo: Qué bonito te ha quedado el tatuaje del diablo en el brazo. El chico, atormentado, le contesta: ¿Pero qué dices? Si es la cara de mi novia.',
            'Un hombre todo borracho llega a alcohólicos anónimos y allá le preguntan: ¿Vino sólo? El borracho saca la copa y dice: ¡No!, mejor con hielo',
            'El profesor le pregunta a Jaimito: Jaimito, ¿qué fórmula química es H2O+CO+CO? ¡Fácil, profesor! Es agua de coco.',
            'Un tonto le dice a su amigo: El médico me mandó tomarme 3 muestras de orina, pero la verdad es que solo me he podido tomar 2. ¡Sabe horrible!',
        ]
        this.chis()
    }
    chis(){
        if (this.yo == this.talves) {
            let ramdos = parseInt(Math.random()*this.amitychistes.length)
            conChatchi.innerHTML += `<div class="yo"><div class="yo__div"><p class="yo__txt">${this.yo}</p></div></div>`;
            setTimeout(() => {
                conChatchi.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">okey</p></div></div>`
                setTimeout(() => {
                    conChatchi.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">${this.amitychistes[ramdos]}</p></div></div>`
                }, 800);
            }, 900);
        }
    }
}

btnc.addEventListener('click',()=>{
    const cuenchis = new chiste (tx.value,'cuentame un chiste');
    const dimechis = new chiste (tx.value,'dime un chiste')
    const cuenchis1 = new chiste (tx.value,'Cuentame un chiste');
    const dimechis2 = new chiste (tx.value,'Dime un chiste')
    const cuenchis3 = new chiste (tx.value,'Cuéntame un chiste');
    const dimechis4 = new chiste (tx.value,'cuéntame un chiste')
})
