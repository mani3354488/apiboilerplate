const resolvers = {

    Query : {
        async user(root, {id}){

        },
        async allUsers(root){
            
        },
        async allRecipe(root){
            
        },
        async recipe(root, {id}){
            
        },
    },

    Mutation : {
        async createUser(root, {name, email, password }, { models }){
            return models.User.create({
                name, email, password: await bcrypt.hash(password, 10)
            })
        },
        async createRecipe(root, {userId, title, ingredients, direction }, { models }){
            return models.Recipe.create({ userId, title, ingredients, direction })
        },
    }
}