const func          = require('./func')
const { testData , funcEx }    = require('./func')

console.log(func.funcEx())
console.log(funcEx())

console.log("From func: " , func.testData)
console.log("From testData: " , testData)

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
function runMongo( db_url, options )
{
    MongoClient.connect(db_url, options, function(err, connObj) 
  {
           if(err){
            console.log(err)
          }else{  
             console.log(connObj)
		    connObj.close()     // For close connection
          }
       }
    )
}
//runMongo(db_url, options)

let dbname      = 'TestDB'
let collection  = 'TestCollection'
let data        = { Username: 'test01' , Firstname: 'John' }

runMongoInsertOne(db_url, options , dbname , collection , data)
function runMongoInsertOne(db_url, options , dbname , collection , data )
{
    MongoClient.connect(db_url, options, function(err, connObj) {

        if(err){
            console.log(err)
        }else{  
            connObj.db(dbname).collection(collection).insertOne(data , function(err , result){
                if(err){
                    console.log(err)
                }else{
                    if(result.insertedCount && result.insertedCount > 0){
                        console.log(result.ops)
                    }
    
                }
                connObj.close()       
            })
           
        }
    })
}

