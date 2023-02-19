import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SongCard from './components/songCard';
import LoginScreen from './components/loginScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      username: ''
    }
  }

  async componentDidMount() {
    const nothing = await fetch('https://httpbin.org/get');
    //Fetch songs
    const response = await fetch('https://4f6aem2us2.execute-api.us-east-1.amazonaws.com/Prod/getSongs');
    const parsedResponse = await response.json();
    this.setState({songs: parsedResponse.message});
    //Test fetch
  }

  loginCallback = (username) => {
    this.setState({username: username}).bind(this);
  }

  render() {
    let body = <LoginScreen callBack={this.loginCallback}/>
    const { songs } = this.state
    if (this.state.username != '') {
      
      body=songs.map( (song) => (
        <SongCard key={song.id} id={song.id} name={song.name} music={song.music} vocals={song.vocals} lyrics={song.lyrics} username={this.state.username}/>
      ))
      }

    return (
      <div className="container">
      <div class="jumbotron">
        <h1 class="display-4">Songs</h1>
      </div>
      {
        body
      }
      </div>

    );
  }
}

export default App;
