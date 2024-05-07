import { IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store";
const Header = () => {
  const cartItems = useSelector((store: RootState) => store.cart);
  return (
    <header className="header-position">
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <img
                src="/src/assets/logo/myntra-logo.png"
                className="header-logo"
              ></img>
            </Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className="nav-link text-white nav-link-center">
                  <IoHomeOutline></IoHomeOutline>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="nav-link text-white nav-link-center"
                >
                  <IoCartOutline></IoCartOutline>
                  <span>Cart {cartItems.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
