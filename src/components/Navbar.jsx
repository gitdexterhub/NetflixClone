import { ArrowDropDown, Mode, Search } from '@mui/icons-material'
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import  NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import './navbar.scss'
import { useState } from 'react';

const Navbar = () => {

  const[isScrolled, setIsScrolled] = useState(false);
  
  window.onscroll = () =>{
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => window.onscroll = null;
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png" alt="" className='logo' />

          <div className='navOptions'>
          <ul className='list-content'>
            <li className='navigation-tab'>
              <a href="#">Home</a>
            </li>
            <li className='navigation-tab'>
              <a href="#">TV shows</a>
            </li>
            <li className='navigation-tab'>
              <a href="#">Movies</a>
            </li>
            <li className='navigation-tab'>
              <a href="#">New & Popular</a>
            </li>
            <li className='navigation-tab'>
              <a href="#">My list</a>
            </li>
            <li className='navigation-tab'>
              <a href="https://www.linkedin.com/in/diego-al/" className='linkedin'>Comunicate with me, Linkedin</a>
            </li>
          </ul>
        </div>

        </div>
     
        <div className="rigth">
          <Search className='searchTab icon'/>
          <span className='nav-element show-kids'>Kids</span>
          <NotificationsNoneIcon className='notifications-menu icon'/>
          <div className="profile">
          <img src="https://scontent.fbog2-5.fna.fbcdn.net/v/t1.6435-9/156482096_5104818216258257_409580203125248892_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHHfnJaRMApzwlgaYYDMgD0p5bpAuVkQwanlukC5WRDBoTFWMI1bc_hEov6OzJeUogXvkLWpDdSB1tm18aEp81T&_nc_ohc=uHhD6nbOUOMAX86u3Or&_nc_ht=scontent.fbog2-5.fna&oh=00_AfAzECpoj1L-5is9NWrzK-6h4CjxqRXj89mYgsVfeZQlcA&oe=64C33B3A" alt=""  className='principal-avatar'/>
            <ArrowDropDown className='arrowDown icon'/>
            <ArrowDropUpIcon className='arrowUp '/>
            <div className="options">
                    <div>
                      <a href="#" className='profile-link'>
                        <div className="avatar-wrapper">
                          <img src="https://scontent.fbog2-5.fna.fbcdn.net/v/t1.6435-9/156482096_5104818216258257_409580203125248892_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHHfnJaRMApzwlgaYYDMgD0p5bpAuVkQwanlukC5WRDBoTFWMI1bc_hEov6OzJeUogXvkLWpDdSB1tm18aEp81T&_nc_ohc=uHhD6nbOUOMAX86u3Or&_nc_ht=scontent.fbog2-5.fna&oh=00_AfAzECpoj1L-5is9NWrzK-6h4CjxqRXj89mYgsVfeZQlcA&oe=64C33B3A" alt="" className='avatar-wrapper'/>
                        </div>
                        <span className='profile-options'>Diego Rueda</span>
                      </a> 

                      <div className="settings">
                      <a href="#" className='profile-link'>
                        <div>
                          <Mode className='icon-edit'/>
                        </div>
                        <span className='profile-options'>Manage Profiles</span>
                      </a> 

                      <a href="#" className='profile-link'>
                        <div>
                          <SwitchAccountIcon className='icon-edit'/>
                        </div>
                        <span className='profile-options'>Transfer profile</span>
                      </a> 

                      <a href="#" className='profile-link'>
                        <div>
                          <PersonOutlineIcon className='icon-edit'/>
                        </div>
                        <span className='profile-options'>Account</span>
                      </a>

                      <a href="#" className='profile-link'>
                        <div>
                          <HelpOutlineIcon className='icon-edit'/>
                        </div>
                        <span className='profile-options'>Help Center</span>
                      </a>
                      <div className="sigout-cont">
                        <a href="#" className='profile-link'>
                          <span className='profile-options'>Sing out of Netflix</span>
                        </a>
                      </div> 
                    </div>    
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
