const fs = require("fs")

//about myself
const aboutMyself = "My Name is Elaye Nelson. I'm 19 years old, an undergraduate and a software developer. I am passionate about building business solutions and creating impact throught tech. My interest revolves around cybersecurity, blockchain, energy, youth and community development"


const myself = () => {
    fs.writeFile( "./about/about", aboutMyself, (err) => {
        if(err){
            console.log(err.message)
        } else{
            console.log("Read about me in the about directory")
        }
    })
}

myself()

//Two major ways of passing data around components

const twoWays = "We can pass data around components by using the props parameter/object and by destructuring each data as parameters "

const tellWays = () => {
    fs.writeFile( "./data/data", twoWays, (err) => {
        if(err){
            console.log(err.message)
        } else{
            console.log("Learn how to pass data in components in data directory")
        }
    })
}

tellWays()

const difference = "React.js is a javascript library for building complex user interface while Next.js is a javascript framework for building and managing database"

const differentiate = () => {
    fs.writeFile( "./difference/difference", difference, (err) => {
        if(err){
            console.log(err.message)
        } else{
            console.log("Difference between React.js and Next.js in difference directory")
        }
    })
}

differentiate()