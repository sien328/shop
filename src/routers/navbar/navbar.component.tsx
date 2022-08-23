import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navbar.styles.scss';

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-wrapper" to='/'>
          <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-wrapper">
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;