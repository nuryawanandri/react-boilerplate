import React, { Fragment } from 'react';
import UserList from '../../component/user-list';

const Home = () => (
  <Fragment>
    <div className="text-title">Next.js Boilerplate</div>
    <UserList />
  </Fragment>
);

export default Home;
