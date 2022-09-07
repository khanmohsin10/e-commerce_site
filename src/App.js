import React from 'react';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { onSnapshot } from 'firebase/firestore';
import Header from './components/header/header.component';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

import {Routes, Route} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection.component'
import CollectionsOverview from './components/collections-overview/collections-overview.component'

class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapshot => {
            this.props.setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        })
      }
      else this.props.setCurrentUser(userAuth)
   })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <div>
        <Header />
        <Routes> 
            <Route exact path='/shop' element={<CollectionsOverview />} />
            <Route path='/shop/:categoryId' element={<CollectionPage />} />
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);