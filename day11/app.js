let dbname      = 'TestDB'
let collection  = 'TestCollection'
let data        = { Username: 'test03' , Firstname: 'Aum' }

const { MongoClient }   = require('mongodb')

const   db_protocol     = `mongodb://`,
        db_path         = `/admin`,   //default path
        db_host         = `104.155.221.92`,  
        db_port         = `:4545`,    
        db_url          = db_protocol+db_host+db_port+db_path

let authuser = {
    user: `admin`, 
    password: `1234@`
}
let authmech = `SCRAM-SHA-1`

let options = {            
    auth: authuser ,
    authMechanism: authmech ,
    useUnifiedTopology: true
}

// let firstproms = new Promise( (resolve , reject)  =>
//                     {
//                         MongoClient.connect(db_url, options, function(err, connObj) {
//                             if(err){ reject(err) }
//                             else{
//                                 resolve(connObj)
//                             }
//                         })
//                     })

// firstproms.then( (result) => {
//     let connObj = result
//     connObj.db(dbname).collection(collection).insertOne(data , (err, result) => {
//         if(err){ console.log(err) }
//         if(result.insertedCount && result.insertedCount > 0){
//             console.log(result.ops)
//         }
//         connObj.close()
//     })
// })
// ------------------------------------------------------------------------------------
function connect(db_url, options )
{
    return new Promise( (resolve , reject) => {    //function executor have 2 parameters

        MongoClient.connect(db_url, options, function(err, connObj) {
            if(err){ reject(err) }
            else{
                resolve(connObj)
            }
        })
    })
}
// ----------------------------------------------------------------
function createOne( connObj , dbname , collection , data )   // like then function in promise
{
    return new Promise( (resolve , reject) => {
        connObj.db(dbname).collection(collection).insertOne(data , (err, result) => {
            if(err){ reject(err) }
            else if(result.insertedCount && result.insertedCount > 0){
                resolve( { connection: connObj , resultOps: result.ops } )   //return 2 values , not yet close object
            }
        })
    })
}
// ----------------------------------------------------------------
function runMongoInsertOne(db_url, options , dbname , collection , data )
{
    connect( db_url, options ).then( (result) => {
        createOne( result , dbname , collection , data ).then( (result) => {
            console.log(result.resultOps)
            result.connection.close() // close connection that returned value 
        })
    })
}

data 	= { Username: 'test03' , Firstname: 'Tom' }
runMongoInsertOne(db_url, options , dbname , collection , data)

data     = { Username: 'test04' , Firstname: 'Pee' }
runMongoInsertOne(db_url, options , dbname , collection , data)




                