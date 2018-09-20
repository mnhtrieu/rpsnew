import React, {Component} from 'react';


import Header from '../components/Header'
import Footer from '../components/Footer'

import {
    Container,
    Image,
    Item
} from 'semantic-ui-react'


class Homepage extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Container text className="content">
                    <h1>RPS Online</h1>

                    <h3>What is RPS online?</h3>
                    <p>RPS online was a java game developed by Redboss Games company founded in Czech Republic by Jan
                        Rehab. The RPS stands for rock paper scissors
                        but it wasn't just any simple game. It was catchy, fast-paced, easy and enjoyable. The UI,
                        figures and animations were flawless not mentioning
                        those funny sounds the game produced.
                    </p>
                    <Image.Group size='small'>
                        <Image src="./assets/images/menu.gif"/>
                        <Image src="./assets/images/flag.gif"/>
                        <Image src="./assets/images/sameweap.gif"/>
                        <Image src="./assets/images/ICQGamesRPSMeldungWatingforOponent2.gif"/>
                    </Image.Group>

                    <h3>How it all started?</h3>
                    <p>
                        It was around summer exam period of 2017 when I surfed internet as usually and found out that
                        ICQ became open-source. Suddenly, I remembered the
                        good times when I played RPS online with my friends and it hit me – why not download and play it
                        again? Unfortunately, Xtraz, which was the
                        ICQ game centre, extracted and deleted all of its content two years ago so there's no way to
                        play it anymore. I didn't want to give up
                        on this thought just because of this stupid obstacle so I started to look up through the
                        internet if by any chance there would be any way to
                        obtain this gold game.
                        About 30 minutes later I still haven't found anything. While I decided to give up, another idea
                        popped up in my head and that was
                        to try to replicate this game.
                    </p>
                    <h3>Taking the first steps</h3>
                    <p>I started to program it shortly after and I used this opportunity to try a new technology – JS
                        frameworks. At
                        first I tried AngularJS and I covered pretty much a lot except for the fighting.</p>

                    <p>If you are interested in the progress of the prototype, here are a few screens:</p>
                    <p>
                        <a href="./assets/images/movement.gif">Movement prototype</a><br/>
                        <a href="./assets/images/team.gif">Choosing a team and a timer</a><br/>
                        <a href="./assets/images/gamestart.gif">Setting a game</a><br/>
                        <a href="./assets/images/chat.gif">Game chat</a><br/>

                    </p>
                    <p>However, school started and I got busy with my bachelor's thesis and forgot about the project.
                        It's now summer 2018 and I decided to give it one more try although it will be rewritten in
                        React JS.</p>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Homepage;