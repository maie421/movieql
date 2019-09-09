export const yym  =[
    {
        id:1,
        name:"yeong",
        age:18,
        gender:"여"
    
    },
    {
        id:2,
        name:"mee",
        age:21,
        gender:"여"
    
    }
];

export const getById = id => {
    const filteredPeople = yym .filter(yym  => yym .id === id);
    return filteredPeople[0];
  };