import React, { useState,useEffect } from 'react'
import './style.css'
import { logo } from '../../assets'
import { navigation } from '../../constants'
import { Link, useLocation, useParams } from 'react-router-dom'

const Navigation = () => {
  const [isscroll, setIsScroll] = useState(false);
  const[active,setActive]=useState('about');
  const location=useLocation();
 
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <div className='navigation inline-wrapper' style={{backgroundColor:isscroll?'black':''}}>
      <div className='navigation-logo'>
        <Link to='/'>
        <img src={logo} alt='logo' />
        </Link>
      </div>
      <ul className='navigation-lists'>
        {
          navigation.map(({option,link})=> (
              <a href={link}>
            <li>{option}</li>
            {
              active==link.slice(1) && <div style={{background:'#fff',height:'2px',width:'100%',marginTop:'3px'}}></div>
            }
            </a>
            )
          )
        }
        <Link>
          <li>CALL +(91)-9289409329</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation