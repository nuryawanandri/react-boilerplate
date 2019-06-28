import React from 'react';
import HomeContainer from '../container/home';
import { getUser } from '../actions/other';

const Home = () => <HomeContainer />;

Home.getInitialProps = async ctx => {
  // console.log(ctx.store);
  ctx.store.dispatch(getUser());

  return {};
};

export default Home;
