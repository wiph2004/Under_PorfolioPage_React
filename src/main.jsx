import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import './index.css';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import { NavLink } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
       <header> <h1>Banks</h1>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item"><NavLink to="/" activeClassName="active" >Home</NavLink></li>
              <li className="nav-item"><NavLink to="/portfolio" activeClassName="active" >Portfolio</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" activeClassName="active" >Contact</NavLink></li>
              <li className="nav-item"><NavLink to="/resume" activeClassName="active" >Resume</NavLink></li>
            </ul>
          </nav>
        </header>
    <App />
    </>),

    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
