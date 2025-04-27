
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
                inStock: 0


            },
            {
                title: 'Skeleton Margie',
                image:'assets/images/funkopopMargeSimpson.webp',
                description: 'Funko Pop',
                inStock: 0
            },
            {
                title: 'Maggie Simpson',
                image: 'assets/images/funkoMaggieSimpson.webp',
                description: 'Funko Pop',
                inStock: 30


            },
            {
               title: 'Bart Simpson',
               image: 'assets/images/funkopopBart.jpg',
               description: 'Funko Pop',
               inStock: 2
            },
            {
                 title: 'Milhouse Fallout Boy',
                 image:'assets/images/funkopopMilhouseFalloutBoy.png',
                 description: 'Funko Pop',
                 inStock: 30
            },
            {
                title: 'Hugo Simpson',
                image: 'assets/images/funkopopHugoSinpson.jpg',
                description: 'Funko Pop',
                inStock: 3
            },
            {
                title: 'Sideshow Bob',
                image:'assets/images/funkopopSideshowBob.webp',
                description: 'Funko Pop',
                inStock: 10
            },
            {
                title:'Ralph Wiggum',
                image:'assets/images/funkopopRalphWiggum.webp',
                description: 'Funko Pop',
                inStock: 0
            },
            {
                title:'Deep Space Homer',
                image:'assets/images/deepspacehomer.jfif',
                description: 'Funko Pop',
                inStock: 0
            },
            {
                title:'Mr. Sparkley',
                image:'assets/images/mrsparkley.jfif',
                description: 'Funko Pop',
                inStock: 0
            },
            {
                title:'Evil Homer',
                image:'assets/images/evilhomer.jfif',
                description: 'Funko Pop',
                inStock: 7
            },
            {
                title:'Lisandra',
                image:'assets/images/lisandra.jfif',
                description: 'Funko Pop',
                inStock: 20
            }

        ]);

        return {
            cart,
            products,
            addToCart
        };
    }
}).mount('#container');