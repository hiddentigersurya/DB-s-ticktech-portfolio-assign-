import { FaGithub,FaLinkedin} from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";
import './index.css'

const Contact=()=>(
    <div className='contact'>
        <h1 className="pp">Contact Details</h1>
        <hr />
        <h1 className="ph">Phone</h1>
        <p>+91 9032123324</p>
        <hr />
        <h1 className="ph">Gmail</h1>
        <p>ysuryanarayana4321@gmail.com</p>
        <hr />
        <h1 className="ph">Social</h1>
        <ul>
        <li><a href="https://github.com/hiddentigersurya" target="_blank" rel="noreferrer" className='link'>
        <FaGithub size={30} />
        </a></li>
        <li><a href="https://www.linkedin.com/in/suryanarayana2003/" target="_blank" rel="noreferrer" className='link'>
        <FaLinkedin size={30} />
        </a></li>
        <li><a href="https://twitter.com/surya9032123324" target="_blank" rel="noreferrer" className='link'>
        <FaXTwitter size={30} />
        </a></li>
        
        </ul>
        <hr/>
        <h1 className="ph">Address</h1>
        <p>Hyderabad, Telangana, India.</p>
        <hr />
    </div>
)

export default Contact