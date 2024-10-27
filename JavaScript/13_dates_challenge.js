// Date challange : Create a function that takes a food and the expire data and retuns one of the followings:
// 1. if expired: AB is expired 4 days ago
// 2. if not expired: you have 10 days to use this product.


const foods = [
    {
        name : "Tuna",
        expiredIn : "2024-04-09"
    }, 
    {
        name: "Yogurt",
        expiredIn: "2024-11-10"
    },
    {
        name: "Bacon",
        expiredIn: "2024-10-27"
    }
]

const checkExpiry = (foods) => {
    
    const message = foods.map(food => {
        let currentDate = Date.now()
        let expiryDate = new Date(food.expiredIn).getTime()

        let diffTime = expiryDate - currentDate
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        if(diffDays < 0){
            return `${food.name} was expired ${Math.abs(diffDays)} days ago.`
        }else{
            return `You have ${diffDays} days to use this product.`
        }
    });

    return message
}

console.log(checkExpiry(foods));

 