import React, { Component } from "react";

import languageContext from "../contexts/languageContext";
import Colorcontext from "../contexts/ColorContext";
class Button extends Component {
  // == button.contexttype = ...
  //static contextType = LanguageContext;
  render() {
    return (
      <Colorcontext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <languageContext.Consumer>
              {({ language }) =>
                language === "english" ? "Submit" : "Voorleggen"
              }
            </languageContext.Consumer>
          </button>
        )}
      </Colorcontext.Consumer>
    );
  }
}

export default Button;
