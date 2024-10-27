const users = [
    {
        name: "Prashrijan",
        address: "Dee Why, Sydney",
        hobbies: "Coding",
        career: "Software Developer"
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

function career({career}) {
    return ` He is a ${career}`
}

function createBio({name="", address="", hobbies="", ...rest}){

    let str = `${name} is from ${address}, and likes to ${hobbies}`

    if(rest.career){
        str += career(rest)   
    }
    
    return str
}


