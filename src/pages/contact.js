import React from "react"
import Header from "../components/header"
import Layout from "../components/layout";

export default () => (
    <Layout>
        <title>Gatsby.js - Contact Us</title>
        <div style={{ color: `#607D8B` }}>
            <Header headerText="Contact" arbitraryPhrase="Us" />
            <h2>There are very few things that I will defend with true passion: medical marijuana, the biblical Satan as a metaphor for rebellion against tyranny, and mother fucking Goddamn cryptocurrency. </h2>
            <p><a href="mailto:fadil@xcoder.developer">fadil@xcoder.developer</a></p>
        </div>
    </Layout>
)