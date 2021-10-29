import { gql } from "@apollo/client";

export const SEARCH_REPOS = gql`
query repoSearch($after: String,$search: String!){
    search(first:10, query: $search type: REPOSITORY after:$after){
        nodes {
            ... on Repository {
            nameWithOwner
            createdAt
            description
            id
        }
    }
    pageInfo{
        endCursor
    }
    }
}
`;

export const SHOW_REPO = gql`
    query showRepo($id: ID!){
        node(id: $id) {
            ... on Repository {
            name
            createdAt
            description
            nameWithOwner
            pushedAt
            url
            owner {
                avatarUrl
                login
            }
        }
    }
}
`;