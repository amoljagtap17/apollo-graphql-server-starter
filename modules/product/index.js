const { gql } = require('apollo-server')

const typeDefs = gql`
  extend type Query {
    product(id: ID!): Product
    products: [Product]
  }

  type Product {
    id: ID!
    name: String!
    price: Int!
  }
`

const resolvers = {
  Query: {
    product(_, { id }) {
      return {
        id,
        name: 'Lamp',
        price: 1000
      }
    },
    products() {
      return [
        {
          id: Math.round(Math.random() * 100),
          name: 'Lamp',
          price: 1000
        },
        {
          id: Math.round(Math.random() * 100),
          name: 'Sofa',
          price: 2000
        }
      ]
    }
  }
}

module.exports = {
  typeDefs,
  resolvers
}
