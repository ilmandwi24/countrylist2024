import { useState } from 'react'


import Home from './views/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './views/Detail'
import Navbar from './components/Navbar';
import NotFound from './views/NotFound';
import Memo from './views/Memo';
import Pagination from './views/Pagination';
import SamplePaginate from './views/SamplePaginate';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/samplepagination" element={<SamplePaginate />} />
          <Route path='*' element={<NotFound />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
