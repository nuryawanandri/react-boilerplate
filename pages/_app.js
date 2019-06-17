import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import { configureStore } from '../store'
import LayoutContainer from '../container/layout'

class MyApp extends App {
  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <LayoutContainer>
            <Component { ...pageProps }/>
          </LayoutContainer>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(MyApp)