const messages = [
    "Brian",
    "Ana",
    "Nocolay",
    "Yessica",
    "Laura",
    "Carolina",
    "Paulina",
    "Kevin",
    "David",
    "William"
]

const randomMsg = () => {
    const messge = messages[Math.floor(Math.random() * messages.length)]
    console.log(messge)
}


module.exports = { randomMsg };
