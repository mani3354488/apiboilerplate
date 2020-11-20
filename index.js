const { ApolloServer, gql } = require('apollo-server');
const server = new ApolloServer({ typeDefs, resolvers });

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
      books: () => books,
    },
};

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });