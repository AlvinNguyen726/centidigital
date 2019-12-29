import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/logo.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span>
            <img className="icon" src={logo} alt="" />
            </span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>CentiDigital</h1>
                <p>Transforming and cultivating business through strategy, design and development.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('service')}}>Services</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('process')}}>Process</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
