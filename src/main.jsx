import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*Importanción del index css para poder hacer los estilos*/
import './index.css'
import App from './App.jsx'
/*El swiper es un paquete de una libreria para poder hacer carruseles o sliders, por lo cual lo utilizaremos más adelante*/ 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
