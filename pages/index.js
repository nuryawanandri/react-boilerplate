import React from "react"
import HomeContainer from '../container/home'
import { getUser } from '../reducer/other'

const Home = () => (
  <HomeContainer />
)

Home.getInitialProps = async ({ req, store }) => {
  store.dispatch(getUser())

  return {
    
  }
};

export default Home