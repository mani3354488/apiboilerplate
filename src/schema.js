const {gql} = require('apollo-server');

const typeDef = gql`
    type User{
        id: Int!
        name: String!
        email: String!
        menu: [Recipe!]
    }

    type Recipe {
        id: Int!
        title: String!
        ingredients: String!
        direction: String!
        user: User!
    }

    type Query {
        user(id: Int!): User;
        allUsers(): [User !]
        allRecipe: [Recipe !]
        recipe(id: Int!): Recipe
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): User!
        createRecipe(userId: Int!, title: String!, direction: String!, ingredients: String!): Recipe! 
    }
`