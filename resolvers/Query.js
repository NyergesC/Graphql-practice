const { reviews } = require("../db")

exports.Query = {
    hello: () => {
        return "World!!!"
    },
    numberOfAnimals: () => {
        return 55
    },  
    price: () => {
        return 123.456
    },   
    isCool: () => {
        return true
    },
    helloTwo: () => {
        return ['hello', 'my', 'friend']
    } ,   
    products: (parent, { filter }, {products}) => {
        let filteredProducts = products;

        if(filter) {
            const { onSale, avgRating } = filter
            if(onSale) {
                filteredProducts =filteredProducts.filter(product => {
                    return product.onSale
                })
            }
            if([1,2,3,4,5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let numberOfReviews = 0
                    reviews.forEach(review => {
                        if(review.productId === product.id){
                            sumRating += review.rating;
                            numberOfReviews++
                        }
                    });
                    const avgProductRating = sumRating / numberOfReviews

                    return avgProductRating >= avgRating
                })
            }
        }
        return filteredProducts
    },
    
    product: (parent, {id}, {products}) => {
        return products.find((product) => product.id === id)

     },

    categories: (parent, args, {categories}) => {
        return categories
    },

    category: (parent, {id}, {categories}) => {
        return categories.find((category) => category.id === id)
    },
}


//RESOLVER: to return that data, name has to be the same



// Resolver has 3 parameters: Parent, Args, Context!
// ARGS gonna be an object that is going to contain all of the parameters that we have supplied
//CATEGORY: needs the name of it, and the sociated products!
// PARENT: category child-ja id-je egyezzen a category-val

//CONTEXT: DATA-T NE KELLJEN MINDENHOVA BEIMPORTALNI 