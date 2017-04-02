var React = require('react');
var {Link} = require('react-router');

var Example = React.createClass({
  render: function(){
    return(
      <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example location to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Bangalore'>Bangalore</Link>
        </li>
        <li>
          <Link to='/?location=Kolkata'>Kolkata</Link>
        </li>
      </ol>
      </div>
    );


  }


});

module.exports = Example;
