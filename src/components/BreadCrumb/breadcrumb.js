import React from 'react';
import { Breadcrumb } from 'antd';
import './breadcrumb.css'
// import Main from './pages/main';
// import Courses from './pages/courses';
// import Profile from './pages/profile';
// import Blog from './pages/blog';
// import CoursePage from './pages/coursePage';


const BreadCrumb = () => (
  <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="/courses">Courses</a>,
      },
      {
        title: <a href="/coursePage">Course page</a>,
      },
      {
        title: <a href="/blog">Blog</a>,
      },
      {
        title: <a href="/profile">Profile</a>,
      },
    ]}
  />
);
export default BreadCrumb;