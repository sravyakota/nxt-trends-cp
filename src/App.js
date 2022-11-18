import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/products" component={Products} /> */}
      {/* <Route exact path="/cart" component={Cart} /> */}
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
