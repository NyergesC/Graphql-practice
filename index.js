//create a server

const { ApolloServer, gql } = require('apollo-server')

//SCHEMA: to define what type of data I want for example from the fetch: (how our queries going to look): String, 

const typeDefs = gql` 
    type Query {
        hello: String
    }
`

//RESOLVER: to return that data, name has to be the same

const resolvers = {
    Query: {
        hello: () => {
            return "World"
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