import React, { useState,useEffect } from 'react'
import './style.css'
import { logo } from '../../assets'
import { navigation } from '../../constants'
import { Link, useLocation, useParams } from 'react-router-dom'

const Navigation = ({name,setUser,isFutureAppointment,setIsFutureAppointment}) => {
  const [isscroll, setIsScroll] = useState(false);
  const[active,setActive]=useState('about');
  const location=useLocation();
  const [subnav,setSubnav]=useState(false);
  console.log(name);
 
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const handleLogout=()=>{
    if(localStorage.getItem("token"))
    {
      localStorage.removeItem("token");
      setUser();
    }
  }
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
              <Link to={link}>
            <li>{option}</li>
            {
              active==link.slice(1) && <div style={{background:'#fff',height:'2px',width:'100%',marginTop:'3px'}}></div>
            }
            </Link>
            )
          )
        }
        <Link>
          <li>CALL +(91)-9289409329</li>
        </Link>
        {
          name?<button onClick={()=>{setSubnav(!subnav)}}>{subnav?'CLOSE':'ACCOUNT'}
          <div className='subnav' style={{display:subnav?'flex':'none'}}>
            <p>Hi,{name}!</p>
            <li>PROFILE</li>
            <Link to='/appointments'><li onClick={()=>{setIsFutureAppointment(false)}} >APPOINTMENT HISTORY</li></Link>
            <Link to='/appointments'><li onClick={()=>{setIsFutureAppointment(true)}} >FUTURE APPOINTMENTS</li></Link>
            <button onClick={handleLogout}>LOGOUT</button>
          </div>
          </button>
          :<Link to='/user'>
          <button>LOGIN</button>
        </Link>
        }
      </ul>
    </div>
  )
}

export default Navigation