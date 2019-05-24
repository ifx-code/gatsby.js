import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
    <Layout>
        <title>Gatsby.js - Blog</title>
        <div style={{ color: `#FF5722` }}>
            <Header headerText="Blog" />
            <p>#gatsbyjs</p>
            <img src="https://source.unsplash.com/random/1000x750" alt="" />
        </div>
    </Layout>
)