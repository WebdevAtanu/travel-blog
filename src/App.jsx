import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Content from './routes/Content.jsx';
import Place from './routes/Place.jsx';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/place/:name' element={<Place/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
