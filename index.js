//create a server

const { ApolloServer, gql } = require('apollo-server')

//SCHEMA: to define what type of data I want for example from the fetch: (how our queries going to look)
//Scalar types: String, Int, Float, Boolean , Array (Arrayen beluli tipusok is lehetnek null-ok, !-el tudom fixalni: [String!] v [String!]!)
//null is one exception!! all the types can be nothing = null as well or we can use ! to avoid that flexibility

//define how our product (object) going to look: type Product tehat object eseten alatta keszitsuk el a semat hogy fog az object kinezni

const typeDefs = gql` 
    type Query {
        hello: String!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
        helloTwo: [String!]!

        products: [Product!]!
    }

    type Product {
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
    }
`

//RESOLVER: to return that data, name has to be the same

const resolvers = {
    Query: {
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
        products: () => {
            return [{
                name: "Darth",
                description: "valami",
                quantity: 4,
                price: 1234,
                onSale: true,
            }]
        }    
    }
}

//to put those namees inside the ApolloServer:


const server = new ApolloServer({
    typeDefs,
    resolvers,

});

//Listen

server.listen().then(({url}) => {
    console.log('server is ready at' + url)
})