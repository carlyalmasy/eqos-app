import { React, StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './main.css';


const root = createRoot(document.getElementById('root'));

// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// );

root.render(
    <App />
);
