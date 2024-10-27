import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <>
            <div className='containerFooter'>
                <div className='contactText'>
                    <span>Contact Us</span>
                    <p>Address: 9863 - 9867 Mill Road,
                        Cambridge, MG09 99HT
                    </p>
                    <div className='phonetext'><span>Phone:</span><p> +1 800 603 6035</p></div>
                    <div className='phonetext'><span>Fax:</span><p> +1 800 603 6035</p></div>
                    <div className='phonetext2'><span>Email:</span><p>mail@companyname.com</p></div>
                </div>
                <div className='contactText'>
                    <span>Like Us on Facebook</span>
                    <img src="https://scontent.fccu2-1.fna.fbcdn.net/v/t39.30808-6/453866160_897256062440955_4985282045021696867_n.png?stp=dst-png_p118x118&amp;_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=4cb600&amp;_nc_ohc=w7a1J0IsEQcQ7kNvgGvThB9&amp;_nc_zt=23&amp;_nc_ht=scontent.fccu2-1.fna&amp;edm=AEDRbFQEAAAA&amp;_nc_gid=AujMkg0Gk4qKRu-7qJw22zc&amp;oh=00_AYBzTc1FseMINm5g3854RKnR_WvGB0sEOozixhf2ySF0wQ&amp;oe=6723AFF5" />
                </div>
                <div className='contactText'>
                    <span>From Twitter</span>
                    <div><p>Tweets by TwitterDev</p></div>
                </div>
                <div className='contactText'>
                    <span>Newsletter Sign Up</span>
                    <p>Subscribe to our newsletter and get updates on the latest event trends and service offering</p>
                    <div className='btnDisplay'>
                        <input placeholder='Enter your email address'></input>
                        <button>SIGN UP</button>
                    </div>
                </div>
            </div>
            <Copyright />
        </>
    )
}

export default Footer;


