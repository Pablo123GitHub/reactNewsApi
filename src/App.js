import React, { Component } from 'react';
import './App.css';
import News from './components/News/News';

class App extends Component {

    constructor (props) {
        super(props);
     this.state = {
         news1: {
             type: "top-headlines",
             source: "bbc-news"
         },
         news2: {
             type: "top-headlines",
             source: "le-monde"
         }
     }
    }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My news feed </h1>
        </header>

          <News
    news = {this.state.news1}
      />

      <News
      news = {this.state.news2}
      />


      </div>
    );
  }
}

export default App;
