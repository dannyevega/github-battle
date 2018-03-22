const React = require('react');

class Popular extends React.Component {
  // need to add constructor to add state
  // look up what props does on ES6 classes article
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    // 2 --> Ask Kelly about this -- this is basically an 'updateLanguage' method on an instance of this Popular class or component
    // so this would basically be the same as binding an object to a function so when the function is invoked, it will be pointing to the correct instance -- in this case, it will be bound to the correct Popular component
    // ensures 'updateLanguage' will be called in correct context
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  // 1 --> method to update state with newly clicked language
  updateLanguage(language) {
    this.setState(function(){
      return {
        selectedLanguage: language
      }
    })
  }
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'CSS', 'Python'];

    return (
      <ul className="languages">
        {languages.map(function(language) {
          return (
            <li
              style={language === this.state.selectedLanguage ? { color: '#d0021b' } : null} 
              // using .bind -- we don't need to explicitly say bind 'this' here because we've established the correct context in the constructor above on line 14 -- we pass it null since we already bound updateLanguage
              // whatever arguments we pass after the context will be passed along to the initial funtion --> 'language' argument on line 17
              onClick={this.updateLanguage.bind(null, language)}
              key={language}>
              {language}
            </li>
          )
          // pass in 'this' keyword as second argument to tell .map what we want bound to it
        }, this)}
      </ul>  
    )
  }	
}

module.exports = Popular;