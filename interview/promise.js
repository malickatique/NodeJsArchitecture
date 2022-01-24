const fetch_me_clouds = new Promise( (resolve, reject) => 
{
    setTimeout(()=> 
    {
        reject("I fulfilled my promise.");

        resolve("I will not abide by my words." );

    }, 2000)
});

fetch_me_clouds

.then((res) => {
    console.log( res );
})

.catch((res) => {
    console.log( res );
});

console.log("Thunderstorm");

// Output: ?