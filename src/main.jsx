// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import routes from './Route/Route'
// import AuthProviders from './Providers/AuthProviders'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProviders>
//        <RouterProvider router={routes}></RouterProvider>
//     </AuthProviders>
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Route/Route';
import AuthProviders from './Providers/AuthProviders';
import { CategoryContext } from './Pages/Home/Category';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      {/* Wrap RouterProvider with CategoryContext.Provider */}
      <CategoryContext.Provider value={{ category: null }}> 
        <RouterProvider router={routes}></RouterProvider>
      </CategoryContext.Provider>
    </AuthProviders>
  </StrictMode>
);
