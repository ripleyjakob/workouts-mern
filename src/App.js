import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      
      <Navbar />
        <div className="pages">
          <container>
          <Routes>
            <Route 
              path="/"
              exact element={<Home />}
            />
          </Routes>
          </container>
        </div>
    </div>
  );
}

export default App;
