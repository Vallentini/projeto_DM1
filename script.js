
const { createApp, ref } = Vue;

createApp({
    setup() {
        const cart = ref(0);

        const addToCart = (product) => {
            cart.value += 1;
            let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      
            const existingItem = storedCart.find((item) => item.id === product.id);
      
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              storedCart.push({
                id: product.id,
                title: product.title,
                description: product.description,
                image: product.image,
                quantity: 1,
              });
            }
      
            localStorage.setItem("cart", JSON.stringify(storedCart));
          };

        const products = ref([
            {
                id: 1,
                title: 'Pop! Homer',
                image:'assets/images/funkoHomer.png',
                inStock: 0,
                price: 'R$150,00'
            },
            {
                id: 2,
                title: 'Pop! Skeleton Margie',
                image:'assets/images/funkopopMargeSimpson.webp',
                inStock: 0,
                price: 'R$120,00'
            },
            {
                id: 3,
                title: 'Pop! Maggie Simpson',
                image: 'assets/images/funkoMaggieSimpson.webp',
                inStock: 30,
                price: 'R$230,00'
            },
            {
                id: 4,
               title: 'Pop! Bart Simpson',
               image: 'assets/images/funkopopBart.jpg',
               inStock: 2,
               price: 'R$190,00'
            },
            {
                id: 5,
                 title: 'Pop! Milhouse Fallout',
                 image:'assets/images/funkopopMilhouseFalloutBoy.png',
                 inStock: 30,
                 price: 'R$160,00'
            },
            {
                id: 6,
                title: 'Pop! Hugo Simpson',
                image: 'assets/images/funkopopHugoSinpson.jpg',
                inStock: 3,
                price: 'R$200,00'
            },
            {
                id: 7,
                title: 'Pop! Sideshow Bob',
                image:'assets/images/funkopopSideshowBob.webp',
                inStock: 10,
                price: 'R$190,00'
            },
            {
                id: 8,
                title:'Pop! Ralph Wiggum',
                image:'assets/images/funkopopRalphWiggum.webp',
                inStock: 0,
                price: 'R$180,00'
            },
            {
                id: 9,
                title:' Pop! Deep Space Homer',
                image:'assets/images/deepspacehomer.jfif',
                inStock: 0,
                price: 'R$250,00'
            },
            {
                id: 10,
                title:'Pop! Mr. Sparkley',
                image:'assets/images/mrsparkley.jfif',
                inStock: 0,
                price: 'R$150,00'
            },
            {
                id: 11,
                title:'Pop! Evil Homer',
                image:'assets/images/evilhomer.jfif',
                inStock: 7,
                price: 'R$170,00'
            },
            {
                id: 12,
                title:'Pop! Lisandra',
                image:'assets/images/lisandra.jfif',
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
}).mount('#app');
