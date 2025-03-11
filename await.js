console.log("First");

async function a() { 
    await new Promise((resolve) => {
        setTimeout(() => {
            let sum = 0;  // Initialize sum
            for (let i = 0; i < 100000000; i++) {
                sum += i;
            }
            console.log(sum);
            resolve();  // Resolve the promise after execution
        }, 4000);
    });
}

a();
console.log("End");
