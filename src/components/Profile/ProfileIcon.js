import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class ProfileIcon extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    render(){
        return (
            <div className="pa4 tc">
             <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction='left'>
                <DropdownToggle
                tag="span"
                onClick={this.toggle}
                data-toggle="dropdown"
                aria-expanded={this.state.dropdownOpen}
                >
                    <img
                        src="https://pic.onlinewebfonts.com/svg/img_258083.png"
                        className="br-100 h3 w3 dib" alt="avatar"/>
                </DropdownToggle>
                <DropdownMenu className='b--transparent shadow-5' style={{marginLeft: '-6rem', backgroundColor: 'rgba(255, 255, 255, 0.5)'}} >
                <DropdownItem onClick={this.props.toggleModal}>View Proflie</DropdownItem>
                <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>

        )
    }
}

export default ProfileIcon;
