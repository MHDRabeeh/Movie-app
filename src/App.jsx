

import Layout from './Layout';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Favourite from './Pages/Favourite';
import MovieInfo from './Pages/MovieInfo';
function App() {


  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/movie/:id' element={<MovieInfo />} />
        </Routes>

      </Layout>


    </div>
  )
}

export default App
