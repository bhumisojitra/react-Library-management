import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { libAsncy } from '../../Services/Actions/LibraryDataAction'

const AddBook = () => {

    const [addBook, setAddBook] = useState({
        id : '',
        image: null,
        title : '',
        author : '',
        pname : '',
        page : '',
        copy : '',
        year : '',
        cat : '', 
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleBook = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setAddBook({...addBook, [name] : value})        
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
            setAddBook({ ...addBook, image: reader.result });
        };
    
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addBook.id = Math.floor(Math.random() * 10000).toString(); 

        dispatch(libAsncy(addBook));

        navigate('/view')

    }

  return (
    <>
        <div className='form-data'>
            <Container>
                <form className="row g-3 mt-5 p-5" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label className='text-white fw-medium'>Book - Title : </label>
                        <input type="text" placeholder="Enter Book Name" name='title' className='mt-3 form-control p-2 border-0 fw-medium' style={{backgroundColor: '#e6e1e1'}} value={addBook.title} onChange={handleBook} required /><br />
                    </div>
                    <div className="col-md-6">
                        <label className='text-white fw-medium'>Author : </label>
                        <input type="text" placeholder="Enter Author Name" name='author' className='mt-3 form-control p-2 border-0 fw-medium' style={{backgroundColor: '#e6e1e1'}} value={addBook.author} onChange={handleBook} required/><br />
                    </div>
                    <div className="col-md-6">
                        <label className='text-white fw-medium'>Publisher : </label>
                        <input type="text" placeholder="Enter Publisher Name" name='pname'  className='mt-3 form-control p-2 border-0 fw-medium' style={{backgroundColor: '#e6e1e1'}} value={addBook.pname} onChange={handleBook} required/><br />
                    </div>
                    <div className="col-md-4">
                        <label className='text-white fw-medium'>Page : </label>
                        <input type="number" placeholder="Enter Page No." name='page'  className='mt-3 form-control p-2 border-0 fw-medium' style={{backgroundColor: '#e6e1e1'}} value={addBook.page} onChange={handleBook} required/><br />
                    </div>
                    <div className="col-md-4">
                        <label className='text-white fw-medium'>No. Of Copy : </label>
                        <input type="number" placeholder="Enter No. of Copy" name='copy' className='mt-3 form-control p-2 border-0 fw-medium' style={{backgroundColor: '#e6e1e1'}} value={addBook.copy} onChange={handleBook} required/><br />
                    </div>
                    <div className="col-md-4">
                        <label className='text-white fw-medium'>publication year : </label>
                        <input type="number" placeholder="Enter publication year" name='year' className='mt-3 form-control p-2 border-0 fw-medium' style={{backgroundColor: '#e6e1e1'}} value={addBook.year} onChange={handleBook}required /><br />
                    </div>
                    <div className="col-md-6">
                        <label className='text-white fw-medium'>Category : </label>
                            <select className="form-select mt-3 p-2 border-0 fw-medium" value={addBook.cat} style={{backgroundColor: '#e6e1e1'}} name='cat' onChange={handleBook} required>
                                <option value="" selected>Choose Your Category...</option>
                                <option value="Horror">Horror</option>
                                <option value="Fairy-tale">Fairy tale</option>
                                <option value="Classice">Classice</option>
                                <option value="Biography">Biography</option>
                                <option value="History">History</option>
                                <option value="Science & Technology">Science & Technology</option>
                                <option value="Programing">Programing</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Art">Art</option>
                                <option value="Music">Music</option>
                                <option value="Religious Book">Religious Book </option>
                            </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="image" className="form-label">Book Image</label>
                        <input type="file" className="form-control p-2 mt-2 border-0 fw-medium" id="image" name='image' accept="image/*" onChange={handleImage} style={{backgroundColor: '#e6e1e1'}} required/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className='btn text-white mt-4 pt-2 pb-2 ps-3 pe-3 fw-medium' style={{backgroundColor: '#e77d22'}}>ADD BOOK</button>
                    </div>
                </form>
            </Container>
        </div>
    </>
  )
}

export default AddBook
