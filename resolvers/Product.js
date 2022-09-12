
/* exports.Product = {
    category: (parent, args, {categories}) => {        

        const categoryId = parent.categoryId
        return categories.find(category => category.id === categoryId)
    }
} */

// ue destruction-el

exports.Product = {
    category: ({categoryId} ,args, {categories}) => {        
        return categories.find((category) => category.id === categoryId)
    },

    reviews: ({id}, args, {reviews}) => {
        return reviews.filter(review => review.productId === id)
    }
}


//RESOLVER: to return that data, name has to be the same



// Resolver has 3 parameters: Parent, Args, Context!
// ARGS gonna be an object that is going to contain all of the parameters that we have supplied
//CATEGORY: needs the name of it, and the sociated products!
// PARENT: category child-ja id-je egyezzen a category-val

//CONTEXT: DATA-T NE KELLJEN MINDENHOVA BEIMPORTALNI 