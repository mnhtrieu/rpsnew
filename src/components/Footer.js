import React, { Component } from 'react';
import { Segment, Container, List } from 'semantic-ui-react';


class Footer extends Component{


    render(){
        return(
            <Segment className="footer" vertical>
                <Container textAlign='center'>
                    <List horizontal divided link>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                    </List>
                    <p class="copyright">&copy; 2018 Minh Trieu All Rights Reserved</p>
                </Container>
            </Segment>
        )
    }
}

export default Footer;