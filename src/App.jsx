import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Cards/>}/>
      <Route path='/cards/:index' element={<CardsDetails/>}/>
     </Routes>
    </>
  )
}

export default App