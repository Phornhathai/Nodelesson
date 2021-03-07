let proms = new Promise((resolve , reject) => 
        {


        })
    proms.then((result)=>{
        // Use Result first time . . .
        console.log(1,result)
        
    })

    proms.then((result)=>{
        // Use Result Second time . . .
        console.log(2,result)
        
    })

    //setTimeout( () => { 
     //   console.log(new Date()) } , 1000 )
        
    function delay(time , callback)
        {
            setTimeout( callback , time )
        }
    
        console.log("Start in ",new Date())



    let firstproms = new Promise( (resolve , reject)  =>
        {
            delay(1000, () => {
                resolve( new Date())
            })
        })

        firstproms.then( (result) => {
            console.log(1, result)
        })    
        firstproms.then( (result) => {
            console.log(2, result)
        })    

