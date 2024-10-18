import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { deleteAsncy, singleAsncy } from '../../Services/Actions/LibraryDataAction';
import img from '../../assets/1.webp'

const ViewData = () => {

    const { books, isLoading, isError, errorMsg, book } = useSelector(state => state.libraryData)

    console.log("books : ", books);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleEdit = (id) => {

        console.log("Editing book with ID:", id);
        dispatch(singleAsncy(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteAsncy(id))
    }

    useEffect(() => {
        if(book){
            navigate('/edit')
        }
    },[book])

  return (
    <>
        <div className='back-view'></div>
        <div className='back-data'>
            {
                isError ?
                    <h1>{errorMsg}</h1>
                :
                    isLoading ? 
                        <h1 className='text-white fw-bolder text-center mt-5'>Loading...</h1> 
                    :
                        books.length === 0 ? 
                            <div className="no-data-container text-center">
                                <img src={img} alt="No data available" className='mb-5 mt-5 img'/>
                            </div>
                    :
                    <table className="table table-dark table-hover table-striped mt-5">
                        <thead>
                            <tr style={{textAlign: 'center', height: '60px', verticalAlign: 'middle'}}>
                                <th scope="col">No.</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Publisher</th>
                                <th scope="col">Page</th>
                                <th scope="col">No. of Copy</th>
                                <th scope="col">publication year</th>
                                <th scope="col">Category</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((data, index) => {
                                    return(
                                        <tr key={index} style={{textAlign: 'center', height: '70px', verticalAlign: 'middle'}}>
                                            <th>{index + 1}</th>
                                            <td><img src={data.image} alt={data.title} style={{ width: '70px', height: '80px' }} />
                                            </td>
                                            <td>{data.title}</td>
                                            <td>{data.author}</td>
                                            <td>{data.pname}</td>
                                            <td>{data.page}</td>
                                            <td>{data.copy}</td>
                                            <td>{data.year}</td>
                                            <td>{data.cat}</td>
                                            <td>
                                                <button className='btn me-2' onClick={() => handleEdit(data.id)} style={{backgroundColor: 'black'}}><i className="fa-solid fa-pen-nib text-white"></i></button>
                                                <button className='btn' onClick={() => handleDelete(data.id)} style={{backgroundColor: 'black'}}><i className="fa-solid fa-trash-can text-white"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table>
            }   
        </div>
    </>
  )
}

export default ViewData
