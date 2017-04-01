var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var {temp, location} = this.props;
    return(
      <h3>The weather of {location} is {temp}</h3>
    );
  }
});
module.exports = WeatherMessage;
