import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GithubPic from "./assets/images/GitHub-logo.png"
import LinkedinPic from "./assets/images/LinkedIn.png"
import StackPic from "./assets/images/stackOverflow.png"
import TopPic from "./assets/images/Programming.webp"

import App from "./App.jsx";
import "./index.css";
import ResumePage from "./components/ResumePage";
import ContactPage from "./components/ContactPage";
import PortfolioPage from "./components/PortfolioPage";
import AboutPage from "./components/AboutPage";
import { NavLink } from "react-router-dom";

//need photo/avatar

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <header className="d-flex header-img align-items-center">
          <img src={TopPic} className="image-fluid"></img>
          <h1>Banks</h1>
          <nav className="navbar w-100">
            <ul className="nav-list mb-0">
              <li className="nav-item">
                <NavLink to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" activeClassName="active">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/resume" activeClassName="active">
                  Resume
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <App />
        <footer className="footer">
          <ul className='d-flex footer-links justify-content-center align-items-center'>
            <li>
              <a
                href="https://github.com/wiph2004/Under_PorfolioPage_React/tree/main">
                <img src={GithubPic}
                 className='img-fluid'></img>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jared-banks-a65696b/">
                <img src={LinkedinPic} className='img-fluid' ></img>
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/24583437/banks">
                <img src={StackPic} className='img-fluid' ></img>
              </a>
            </li>
          </ul>
        </footer>
      </>
    ),
    
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
