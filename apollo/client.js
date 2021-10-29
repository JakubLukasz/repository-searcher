import { token } from "../helpers/token"
import { ApolloClient,InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        authorization: `Bearer ${token}`,  
    },
    cache: new InMemoryCache(),
})