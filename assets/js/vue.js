var app = new Vue({
    el: '#app',
    data: {
        app_name: "Home app",
        page: "add-products",
        list_products: [
            {
                img: "./assets/images/cafeteira-eletrica.png",
                title: "Máquina de café",
                desc: "para fazer café"
            }, 
            {
                img: "assets/images/smart-lampada-removebg-preview.png",
                title: "Lampada",
                desc: "para deixar trazer luz"
            },
            {
                img: "assets/images/sinal-wifi.png",
                title: "jarra",
                desc: "recipiente para liquido"
            },
            {
                img: "assets/images/sinal-wifi.png",
                title: "tv",
                desc: "para entrerimento"
            },
            {
                img: "assets/images/sinal-wifi.png",
                title:"ar-condicionado",
                desc: "para não morrer de calor"
            },
       
            
        ]
    },
    methods: {
        newProducts(){
            const title= window.prompt("Digite o nome do produto: ")
            var desc= window.prompt("Insira a descrição do produto: ")

            this.list_products.push({
                img: "assets/images/sinal-wifi.png",
                title: title,
                desc: desc
            })
        },
        removeProducts(){


        }
    }

})

