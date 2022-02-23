//  readingList = [{id: number, name: string, read: boolean}]


 const readingList = [
     {id: 1, name: 'Harry Potter', read: true},
     {id: 2, name: 'Ready Player 1', read: false},
     {id: 4, name: 'Lord of the Rings', read: true},
     {id: 4, name: 'Grapes of Wrath', read: false},

     

    ]

    const newBook = {id: 3 , name: "Can't Hurt Me", read: false}

    const addNewBook = [...readingList, newBook]

    // console.log('Original Reading List:', readingList)
    


    let updatedReadingList = readingList.map((book) =>{
        if(book.id === 1) {
            return{...book, read: !book.read}
        }
        return book 
    })

    // const deleteBook = (read) =>{
    //    let bookFilter= readingList.filter(readingList.true)

    //     if(readingList.read === true){
    //         return{...readingList, readingList.filter() }
    //     }
    //     return read
    //     }
    const deleteBook = readingList.filter((b)=>b.read !==true)
    



    console.log('Original Reading List', readingList)
    console.log('Book Added:', addNewBook)
    console.log('Updated Reading List', updatedReadingList)
    console.log('Delete read books:', deleteBook)

