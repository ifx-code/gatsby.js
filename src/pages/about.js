import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import AbtStyles from "../components/about-css-modules.module.css"

//console.log(AbtStyles);

const User = props => (
    <div className={AbtStyles.user}>
        <img src={props.avatar} className={AbtStyles.avatar} alt={props.username} />
        <div className={AbtStyles.description}>
            <h4 className={AbtStyles.username}>{props.username}</h4>
            <p className={AbtStyles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default () => (
    <Layout>
        <title>Gatsby.js - About Us</title>
        <div style={{ color: `#009688`}}>
            <Header headerText="About" arbitraryPhrase="Us" />
            <User
                username="Jane Doe"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                excerpt="I'm Jane Doe, a visibility hidden type of girl."
            />
            <User
                username="Bob Smith"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                excerpt="I'm Bob Smith, a vertically aligned type of guy."
            />
            <Header headerText="It's pretty cool afterall.." />
            <p>Enjoy !</p>
        </div>
    </Layout>
)
