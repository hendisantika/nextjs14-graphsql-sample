import {createYoga} from "graphql-yoga";

import {schema} from "../../../server/graphql";

const {handleRequest} = createYoga({
    schema,
    graphqlEndpoint: '/api/graphql',
    fetchAPI: {Request, Response}
});

export {handleRequest as GET, handleRequest as POST}
