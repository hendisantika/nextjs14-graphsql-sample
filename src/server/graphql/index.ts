import {buildSchema} from "garph";

import {resolvers} from "./resolvers";
import {g} from "./src/app/schema";

export const schema = buildSchema({g, resolvers});
