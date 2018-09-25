import React, { Component } from 'react';
import { Segment, Container, List } from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <Segment className="footer" inverted vertical>
        <Container textAlign="center">
          <List horizontal inverted divided link>
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
          </List>
          <p className="copyright">
            &copy; 2018 Minh Trieu All Rights Reserved
          </p>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
