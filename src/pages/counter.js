import React, { Fragment } from 'react';
import Head from 'next/head';
import CounterContainer from '../container/counter';

const Counter = () => (
  <Fragment>
    <Head>
      <title>Counter | Next.js</title>
    </Head>
    <CounterContainer />
  </Fragment>
);

export default Counter;
