import React from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';

export default class Header extends React.Component {
	  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false,
    };
  }
   toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
       <header className="wrapper">
        <div id="menu" class="navbar navbar-default navbar-custom">
        <Navbar  color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggleNavbar} />
          <NavbarBrand tag={Link} to="/">inTechERP</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/account/login">Log In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
       </div>
      </header>
    );

}

}
