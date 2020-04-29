import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { Preloader } from './components/Common/Preloader/Preloader';



class App extends React.Component {

  catchAllUnhandledErros = (PromiseRejectionEvent) => {
    alert('some error occured')
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErros)
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErros)

  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div>
        <HeaderContainer />
        <div className='app-wrapper'>
          <Nav />
          <div className='app-wrapper-content'>
            <Switch>
              <Route exact path='/'
                render={() => <Redirect to={'/profile'} />} />

              <Route path='/dialogs'
                render={() => <DialogsContainer />} />

              <Route path='/profile/:userId?'
                render={() => <ProfileContainer />} />

              <Route path='/users'
                render={() => <UsersContainer />} />
              <Route path='/login'
                render={() => <Login />} />
              <Route path='*'
                render={() => <div>404</div>} />


            </Switch>
          </div>
        </div>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return ({
    initialized: state.app.initialized
  })
}


export default compose(withRouter,
  connect(mapStateToProps, { initializeApp, }))(App)


