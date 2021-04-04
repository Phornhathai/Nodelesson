const MongoCom = require('./MongoDBAdapter')
async function start(){
    let data = await MongoCom.find("testdb1", "table1" , {})
    console.log(data)
    data.data.map((item)=>{
        console.log(item.name, item.age )
    })
    // let insData = await MongoCom.insert("testdb1", "table1" , { name: 'name01' , age: 20 }) insert one
    let insData = await MongoCom.insert("testdb1", "table1" , [{ name: 'name02' , age: 11 } , { name: 'name03' , age: 22 } ])
    console.log(insData)
    let CountData = await MongoCom.count("testdb1", "table1" )
    console.log(CountData.data)
    let dataRemove = {name: 'name01'}
    let rmData = await MongoCom.remove("testdb1", "table1" , dataRemove)
    console.log(rmData)
    
    let updateData = await MongoCom.update("testdb1", "table1" , { name: 'name04' , address : 'bangkok'} , {name : 'name02'} )
    let updateData2 = await MongoCom.update("testdb1", "table1" , { address : [10170 , 10310]} , {name : 'name03'} )
    console.log(updateData2)

    








}

start()