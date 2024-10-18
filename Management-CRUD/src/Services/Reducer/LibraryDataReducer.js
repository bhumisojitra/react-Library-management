const initial = {
    books : JSON.parse(localStorage.getItem('library')) || [],
    book : null,
    isLoading: false,
    isError: false,
    errorMsg: 'soming error occured'
}

const libraryDataReducer = (state = initial , action) => {

    switch (action.type) {

        case "addBook" :

            const allData = action.payload;
            localStorage.setItem('library', JSON.stringify(allData))

            console.log("allData", allData);

            return{
                ...state,
                books : allData,
                isLoading: false,
                isError: false,
                book: null
            }

        case "loding":
            return{
                ...state,
                isLoading : true
            }
    
        case "error":
            return{
                ...state,
                isError : true,
                errorMsg : "Network error"
            }

        case "singleData":
            return{
                ...state,
                book : action.payload,
                isLoading : false,
            }

        default: 

            return state;

    }
}

export default libraryDataReducer;