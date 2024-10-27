const users = [
    {
        name: "Prashrijan",
        address: "Dee Why, Sydney",
        hobbies: "Coding"
    },
    {
        name: "Anuska",
        address: "Parramatta, Sydney",
        hobbies: "Painting"
    },
    {
        name: "Madan",
        address: "Liverpool, Sydney",
        hobbies: "Cooking"
    },
    {
        name: "Shubik",
        address: "Chatswood, Sydney",
        hobbies: "Guitar Playing"
    },
    {
        name: "Pradip",
        address: "Bondi, Sydney",
        hobbies: "Surfing"
    }
]


users.forEach(user => {

    const bio = createBio(user)    
    console.log(bio)
});

function createBio({name, address, hobbies}){

    return `${name} is from ${address}, and likes to ${hobbies}`    
}


