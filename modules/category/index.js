const { gql } = require('apollo-server')

const typeDefs = gql`
  extend type Query {
    category(id: ID!): Category
    categories: [Category]
  }

  extend type Product {
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product]
  }
`

const resolvers = {
  Query: {
    category(_, { id }) {
      return {
        id,
        name: 'Homeware',
        products: [
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
    },
    categories() {
      return [
        {
          id: Math.round(Math.random() * 100),
          name: 'Homeware',
          products: [
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
        },
        {
          id: Math.round(Math.random() * 100),
          name: 'Kitchen',
          products: [
            {
              id: Math.round(Math.random() * 100),
              name: 'Toaster',
              price: 1000
            },
            {
              id: Math.round(Math.random() * 100),
              name: 'Oven',
              price: 2000
            }
          ]
        }
      ]
    },

    Product: {
      category() {
        return {
          id: Math.round(Math.random() * 100),
          name: 'Homeware'
        }
      }
    }
  }
}

module.exports = {
  typeDefs,
  resolvers
}
