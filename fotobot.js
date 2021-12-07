
let txfo = document.querySelector('#txttexto');
let btnfo = document.querySelector('#btnenviar');
let conChatfo = document.querySelector('.con__chat');


class foto{
    constructor(yo,tal){
        this.yo = yo
        this.talves = tal

        this.amityfotos = [
            '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQgFfAGfEUppe4eAQhcDugUb0o7K7yqexsA&usqp=CAU">',
            '<img src="https://i.pinimg.com/originals/d4/2a/b4/d42ab4b174a3d7309437c867519e6606.png">',
            '<img src="https://w0.peakpx.com/wallpaper/92/398/HD-wallpaper-amity-amithy-amity-bligth-the-owl-house.jpg">',
            '<img src="https://ih1.redbubble.net/image.1733898807.3012/pp,504x498-pad,600x600,f8f8f8.jpg">',
            '<img src="https://ae01.alicdn.com/kf/Hdd72f75aea26421097f0b26d8c7d3c5bP/Amity-Blight-New-Purple-Hair-With-Heart-Soft-Button-Pin-Gift-Cute-Jewelry-Collar-Cartoon-Brooch.jpg_Q90.jpg_.webp">',
            '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3acc143-332f-43c9-8707-d61106b45a55/deixtyj-1f74d6f8-7ad7-46ec-96ee-fdfe80cc5fe0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IzYWNjMTQzLTMzMmYtNDNjOS04NzA3LWQ2MTEwNmI0NWE1NVwvZGVpeHR5ai0xZjc0ZDZmOC03YWQ3LTQ2ZWMtOTZlZS1mZGZlODBjYzVmZTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p_RZXP7FlHdGgQO_ej7fDU2R2qT0xhN2efkeVmo6DXI">',
            '<img src="https://i.pinimg.com/564x/de/8c/a8/de8ca8b661546e9d4371a7f6c4a1428f.jpg">',
            '<img src="https://i.pinimg.com/736x/6e/9c/03/6e9c03cad3121536889d9baff0b4c99b.jpg">',
            '<img src="https://pbs.twimg.com/profile_images/1422999329179160578/Ws4gSivy_400x400.jpg">',
            '<img src="http://pm1.narvii.com/7691/a0a9d80ddf3a83a13f47253da09338339264cae4r1-640-853v2_00.jpg">',
            '<img src="https://i.pinimg.com/236x/cd/cb/96/cdcb96c6c19fb97c188d837f2a08842b.jpg">',
            '<img src="https://ih1.redbubble.net/image.2516463138.8805/st,small,507x507-pad,600x600,f8f8f8.jpg">',
            '<img src="https://cdnb.artstation.com/p/assets/images/images/033/964/245/medium/reema-e-amity.jpg?1611043884">',
            '<img src="https://i.pinimg.com/originals/c8/23/d4/c823d4a31c15584f6e32b2a0d273d045.jpg">',
            '<img src="https://i.pinimg.com/564x/de/8c/a8/de8ca8b661546e9d4371a7f6c4a1428f.jpg">',
            '<img src="https://i.pinimg.com/originals/cf/99/98/cf9998b6c96fcb875582abc413c60e07.jpg">',
            '<img src="http://pm1.narvii.com/7691/6a0c43a877ce087447e78a6b1e30cf4cf25f883fr1-720-723v2_uhq.jpg">',
            '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGOxa2-IWB1468m832U2B_e-8cCEwCsehlg&usqp=CAU">',
            '<img src="https://i.pinimg.com/originals/75/f2/7a/75f27a8b92a7212ebbafbc8748664475.jpg">',
            '<img src="https://i.pinimg.com/originals/82/31/07/823107a79ee9d7a157e112829d6bb5bd.jpg">',
            '<img src="https://mir-s3-cdn-cf.behance.net/projects/404/0e16bd126933069.Y3JvcCwxODA3LDE0MTMsMCwxMDI.jpeg">',
            '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1e5o4Oqv4d-bxN8rGJpLNJUdKRR8VJHPbw&usqp=CAU">',
            '<img src="https://i.pinimg.com/originals/e1/7b/cd/e17bcd828fc02c93c231c72a8e36e233.jpg">',
            '<img src="https://i.pinimg.com/736x/d2/23/42/d223422185216b04507ff9cd3db65ca6.jpg">',
            '<img src="https://nitter.nixnet.services/pic/media%2FE63q8gcXIAgg39B.jpg%3Fname%3Dsmall">',
            '<img src="https://steamuserimages-a.akamaihd.net/ugc/1693899082394882845/AAE98C82BA74A24AF13B55A179CBF676861FC359/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">',
            '<img src="https://i.pinimg.com/564x/e9/2e/a4/e92ea40f95caa2fe9b4be9d12ea4206b.jpg">',
            '<img src="https://img.wattpad.com/a4e13ef2e13aad61f5365474edd4779f55a80e2a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f37776176572d6931354671796e773d3d2d3137342e313639636265356531656635316666613933353030363336373333352e6a7067?s=fit&w=720&h=720">',
            '<img src="https://pbs.twimg.com/media/E7GG_o1X0AMEJGl.jpg">',
            '<img src="https://pbs.twimg.com/media/E6-6GRHWYAQenrk.jpg:small">',
            '<img src="https://i.pinimg.com/originals/a8/d9/90/a8d99053c8289253ffe734c14da59d89.png">',
            '<img src="https://i.pinimg.com/originals/75/f2/7a/75f27a8b92a7212ebbafbc8748664475.jpg">',
            '<img src="https://pbs.twimg.com/media/E_OWp3yUYAYlESR.jpg">',
        ];
        this.mos()
    }
    mos(){
        if (this.yo == this.talves) {
            let ram = parseInt(Math.random()*this.amityfotos.length)
            conChatfo.innerHTML += `<div class="yo"><div class="yo__div"><p class="yo__txt">${this.yo}</p></div></div>`;
            setTimeout(() => {
                conChatfo.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">okey</p></div></div>`
                setTimeout(() => {
                    conChatfo.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">${this.amityfotos[ram]}</p></div></div>`
                    conChatfo.innerHTML += `<div class="amity"><div class="amity__div"><p class="amity__txt">te gusta</p></div></div>`
                }, 800);
            }, 900);
            txfo.value=""
        }
    }
}

btnfo.addEventListener('click',()=>{
    const manfoto = new foto(txfo.value,'mandame una foto tuya')
    const pasfoto = new foto(txfo.value,'pasame una foto tuya')
    const envi = new foto(txfo.value, 'enviame una foto tuya')
    const pasimg = new foto(txfo.value,'tomate una foto y pasamela')

    const manfoto1 = new foto(txfo.value,'mándame una foto tuya')
    const pasfoto1 = new foto(txfo.value,'pásame una foto tuya')
    const envi1 = new foto(txfo.value, 'envíame una foto tuya')
    const pasimg1 = new foto(txfo.value,'tomate una foto y pásamela')

    const manfoto2 = new foto(txfo.value,'Mandame una foto tuya')
    const pasfoto2 = new foto(txfo.value,'Pasame una foto tuya')
    const envi2 = new foto(txfo.value, 'Enviame una foto tuya')
    const pasimg2 = new foto(txfo.value,'Tomate una foto y pasamela')

    const manfoto3 = new foto(txfo.value,'Mándame una foto tuya')
    const pasfoto3 = new foto(txfo.value,'Pásame una foto tuya')
    const envi3 = new foto(txfo.value, 'Envíame una foto tuya')
    const pasimg3 = new foto(txfo.value,'Tomate una foto y pásamela')

})
