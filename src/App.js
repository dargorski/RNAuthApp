import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

  constructor() {
    super();
    firebase.initializeApp({
      apiKey: 'AIzaSyBV6mmEm7F0usTcBVDT0l3BaN5UYzwGVtk',
      authDomain: 'auth-15a76.firebaseapp.com',
      databaseURL: 'https://auth-15a76.firebaseio.com',
      projectId: 'auth-15a76',
      storageBucket: 'auth-15a76.appspot.com',
      messagingSenderId: '911573621118'
      });
  }

  state = { loggedIn: null };

  componentWillMount() {
      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ loggedIn: true });
          } else {
          this.setState({ loggedIn: false });
        }
      });
  }

  renderContent() {
    console.log(this.state.loggedIn);
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button whenPressed={() => firebase.auth().signOut()}>
            Log out
          </Button>
        </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return (
        <View style={{ alignSelf: 'center' }}>
          <Spinner />
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
