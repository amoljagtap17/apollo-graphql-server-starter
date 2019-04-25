const { ApolloServer } = require('apollo-server')

const server = new ApolloServer({
  modules: [
    require('./modules/product')
  ]
})

server.listen().then(({ url }) => console.log(`Server started at ${url}!`))
