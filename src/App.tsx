import { Routes, Route} from 'react-router-dom';
import Navbar from './routers/navbar/navbar.component';
import Home from './routers/home/home.component';
import SignIn from './routers/sign-in/sign-in.compontent';

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
        <Route path='signin' element={<SignIn />} />        
      </Route>
    </Routes>
  );
}

export default App;
