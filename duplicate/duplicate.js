//pick each individual element
//find if there exist more than one of that element
//if true, remove one else 

const elements = ["a", "b", 1, 6, "a", 6, "c"]

const removeDuplicate = () => {

    for(el of elements) {
       let findDuplicate = elements.filter((e) => e === el)
        console.log(findDuplicate)

        if(findDuplicate.length > 1) {
            let elementWithDuplicate = findDuplicate[0]
            let duplicateIndex = elements.lastIndexOf(elementWithDuplicate)
            elements.splice(duplicateIndex, 1)
        }
    }

    console.log(elements)
}

removeDuplicate()

