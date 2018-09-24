import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Visibility, Icon } from 'semantic-ui-react';

class Header extends Component {
  state = {
    menuFixed: false,
  };

  stickTopMenu = () => this.setState({ menuFixed: true });
  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const { menuFixed } = this.state;

    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu borderless fixed={menuFixed && 'top'}>
          <Container text>
            <Menu.Item>
              <Image size="mini" src="./assets/images/logo.png" />
            </Menu.Item>
            <Link to="/" className="item header">
              RPSonline
            </Link>
            <Link to="/" className="item">
              Home
            </Link>
            <Link to="/" className="item">
              How to Play?
            </Link>
            <Link to="/contact" className="item">
              Contact
            </Link>
            <Menu.Menu position="right">
              <Link to="/game" className="item">
                <Icon name="chess pawn" /> Play
              </Link>
            </Menu.Menu>
          </Container>
        </Menu>
      </Visibility>
    );
  }
}

export default Header;
