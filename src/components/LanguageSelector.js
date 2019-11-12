import React, { Component } from "react";
import languageContext from "../contexts/languageContext";

class LanguageSelector extends Component {
  static contextType = languageContext;
  render() {
    return (
      <div>
        Select a Language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
