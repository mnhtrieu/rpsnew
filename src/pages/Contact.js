import React, {Component} from 'react';


import Header from '../components/Header'
import Footer from '../components/Footer'


import {
    Container,
    Icon
} from 'semantic-ui-react'


class Contact extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Container text className="content">
                    <h1>Contact</h1>
                    <p>The game is developed in a free time to practice and learn new technology with <a
                        href="https://github.com/minndoo">Milan Do</a>.
                        The code can be found
                        at <a href="https://github.com/mnhtrieu/rpsnew"><Icon link name="github"/></a>. </p>
                    <p>If you want to somehow contribute or
                        found a bug, please report it to me at me@mnhtrieu.eu or create a new issue. Thanks a lot!</p>

                    <p>
                        Visit us on linkedIn:<br /><br />
                        <Icon name="linkedin"/> <a href="https://www.linkedin.com/in/minh-trieu-692733149/"> Minh Trieu</a><br />
                        <Icon name="linkedin"/> <a href="https://www.linkedin.com/in/ngoc-khoa-do-a5b603156/"> Milan Do</a>
                    </p>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Contact;