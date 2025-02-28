import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../src/components/Homepage/Home'
import HomeLayout from './components/Homepage/HomeLayout';
import CaseStudyDetails from './components/CaseStudy/CaseStudyDetails';
import AllCaseStudy from './components/CaseStudy/AllCaseStudy';
import AllCourses from './components/Courses/AllCourses';
import Error from './components/shared/Error';
import CoursesDetails from './components/Courses/CoursesDetails';
import AllNews from './components/News/AllNews';
import NewsDetails from './components/News/NewsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<HomeLayout/>
      },
      {
        path:"/case-studies",
        element:<AllCaseStudy/>
      },
      {
        path:"/case-study/:id",
        element:<CaseStudyDetails/>,
      },
      {
        path:"/courses",
        element:<AllCourses/>,
      },
      {
        path:"/course/:id",
        element:<CoursesDetails/>,
      },
      {
        path:"/news",
        element:<AllNews/>,
      },
      {
        path:"/news/:id",
        element:<NewsDetails/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
