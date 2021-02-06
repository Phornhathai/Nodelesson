const func1 = require('./myFunction')
console.log(func1.app_name() , func1.day)


function callback01()
{
    console.log('3 Message from callback01')
}

function runApp(cb)
{
    console.log('8 Running...')
    cb() // execute function that reference function
}

runApp(callback01)  //reference to name of function -> new name function like cb 
///////////////////////////// other example //////////////////////////
function showResult(result)
{
    console.log('16 Result is: ' + result)
}
// ============================================

function computeSomething( a, b, show )
{
    let res = a + b
    show(res)
}

computeSomething(1,2, showResult) 

computeSomething( 1 , 1 , showResult)


computeSomething( 1 , 2 , function(result){
    console.log('32 Result is: ' + result)
})

computeSomething( 1 , 2 , (result) => {
    console.log('36 Result is: ' + result)
})

let array = [ 0 , 2,  4 ] 


array.map( (item) => {
    console.log(item)
} )

array.map( item => { console.log(item) } )

let array1 = [ 1 , 2,  4 , 5 ]

let res1 = array.find( (item) => {   // find method will return only 1 value of variable , instant of break
    if(item % 2 === 0)
        return item
})

console.log('array.find ' + res1)

let res2 = array.filter( (item) => {   // find method will return array
    if(item % 2 === 0)
        return item
})

console.log('array.filter ' , res2)

let array2 = [ 1 , 2,  4 , 5 ]

let res3 = array2.reduce( (total,item) => {
    return total = total + item
})

console.log(res3)
///////////////////////////////// array 2D ////////////////////////////
let array2D = [ [ 1 , 2 ] , [ 3 , 4]]

let array2D_2 = [        // type of tree (data structure for searching in node) call by index
    [1 , 2] ,  
    [4 , 5] 
  ]

  console.log('79' , array2D_2.length)  //root node has 2 indexs ~ generic tree?? (data structure) has found more than binary tree.
  //generic tree that has any general branch.

let list = [ 0, 70, 12, 8 ]

console.log(list.sort())

let list1 = [ 0, 70, 12, 8 ]

console.log( list1.sort( (a, b) =>{ return a - b } ) )

console.log( list1.reverse( (a, b) =>{ return a - b } ) )


let data = [ { id: 41, name: "John" } , 
             { id: 22, name: "Coma" } ]


console.log( data.sort( (a, b) =>{ return a - b } ) ) //due to it can't sorting of value but it can run correctly and show original value

console.log( data.sort( (a, b) =>{ return a.id - b.id} ) )


let listData1 = [ 0, 70, 12, 8 ]
let listData2 = [ 99 , 108 ]

let mergeData = [ ...listData1 , ...listData2] //symbol 3 dot called spread operator that contribute each value of array

console.log( mergeData )















