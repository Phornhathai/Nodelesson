function delay(millisec)
{
    return new Promise( (resolve) => {
        setTimeout( () => { 
            resolve( new Date() ) 
        } 
        , millisec)
    } ) 
}

async function testAsyncAwait()
{
    console.log("Start in", new Date() )
    let awaitDate = await delay(500) 
    console.log(1, awaitDate )
    console.log("year await" , awaitDate.getFullYear())
    
}

testAsyncAwait()

