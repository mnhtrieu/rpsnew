import React, { Component } from 'react';

import {
    Container,
    Dropdown,
    Image,
    Menu,
    Visibility,
} from 'semantic-ui-react'



class Header extends Component {

    state = {
        menuFixed: false,
    }

    stickTopMenu = () => this.setState({menuFixed: true})
    unStickTopMenu = () => this.setState({menuFixed: false})


    render(){
        const {menuFixed} = this.state

        return (
            <Visibility
                onBottomPassed={this.stickTopMenu}
                onBottomVisible={this.unStickTopMenu}
                once={false}
            >
                <Menu
                    borderless
                    fixed={menuFixed && 'top'}
                >
                    <Container text>
                        <Menu.Item>
                            <Image size='mini' src='./assets/images/logo.png'/>
                        </Menu.Item>
                        <Menu.Item header>RPSonline</Menu.Item>
                        <Menu.Item as='a'>About</Menu.Item>

                        <Menu.Menu position='right'>
                            <Dropdown text='Login' pointing className='link item'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Header>Header Item</Dropdown.Header>
                                    <Dropdown.Item>
                                        <i className='dropdown icon'/>
                                        <span className='text'>Submenu</span>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>List Item</Dropdown.Item>
                                            <Dropdown.Item>List Item</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    </Container>
                </Menu>
            </Visibility>
        )
    }
}

export default Header;