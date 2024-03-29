import './App.css';

import { Outlet } from 'react-router-dom';
import Header from './component/Head.js';

function App() {
  return (
    <div>
      <Header />
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
