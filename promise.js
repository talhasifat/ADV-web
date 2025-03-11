console.log("First");
const prom=new Promise((resolve,reject)=>{

    let success=true
    if(success){
        resolve("Done")
    }
    else{
        reject("Note Done")
    }
})

prom
.then((message)=>console.log(message))
.then((error)=>console.log(error))

console.log("End");