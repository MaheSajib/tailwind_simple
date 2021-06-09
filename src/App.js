import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages';
import About from './Pages/about';
import Menu from './Pages/menu';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/menu' component={Menu}></Route>
        <Route path='/about' component={About}></Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
