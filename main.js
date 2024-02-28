const app = Vue.createApp({
    data () {
        return{
            cart:0,
            brand: "Vue Mastery",
            product: "Socks",
            description: "They are socks",
            selectedVariant: 0,
            url: "https://www.vuemastery.com",
            inventory: 0,
            onSale: true,
            details: ["50 cotton", "30% wool", "20% polyester"],
            variants:[
                { id: 2234, color: 'green', image: "./assets/images/socks_green.jpg", quantity: 50},
                { id: 2235, color: 'blue', image: "./assets/images/socks_blue.jpg", quantity: 0}
            ],
            sizes: ["xsmall", "small", "medium", "large", "xlarge"],
        }
    },
    methods:{
        addToCart(){
            this.cart +=1;
        },
        updateVariant(index){
            this.selectedVariant = index;
          
        },
        removeFromCart(){
            if (this.cart>0){
                this.cart -=1;
            } else{
                this.cart = 0;
            }
           
        },
    }, 
    computed:{
        title(){
            return this.brand + " " + this.product;
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity;
        },
        image(){
            return this.variants[this.selectedVariant].image;
        }
      
    }
})