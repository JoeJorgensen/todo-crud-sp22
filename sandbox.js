let people = [{id:1, name:'toby', age:18}, {id:2, name:'john', age:22}]

const about =(peeps)=>{
    return peeps.map((peep)=>{
        console.log(peep)
        return`${peep.name} is ${peep.age}`
    })
}
let peepStrings = about(people)
console.log(peepStrings)



// write a function that takes an array of objects [{name:string, age:number}]
// and takes a single object and returns a new array of with the object added
const addPeep=(peeps, peep)=>{
 return [...peeps, peep]
 
}

const newPeople = addPeep(people,{id:3, name:'new', age:32})

console.log(newPeople)
// write a function that takes an array of objects [{name:string, age:number}]
// and an id and adds one to the age of that persons and returns a new array
const updatePeep=(peeps, id)=>{
let updatedPeeps = peeps.map((peep)=>{
    if(peep.id === id){
        return{...peep, age: peep.age +1}
    }
    return peep
})
return updatedPeeps
};
const didTobyChange= updatePeep(people, 1)
console.log('isToby19', didTobyChange)

// write a function that takes an array of objects [{name:string, age:number}]
// and an id and remove that person from array
const deletePeep = (peeps,id)=>{
return peeps.filter(p=>{
    return p.id !==id
})
};

const f1 = deletePeep(people)
const f2 = deletePeep([{id:1},{id:2},{id:3}], 2)

console.log(f1)
console.log(f2)

