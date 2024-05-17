import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Main from './pages/main';
import Courses from './pages/courses';
import Profile from './pages/profile';
import Blog from './pages/blog';
import NotFound from './pages/notFound'
import CoursePage from './pages/coursePage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/main",
        element: <Main />
      },
      {
        path: "/courses",
        element: <Courses />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/coursePage",
        element: <CoursePage />
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
