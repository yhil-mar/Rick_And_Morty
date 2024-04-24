import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
import { Router } from './components/index.mjs';

function App() {

  return (

    <div className='font-lato bg-third-color view'>

      <Router />

    </ div>

  )

};

export default App
