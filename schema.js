const { gql } = require('apollo-server');

//SCHEMA: to define what type of data I want for example from the fetch: (how our queries going to look)
//Scalar types: String, Int, Float, Boolean , Array (Arrayen beluli tipusok is lehetnek null-ok, !-el tudom fixalni: [String!] v [String!]!)
//null is one exception!! all the types can be nothing = null as well or we can use ! to avoid that flexibility

//define how our product (object) going to look: type Product tehat object eseten alatta keszitsuk el a semat hogy fog az object kinezni

// ha csak 1 product kell az array-bol: product(id: ID!): Product

exports.typeDefs = gql` 
    type Query {
        hello: String!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
        helloTwo: [String!]!

        products(filter:ProductsFilterInput): [Product!]!

        product(id: ID!): Product  

        categories: [Category!]!

        category(id:ID!): Category
    }

    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
        addProduct(input: AddProductInput!): Product!
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category!
        reviews: [Review!]!
    }

    type Category {
        id: ID!
        name: String!
"""         products: [Product!] """
        products(filter:ProductsFilterInput): [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }

    input AddCategoryInput {
        name: String!
    }
    input AddProductInput {
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        categoryId: String!
    }
`
