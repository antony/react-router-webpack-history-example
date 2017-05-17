import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';

class Home extends React.Component {
  render() {
    return (
      <h2>Home</h2>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        {this.props.children}
      </div>
    )
  }
}

class Nested extends React.Component {
  render() {
    return (
      <p>Nested content.</p>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/about/nested">About &raquo; Nested</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

const container = document.createElement('h1')
document.body.appendChild(container)

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/about" component={About} />
      <Route path="/about/nested" component={Nested} />
    </div>
  </BrowserRouter>,
  container
)
