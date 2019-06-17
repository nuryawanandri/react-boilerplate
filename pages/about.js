import React from 'react'
import AboutContainer from '../container/about'

class About extends React.Component {
  static async getInitialProps ({ query }) {
    return {
      id: query.id
    }
  }

  render () {
    return (
      <AboutContainer {...this.props} />
    )
  }
}

export default About