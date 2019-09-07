const nicolas ={
    name:"yeong",
    age:18,
    gender:"여"

};
const resolvers = {
    Query: {
        person:() => nicolas 
    }
};
export default resolvers;