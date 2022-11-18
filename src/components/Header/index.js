import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nav-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="logout-logo-icon"
      />
    </div>
    <div className="nav-items-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="home"
        className="nav-item-icons"
      />
      <li className="nav-lg-items">Home</li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="products"
        className="nav-item-icons"
      />
      <li className="nav-lg-items">Products</li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="cart"
        className="nav-item-icons"
      />
      <li className="nav-lg-items">Cart</li>
      <button type="button" className="nav-lg-button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
