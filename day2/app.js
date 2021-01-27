let a = 0

if ( a == 0 )
    console.log(" Zero ! 1") 

if ( a == false )
	console.log(" Zero ! 2")

if ( a == "0" )
	console.log(" Zero ! 3")
    
if ( a === "0" )
    console.log(" Zero ! 4")
    
let b 

if ( b === undefined )
    console.log(" Found undefined ! 1")
    
if ( b === null )
    console.log(" Found null ! ")

// if ( test === undefined )
//     console.log(" Found Undefined ! ")

let c = { } 

if ( c.test === undefined )
    console.log(" Found Undefined ! c.test")

 c = { test: null } 

if ( c.test === undefined )
    console.log(" Found Undefined ! c.test:null")

let d = { test: 50 } 

    if ( d.test !== undefined && d.test !== null)
        console.log("Pass")
    else
        console.log("Found Empty Data")
    
d = { test: "" } 

        if ( d.test !== undefined && d.test !== null && d.test.lenght > 0 ) // ดักใน javascript ถ้าเป็น array d.test.lenght > 0
            console.log("Pass 3")
        else
            console.log("Found Empty Data")
    
