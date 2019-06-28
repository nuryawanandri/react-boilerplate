import React from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
