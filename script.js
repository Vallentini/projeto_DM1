
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
                inStock: 30


            },
            {
                title: 'Skeleton Margie',
                image:'assets/images/funkopopMargeSimpson.webp',
                description: 'Funko Pop',
                inStock: 30
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
               inStock: 30
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
                inStock: 30
            },
            {
                title: 'Sideshow Bob',
                image:'assets/images/funkopopSideshowBob.webp',
                description: 'Funko Pop',
                inStock: 30
            },
            {
                title:'Ralph Wiggum',
                image:'assets/images/funkopopRalphWiggum.webp',
                description: 'Funko Pop',
                inStock: 30
            }


        ]);

        return {
            cart,
            products,
            addToCart
        };
    }
}).mount('#container');