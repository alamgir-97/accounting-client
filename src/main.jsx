import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import FormulaProvider from './formulaProvider/formulaProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="w-full bg-blue-800 md:bg-gray-500 text-black md:text-gray-800">
    <div className="w-11/12 mx-auto">
  <React.StrictMode>
<FormulaProvider>
<AuthProvider>
<RouterProvider router={ Routes }/>
</AuthProvider>
</FormulaProvider>
  </React.StrictMode>
  </div>
  </div>,
)
