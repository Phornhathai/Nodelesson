
let num = 10
function getTen()
{
    return  10
}

    num = getTen()


console.log(num , "1")

num = getTen

console.log(num , "2")

console.log(num(), 3)

let num1 = getTen  //change name of method 

console.log(num1(), 4)

num = function(){
    return  10
}

console.log(num , 5)
console.log(num() , 6)

num = () =>{
    return  10
}

console.log(num , 7)
console.log(num() , 8)

num = () =>{
    this.a = 2  
    return  this.a + 10
}

console.log(num , 9)	
console.log(num() , 10) //execute this.a = 2 -> this.a + 10 
console.log(this.a, 11) //assign value so it's return 2 , assigned value to "this.a" = global value 

//console.log(a , 12) //undefined because it is not defined 

let  personA = {  
    firstname: "John",
    lastname: "Valkan",
    age: 32,
    fullname: function() { // create function in jvs object
    return this.firstname; // this.firstname likes properties in object , personA = Object
    }
} 

console.log(personA.fullname) //no execute function so return name of function 

console.log(personA.fullname()) //call value by name of object and plus call name ob fullname 

console.log(this.firstname)
    








































