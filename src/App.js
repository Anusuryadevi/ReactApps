import './App.css';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import  store  from './state/Store'



function App() {

  return (
    <Provider store={store}>
    <>
    <header></header>
    <div className='frame offset'>
    <Contact/>
    </div>
    </>
   </Provider>
  );
}

export default App;
