const elements = ["a", "b", 1, 6, "a", 6, "c", 6, 6, 6, 6]

const removeDuplicate = () => {
    const newArray = elements.reduce((values, element) => {
        if(!values.includes(element)) {
            values.push(element)
        }
    return values;
    }, [])
    return newArray;
}

console.log(removeDuplicate());