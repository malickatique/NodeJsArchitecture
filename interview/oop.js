class Thunderstorm
{
    notAVariable = "construct";

    constructor()
    {
        notAVariable = "Illuminate";
    }
    
    static letsTry()
    {
        console.log(notAVariable);
    }
}

Thunderstorm.letsTry();