//pick each individual element
//find if there exist more than one of that element
//if true, remove one else 

const elements = ["a", "b", 1, 6, "a", 6, "c", 6, 6, 6, 6]

const removeDuplicate = () => {

    for(el of elements) {
        let findUniqeElement = elements.find((e) => e === el)
        console.log(findUniqeElement);
    //    let findDuplicate = elements.filter((e) => e === el)
    //     console.log(findDuplicate)

        // if(findDuplicate.length > 1) {
        //     let elementWithDuplicate = findDuplicate[0]
        //     let duplicateIndex = elements.lastIndexOf(elementWithDuplicate)

        //     for(let i =0; i<findDuplicate.length; i++) {
        //         elements.splice(duplicateIndex, 1)
        //         if(findDuplicate.length === 1) {
        //             continue;
        //         }
        //     }
           
        // }
    }

    // console.log(elements)
}

removeDuplicate()

