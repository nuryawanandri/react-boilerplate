import React, { Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getUser } from '../../reducer/other'

import UserList from '../../component/userlist'

const Home  = (props) => (
  <Fragment>
    <div className="text-title">
      This is Home .... Next.js !!!!
    </div>
    <UserList />
  </Fragment>
)

const mapStateToProps = state => ({
  user: state.other.data
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)