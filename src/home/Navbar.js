import React, { Component } from 'react';
import img from "../Bad-Company-Logo.jpg";
import {
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
    NavbarBrand
} from 'reactstrap';

class SiteBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="runner">
    <div className="sp-container">
	<div className="sp-content">
		<div className="sp-globe"></div>
		<h2 className="frame-1">WELCOME</h2>
		<h2 className="frame-2">TO THE</h2>
		<h2 className="frame-3">BAD COMPANY</h2>
		<h2 className="frame-4">WEBSITE</h2>
		<h2 className="frame-5">
			<span>LETS </span>
			<span>PLAY </span>
			<span>POOL</span>
		</h2>
       </div>              
              <div className ="brand"></div>           
                 
             </div>
            
             
            
             <Navbar color="faded" light expand="md"id="navbar">
                <NavbarBrand href="/"> <img src={img} width="135" height="128"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                        <Nav className="ml-auto" >
                            <NavItem className="logout">
                                <Button className="logout" onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                </Navbar> </div>
);
  }
}
      


export default SiteBar;