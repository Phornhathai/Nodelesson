const { MongoClient }   = require('mongodb')

// ------------------------------------------------------------------------------------

const   db_protocol     = `mongodb://`,
        db_path         = `/admin`,
        db_host         = `35.221.177.16`,     
        db_port         = `:4545`,  //27017 is default port in mongoDB : Now connect from external by configure in docker. If when use in server, it will create new container by port 27017 and ip host will change (name of container instead of ip no.)
        db_url          = db_protocol+db_host+db_port+db_path

// ------------------------------------------------------------------------------------

let authuser = {  user: `admin`,  password: `1234@` }
let authmech = `SCRAM-SHA-1`

module.exports = {
    connect,
    find,
    insert,
    count,
    remove,
    update
}
// ------------------------------------------------------------------------------------
function connect()
{
    let options = {  auth: authuser , authMechanism: authmech ,  useUnifiedTopology: true }

    return  new Promise(
        function(resolve, reject){

            MongoClient.connect(db_url, options , 
                    function (err, connection) 
                    {
                        if(err){
                            console.log(err)
                            reject(err)
                        }else{  
                            resolve(connection)
                        }
                    })
        }
    )
}
// ------------------------------------------------------------------------------------
async function find( dbname, collectionName, filter = {} )
{
    let result                  = { success: true }

    try{
        let connection          = await module.exports.connect()
        let cursor              = connection.db(dbname).collection(collectionName).find( filter )

            result.data         = await cursor.toArray()
                                  await cursor.close
                                  await connection.close()
    }catch(excp){
        console.log(excp)
        result.success = false
    }

    return result

}
// ------------------------------------------------------------------------------------
async function insert (dbname , collectionName , data)
{
    let result                  = { success: true }  //must have every functions
    try{
        let connection          = await module.exports.connect()
        result.data             = await connection.db(dbname).collection(collectionName).insertMany(data)
                                await connection.close()
    }catch(excp){
        console.log(excp)
        result.success = false
    }
   return result
}
// ------------------------------------------------------------------------------------
async function count (dbname , collectionName , query = {}){
    let result                  = { success: true }
    try{
        let connection          = await module.exports.connect()
        result.data             = await connection.db(dbname).collection(collectionName).find(query).count()
                                await connection.close()

    }catch(excp){
        console.log(excp)
        result.success = false
    }
    return result

}

async function remove (dbname , collectionName , filter={}){
    let result              = { success: true }
    try{
        let connection          = await module.exports.connect()
        result.data             = await connection.db(dbname).collection(collectionName).remove(filter)
                                await connection.close()

       
    }catch(excp){
        console.log(excp)
        result.success = false
    }
    return result


}
async function update (dbname , collectionName , data , filter={}, operator="set"){
    let result              = { success: true }
    try{
        let connection          = await module.exports.connect()
        let options   = {
            upsert : false,
            multi : true,
            ordered : false,
            }
            let updateData = {}
            switch(operator){
                case     "push"     : updateAction  = { $push    :   data }  
                    break
                case     "pull"     : updateAction  = { $pull    :   data }  
                    break
                case     "pullAll"  : updateAction  = { $pullAll :   data }  
                    break
                default             : updateAction  = { $set     :   data }  
                    break
            }


       
        result.data             = await connection.db(dbname).collection(collectionName).updateMany(filter , updateData, options)
                                    await connection.close()

       
    }catch(excp){
        console.log(excp)
        result.success = false
    }
    return result


}



