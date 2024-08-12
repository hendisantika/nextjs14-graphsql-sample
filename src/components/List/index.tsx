import {Infer} from "garph";
import {gql, request} from "graphql-request";

import ListItem from "../ListItem";
import {removeTodo} from "./actions";
import {TodoGQL} from "@/server/graphql/schema";

const query = gql`
  query getTodos {
    getTodos {
      id
      title
    }
  }
`;

interface QueryData {
    getTodos: Array<Infer<typeof TodoGQL>>;
}

export default async function List() {
    const {getTodos} = await request<QueryData>(
        "http://localhost:3000/api/graphql",
        query
    );

    return (
        <ul className="space-y-4">
            {getTodos?.map((todo) => {
                return (
                    <ListItem
                        key={todo.id}
                        title={todo.title}
                        todoId={todo.id}
                        removeItem={removeTodo}
                    />
                );
            })}
        </ul>
    );
}
