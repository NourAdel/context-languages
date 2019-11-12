import React, { Component } from "react";


import UserCreate from "./USerCreate";
import LanguageConext from'../contexts/languageContext'
import ColorContext from '../contexts/ColorContext'

class App extends Component {
  state = { language: "english" };
  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a Language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguageConext.Provider value={this.state.language}>
            <ColorContext.Provider value={'red'}>
               <UserCreate />
            </ColorContext.Provider>
    
        </LanguageConext.Provider>
      </div>
    );
  }
}

export default App;
