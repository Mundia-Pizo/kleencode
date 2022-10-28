import navstyles from '../../styles/Nav.module.css'
import React from 'react'
import Link from 'next/link'

const nav = () => {
    return (
        <div className={navstyles.nav_container}>
            <div className={navstyles.nav_content}>
                    <div className={navstyles.logo_area}>
                        <h1><Link href='/'>CloudKamp</Link> </h1>
                        <input placeholder='search...' className={ navstyles.searchInput} />
                    </div>
                
                <ul className={navstyles.ul}>
                    <li><Link href='/blogs'>Lessons</Link> </li>
                    <li><Link href='/courses'>Course</Link> </li>
                    <li><Link href='/createPost'>Post</Link> </li>
                    <li><Link href='/signup'>Sign up</Link> </li>
                    <li><Link href='/signin'>login</Link> </li>
                </ul>
            </div>
        </div>
  )
}

export default nav