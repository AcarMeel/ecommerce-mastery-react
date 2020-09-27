import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { auth } from "../../firebase/firebase.utils";

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { HeaderContainer, OptionLink, OptionDiv, LogoContainer, OptionsContainer } from './header.styles';
// Logo
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          Sign Out
        </OptionDiv>
      ) : (
        <OptionLink to="/signin">
          Sign in
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {
      !hidden && <CartDropdown/>
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
