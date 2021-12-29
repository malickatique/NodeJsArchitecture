
const fetch_me_clouds = ( i_will_not_call_you ) => 
{
    setTimeout(() => 
    {
        i_will_not_call_you("Cloud", "rays");

    }, 1000);
}

fetch_me_clouds( (_this, that) => 
{
    console.log( _this, that );
});

console.log("Thunderstorm");


// Output: ?