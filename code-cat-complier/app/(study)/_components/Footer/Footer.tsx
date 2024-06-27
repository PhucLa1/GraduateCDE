import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faWhatsapp, faPinterest } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    return (
        <footer>
            <div className='row'>
                <div className="col">
                    <img src="/logo/sfit.png" className='logo' />
                    <p>Tham gia cùng gia đình SFIT - UTC để có thể có thêm nhiều bài học hay, kiến thức bổ ích để có thể làm công việc cho sau này</p>
                </div>
                <div className="col">
                    <h3>Văn phòng <div className='underline'><span></span></div></h3>
                    <p>Đường Láng</p>
                    <p>Đường Láng, Hà Nội</p>
                    <p>Kartana, PIN 560066, India</p>
                    <p className='email-id'>phucminhbeos@gmail.com</p>
                    <h4>+91 - 0866058725</h4>
                </div>
                <div className="col">
                    <h3 className='w-fit mb-10 relative'>Links <div className='underline'><span></span></div></h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Newsletter <div className='underline'><span></span></div></h3>
                    <form>
                        <FontAwesomeIcon className='far' icon={faEnvelope}/>
                        <input placeholder='Enter your email id' type="email" required />
                        <button type='submit'><FontAwesomeIcon className='fas' icon={faArrowRight }/></button>
                    </form>
                    <div className='social-icons'>
                        <FontAwesomeIcon className='fab' icon={faFacebookF}/>
                        <FontAwesomeIcon className='fab' icon={faTwitter}/>
                        <FontAwesomeIcon className='fab' icon={faWhatsapp}/>
                        <FontAwesomeIcon className='fab' icon={faPinterest}/>
                    </div>
                </div>
            </div>
            <hr />
            <p className='copyright'>SFIT - UTC@2024 - All Rights Reserved</p>
        </footer>
    )
}
