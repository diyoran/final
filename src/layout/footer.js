import React from 'react'

export default function Footer() {
    return (
        <footer>

            <div className='footer-wrapper'>

                <div className='footer-info'>
                    <h2 className="logo">
                        LearnHub
                    </h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tristique placerat eleifend aliquam pellentesque facilisis ultrices. Imperdiet mus urna egestas at tellus. </p>
                    <a href="!#">Privacy Policy</a>
                    <a href="!#">Terms and Condition</a>
                </div>

                <div className='footer-articles'>
                    <ul>
                        <h3>About</h3>
                        <a>About us</a>
                        <a>Courses</a>
                        <a>Mentor</a>
                        <a>Contact us</a>
                    </ul>
                    <ul>
                        <h3>Support</h3>
                        <a>Careers</a>
                        <a>Help & Support</a>
                        <a>Blog</a>
                    </ul>
                    <ul>
                        <h3>Company</h3>
                        <a>Privacy Policy</a>
                        <a>Terms and Condition</a>
                        <a>Code of Conduct</a>

                    </ul>
                </div>

            </div>

        </footer>
    )
}
