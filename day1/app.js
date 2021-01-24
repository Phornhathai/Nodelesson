let a

console.log(a)

let b = []

console.log(b[0])

let c = null

console.log(c)

let d = undefined

if(d === null)
	console.log("d is null")
else if(d === undefined)
	console.log("d is undefined")
 
let e = { }

console.log(e)

let f = { "head":"Yes" , body:2 , foot:false , body2:[0,1,2] , body3:{} , body4:null }


console.log(f)
console.log(f["head"])
console.log(f.head)

console.log(f.body)
console.log(f["body"])
console.log(typeof f)

console.log(f[0])
console.log(typeof f.body , typeof f.foot , typeof f.head , typeof f.body2 , typeof f.body3 , typeof f.body4)
