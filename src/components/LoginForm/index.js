// import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {name: '', pwd: ''}

  //   onSubmitForm = async event => {
  //     event.preventDefault()
  //     const {name, pwd} = this.state
  //     const userDetails = {name, pwd}
  //     const url = `https://apis.ccbp.in/login`
  //     const option = {
  //       method: 'POST',
  //       body: JSON.stringify(userDetails),
  //     }
  //     const response = await fetch(url, option)
  //     console.log(response)
  //     const data = await response.json()
  //     console.log(data)
  //   }

  onSubmitForm = async event => {
    event.preventDefault()
    console.log('clicked')
    const {name, pwd} = this.state
    const userDetails = {name, pwd}

    const url = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangePwd = event => {
    this.setState({pwd: event.target.value})
  }

  render() {
    const {name, pwd} = this.state
    return (
      <div className="login-page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="logo"
          className="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="card" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="display-logo"
          />
          <div className="inputs-container">
            <label className="label-headings" htmlFor="username">
              USERNAME
            </label>
            <input
              value={name}
              className="inputs"
              type="text"
              id="username"
              onChange={this.onChangeName}
              placeholder="Username"
            />
          </div>
          <div className="inputs-container">
            <label className="label-headings" htmlFor="password">
              PASSWORD
            </label>
            <input
              value={pwd}
              className="inputs"
              type="password"
              id="password"
              onChange={this.onChangePwd}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default LoginForm
