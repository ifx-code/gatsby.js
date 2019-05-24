import React from "react"                               /* MUST put line */
import Header from "../components/header"               /* In order to use header sub-components */
import Layout from "../components/layout"               /* Web page layout */

export default () => (
    <Layout>
        <title>Home</title>
        <div style={{ color: `#9C27B0` }}>
            <Header headerText="Home" /> 
            <p>Whenever the price of Bitcoin dips below a certain value, it's no longer efficient to mine. When it comes back up, it is. So, I need to know when it breaks that threshold, so that I can remotely toggle my rig at home.</p>
            <img src="https://source.unsplash.com/random/1000x750" alt="" />
        </div>
    </Layout>
)
