const authenticated = async (req, res, next) => {
    if(false)
    {
        // You can also attach/append data with the req
        // req.user = user;
        next();
    }
    else
        res.send("You are not authenticated!");
}

module.exports = authenticated;