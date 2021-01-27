let a = 0

console.log( a === 0 ? "Zero" : "Not Zero" )

function getName1(arg) 
{
    console.log(arg)
}

getName1("John")

function getName2(arg) 
{
    return "Mr." + arg
}

console.log( getName2("John") )



function getName3(arg = "AA") 
{
    return "Mr." + arg
}

console.log( getName3() )
//page 8
function getName4(arg = "AA") 
{
    "Mr." + arg  //no return 
}

console.log( getName4() )

let fullname = getName4()

console.log( fullname )
//page 9
function testArrowFunction(arg) 
{
        (a = 4 ) => {
	        console.log( arg )
        console.log( a )
    }
	console.log( a , "test")  // , has space
}
testArrowFunction("aum")
//page 10
function testArrow(arg) 
{
    ((a = 4 ) => {
    	    console.log( arg )
        console.log( a )
    })()
	console.log( a )
}
testArrow(999)

















