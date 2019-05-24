import React from "react"
import containerStyles from "./layout.module.css"
import Footer from "../components/footer"
import { Link } from "gatsby"

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
	<div className={containerStyles.container_wrapper}>
        <header>
            <Link to="/">
                <h1>GATSBY.JS</h1>
            </Link>
            <ul>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/blog/">Blog</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
        </header>
        {children}
        <Footer/>
	</div>
)