import React from 'react';
import { Breadcrumb } from 'antd';
import './breadcrumb.css'

const BreadCrumb = () => (
  <Breadcrumb
    items={[
      {
        title: <a href="/main">Home</a>,
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