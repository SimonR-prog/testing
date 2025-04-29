import { useState } from 'react';
import './App.css';
import First from './pages/first';
import AddInfoPage from './pages/addinfopaage'; 

function App() {
  const [page, setPage] = useState('first'); 

  return (
    <>
      <div>
        <button onClick={() => setPage('first')}>Go to First Page</button>
        <button onClick={() => setPage('addinfo')}>Go to Add Info Page</button>
      </div>

      {page === 'first' && <First />}
      {page === 'addinfo' && <AddInfoPage />}
    </>
  );
}

export default App;
