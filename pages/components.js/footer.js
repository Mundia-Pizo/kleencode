import React from 'react'
import footerStyles from '../../styles/Footer.module.css'

const footer = () => {
    return (
        <div className={footerStyles.main_footer_theme}>
            <div className={footerStyles.main_footer}>
                <h4>Blogs | Courses | Projects| Sign up</h4>
                <p>@copyright 2022</p>
                {/* i need to add some social icons */}
            </div>
        </div>
    
  )
}

export default footer