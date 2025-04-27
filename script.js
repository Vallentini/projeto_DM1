
const { createApp, ref } = Vue;

createApp({
    setup() {
        const cart = ref(0);

        const addToCart = () => {
            cart.value += 1;
        };

        const products = ref([
            {
                title: 'Homer',
                image:'assets/images/funkoHomer.png',
                description: 'Funko Pop',
                inStock: 0,
                price: 'R$150,00'
            },
            {
                title: 'Skeleton Margie',
                image:'assets/images/funkopopMargeSimpson.webp',
                description: 'Funko Pop',
                inStock: 0,
                price: 'R$120,00'
            },
            {
                title: 'Maggie Simpson',
                image: 'assets/images/funkoMaggieSimpson.webp',
                description: 'Funko Pop',
                inStock: 30,
                price: 'R$230,00'
            },
            {
               title: 'Bart Simpson',
               image: 'assets/images/funkopopBart.jpg',
               description: 'Funko Pop',
               inStock: 2,
               price: 'R$190,00'
            },
            {
                 title: 'Milhouse Fallout Boy',
                 image:'assets/images/funkopopMilhouseFalloutBoy.png',
                 description: 'Funko Pop',
                 inStock: 30,
                 price: 'R$160,00'
            },
            {
                title: 'Hugo Simpson',
                image: 'assets/images/funkopopHugoSinpson.jpg',
                description: 'Funko Pop',
                inStock: 3,
                price: 'R$200,00'
            },
            {
                title: 'Sideshow Bob',
                image:'assets/images/funkopopSideshowBob.webp',
                description: 'Funko Pop',
                inStock: 10,
                price: 'R$190,00'
            },
            {
                title:'Ralph Wiggum',
                image:'assets/images/funkopopRalphWiggum.webp',
                description: 'Funko Pop',
                inStock: 0,
                price: 'R$180,00'
            },
            {
                title:'Deep Space Homer',
                image:'assets/images/deepspacehomer.jfif',
                description: 'Funko Pop',
                inStock: 0,
                price: 'R$250,00'
            },
            {
                title:'Mr. Sparkley',
                image:'assets/images/mrsparkley.jfif',
                description: 'Funko Pop',
                inStock: 0,
                price: 'R$150,00'
            },
            {
                title:'Evil Homer',
                image:'assets/images/evilhomer.jfif',
                description: 'Funko Pop',
                inStock: 7,
                price: 'R$170,00'
            },
            {
                title:'Lisandra',
                image:'assets/images/lisandra.jfif',
                description: 'Funko Pop',
                inStock: 20,
                price: 'R$50,00'
            }

        ]);

        return {
            cart,
            products,
            addToCart
        };
    }
}).mount('#container');