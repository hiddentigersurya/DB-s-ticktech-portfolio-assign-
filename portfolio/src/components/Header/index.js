import { Link } from "react-router-dom"
import {GiStaryu} from "react-icons/gi"
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import './index.css' 

const Header=(props)=>{
     const {theme,toggle}=props
     const tog=()=>{
        toggle()
     }
    return (
      <>
        <nav>
            <div className="header" >
                <div className="name">
                <GiStaryu size={27} />
                <h1>  Y M V S NARAYANA</h1>
                </div>
          <ul className='ul-light'>
            <li className="li">
              <Link to="/" className={`link-${theme}`}>Home</Link>
            </li>
          <li className="li">
            <Link to="/about" className={`link-${theme}`}>About</Link>
          </li>
          <li className="li">
            <Link to="https://res.cloudinary.com/da0yjkhei/image/upload/v1711106031/48360_rupl9i.jpg" className={`link-${theme}`}>Resume</Link>
          </li>
          <li className="li">
            <Link to="/skills" className={`link-${theme}`}>Skills</Link>
          </li>
          <li className="li">
            <Link to="/projects" className={`link-${theme}`}>Projects</Link>
          </li>
          <li className="li">
            <Link to="/contact" className={`link-${theme}`}>Contact</Link>
          </li>
          <button className="icon" type="button" onClick={tog}>
          {theme==='light' ? (<BsMoonStarsFill size={30} />):(<IoSunny size={30} color="white"/>) }
          </button>
                </ul>
            </div>
        
        </nav>
        <div className="mini-header">
            <div className="name">
                <GiStaryu size={20} />
                <h1 className="sh1">  Y M V S NARAYANA</h1>
                </div>
                <nav className='ul-light'>
            <li className="li">
              <Link to="/" className={`link-${theme}`}>Home</Link>
            </li>
          <li className="li">
            <Link to="/about" className={`link-${theme}`}>About</Link>
          </li>
          <li className="li">
            <Link to="https://res.cloudinary.com/da0yjkhei/image/upload/v1711106031/48360_rupl9i.jpg" className={`link-${theme}`}>Resume</Link>
          </li>
          <li className="li">
            <Link to="/skills" className={`link-${theme}`}>Skills</Link>
          </li>
          <li className="li">
            <Link to="/projects" className={`link-${theme}`}>Projects</Link>
          </li>
          <li className="li">
            <Link to="/contact" className={`link-${theme}`}>Contact</Link>
          </li>
          <button className="icon" type="button" onClick={tog}>
          {theme==='light' ? (<BsMoonStarsFill size={15} />):(<IoSunny size={15} color="white"/>) }
          </button>
                </nav>
            </div>
        </>
    )
}

export default Header 