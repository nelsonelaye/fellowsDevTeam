const elements = ["a", "b", 1, 6, "a", "6", "c"]

const findDuplicate = () => {

    for(el of elements) {
        let elIndex = elements.indexOf(el)
        

    }
    elements.forEach((el) => {
        const dup = elements.find((e) => e === el)
        console.log(dup)
    })
}

findDuplicate()

