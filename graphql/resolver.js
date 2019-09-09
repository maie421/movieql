import { yym, getById } from "./db";

const resolvers = {
    Query: {
        yym: () => yym,
        person: (_, { id }) => getById(id)
    }
}

export default resolvers;