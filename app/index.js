var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// var Hello = React.createClass({
//   render: function () {
//     return (
//       <div>Hello {this.props.name}!</div>
//     )
//   }
// });

class App extends React.Component {
  render(){
    return (
      <div>
        Hello World {this.props.name}!
      </div>
    )
  }
}

ReactDOM.render(<App name="Muhammad"/>, document.getElementById('app'));
