import React from 'react'
import { Link } from 'react-router-dom'

const RedirectButton = ({headerButton , title, type}) => {
    return(
        <Link className={type === "light" ? "link link--light" : "link link--dark"} to={headerButton}>
            {title}
        </Link>
    )
}

export {RedirectButton}