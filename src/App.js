import logo from './logo.svg';
import './App.css';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import AllTheBooks from './Components/AllTheBooks';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <MyNav/>
      <AllTheBooks/>
      <MyFooter/>
    </ContextProvider>
   
  );
}

export default App;
