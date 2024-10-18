import axios from 'axios';

export const addRec = (data) => {
    return {
        type : "addBook",
        payload : data
    }
}

const loding = () => {
    return {
        type : "loding"
    }
}

const error = (err) => {
    return {
        type : "error",
        payload : err
    }
}

const singleRec = (id) => {

    return {
        type : "singleData",
        payload : id
    }
}

export const libAsncy = (addBook) => {

    return(dispatch) => {
        dispatch(loding())

        axios.post('http://localhost:3002/LibraryData', addBook).then((res) => {

            console.log("res : ", res);
            dispatch(addDataAsncy())
        }).
        catch((err) => {
            console.log("err : ", err);
            dispatch(error(err))
        })
    }
}

export const addDataAsncy = () => {

    return(dispatch) => {
        dispatch(loding())

        axios.get('http://localhost:3002/LibraryData').then((res) => {

            console.log("res : ", res);
            
            dispatch(addRec(res.data))
        }).
        catch((err) => {
            console.log("err : ", err);
            dispatch(error(err))
        })
    }
}

export const singleAsncy = (id) => {

    return(dispatch) => {
        dispatch(loding())

        axios.get(`http://localhost:3002/LibraryData/${id}`).then((res) => {

            console.log("resp : ", res);
            dispatch(singleRec(res.data))
        }).
        catch((err) => {
            console.log("err : ", err);
            dispatch(error(err))
        })
    }

}

export const updateAsncy = (editBook) => {

    return(dispatch) => {
        dispatch(loding())

        axios.put(`http://localhost:3002/LibraryData/${editBook.id}`, editBook).then((res) => {

            console.log("res : ", res);
            dispatch(addDataAsncy())
        }).
        catch((err) => {
            console.log("err : ", err);
            dispatch(error(err))
        })
    }
}

export const deleteAsncy = (id) => {

    return(dispatch) => {
        dispatch(loding())

        axios.delete(`http://localhost:3002/LibraryData/${id}`).then((res) => {

            console.log("res : ", res);
            dispatch(addDataAsncy())
        }).
        catch((err) => {
            console.log("err : ", err);
            dispatch(error(err))
        })
    }
}

export const roleAsncy = (cat) => {

    return(dispatch) => {
        dispatch(loding())

        axios.get(`http://localhost:3002/LibraryData?cat=${cat}`).then((res) => {

            console.log("res : ", res);
            dispatch(addRec(res.data))
        }).
        catch((err) => {
            console.log("err : ", err);
            dispatch(error(err))
        })
    }
}
