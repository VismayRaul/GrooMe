import './Style.css';
import { useState, useEffect } from 'react';
import menu from '../assets/img/menu.png'

export const Navbar = ()=>{
    const [ scrolled, setScrolled ] = useState(false)
    const [ isNavExpanded, setIsNavExpanded ] = useState(false)

    useEffect(()=>{
        const onScroll = ()=>{
            if (window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll',onScroll)

        return ()=>window.removeEventListener('scroll',onScroll)
    },[])

    return(
            <div className={scrolled? "scrolled nav":"nav"}>
                <div className="nav-titles">
                    <div className='logo'>
                        <strong>
                            GrooMe
                        </strong>
                    </div>
                    {/* <div className='nav-list-div'> */}
                    <div className={isNavExpanded ? "nav-list-div expanded" : "nav-list-div"}>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                Dresses
                            </li>
                            <li>
                                Bags
                            </li>
                            <li>
                                Subscribe
                            </li>
                        </ul>
                    </div>
                    <div className='menu-bar'>
                        <img src={menu} onClick={()=>{ setIsNavExpanded(!isNavExpanded) }}/>
                    </div>
                </div>
            </div>
    )
}