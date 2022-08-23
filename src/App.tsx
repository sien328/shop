import { Routes, Route} from 'react-router-dom';
import Navbar from './routers/navbar/navbar.component';
import Home from './routers/home/home.component';
import Authentication from './routers/authentication/authentication.compontent';

import './App.scss';

const Shop = () => {
  return ( 
    <h1>hello</h1>
    )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}> 
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication />} />        
      </Route>
    </Routes>
  );
}

export default App;
