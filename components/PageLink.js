import React from 'react'
import Link from 'next/link'
import styles from '../styles/link.module.css';

const PageLink = (props) => {
    return (
        <Link {...props}>
            <div className={styles.link}>
                {props.children}
            </div>
        </Link>
    )
}

export default PageLink
