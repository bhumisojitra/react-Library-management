import { Route, Routes } from "react-router"
import Header from "./Components/Header/Header"
import ViewData from "./Components/ViewData/ViewData"
import EditData from "./Components/EditData/EditData"
import AddBook from "./Components/AddBook/AddBook"

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<AddBook />} />
        <Route path="/view" element={<ViewData />} />
        <Route path="/edit" element={<EditData />} />
      </Routes>
    </>
  )
}

export default App
