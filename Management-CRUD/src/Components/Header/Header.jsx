import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { roleAsncy } from '../../Services/Actions/LibraryDataAction';

const Header = () => {

  const dispatch = useDispatch();

    const handleRole = (cat) => {
        console.log("Role");

        dispatch(roleAsncy(cat));
    }

  return (
    <>
      <div className='p-4'>
            <Container>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <h1 className='text-white bg-transparent fw-bold'>LiBraRY mANageMEnT</h1>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <Link to={'/'} className='text-center text-white me-4 text-decoration-none fw-medium fs-5'>ADD-BOOK</Link>
                        <Link to={'/view'} className='text-center text-white me-4 text-decoration-none fw-medium fs-5'>BOOK-DETAILS</Link>
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='text-white p-0 border-0 fw-medium fs-5'>
                                CATEGORY
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('')}>All</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('Horror')}>Horror</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('Fairy tale')}>Fairy tale</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('Classice')}>Classice</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('Biography')}>Biography</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('History')}>History</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('Science & Technology')}>Science & Technology</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('Programing')}>Programing</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('Comedy')}>Comedy</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('Thriller')}>Thriller</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('Art')}>Art</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('Music')}>Music</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('Religious Book')}>Religious Book </Dropdown.ItemText>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Header
