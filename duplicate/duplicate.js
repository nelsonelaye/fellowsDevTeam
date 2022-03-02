//pick each individual element
//find if there exist more than one of that element
//if true, remove one else 

const elements = ["a", "b", 1, 6, "a", 6, "c"]

const findDuplicate = () => {

    for(el of elements) {
       let dup = elements.filter((e) => e === el)
        console.log(dup)

        if(dup.length > 1) {
            let newEl = dup[0]
            let dupIndex = elements.lastIndexOf(newEl)
            elements.splice(dupIndex, 1)
        }
    }

    console.log(elements)
}

findDuplicate()

