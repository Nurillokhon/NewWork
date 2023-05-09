import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/Twice/About'
import Erorr from './pages/Erorr';
import { ClockLoader } from 'react-spinners';
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense
    fallback={
      <div className='d-felx justify-content-center'>
        <div>
          <ClockLoader color="#000" />
        </div>
      </div>
    }
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/notFound' element={<Erorr />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
