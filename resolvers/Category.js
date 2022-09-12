
/* exports.Category = {
    products: (parent, args, {products}) => {
        const categoryId = parent.id
        return products.filter((product) => product.categoryId === categoryId)
    }
} */
exports.Category = {
    products: ({id: categoryId}, {filter}, {products}) => {
       const categoryProducts = products.filter((product) => product.categoryId === categoryId)
       let filteredCategoryProducts = categoryProducts;

       if(filter) {
        if(filter.onSale === true) {
            filteredCategoryProducts = filteredCategoryProducts.filter(product => {
                return product.onSale
            });
        }
    }
    return filteredCategoryProducts
    }
}


//RESOLVER: to return that data, name has to be the same



// Resolver has 3 parameters: Parent, Args, Context!
// ARGS gonna be an object that is going to contain all of the parameters that we have supplied
//CATEGORY: needs the name of it, and the sociated products!
// PARENT: category child-ja id-je egyezzen a category-val

//CONTEXT: DATA-T NE KELLJEN MINDENHOVA BEIMPORTALNI 