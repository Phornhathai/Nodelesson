function taskOne(x,time){
	return new Promise((resolve) =>{
		setTimeout( () =>{
			resolve(x)
			},time)
		})
	}

async function main(){
	console.log(await taskOne(40,1500));
	console.log(await taskOne(30,500));
 
}
main()

