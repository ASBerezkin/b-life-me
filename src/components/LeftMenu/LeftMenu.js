import React, {useState} from "react"
import MenuItem from "./MenuItem/MenuItem";
import './LeftMenu.scss'
import icoMenu from './menu_open_btn.svg'
import logo from './react-logo.svg'
import close from './menu-close-btn.svg'

const LeftMenu = ({ menuList }) => {
    const [active, setActive] = useState({});
    const [show, setShow] = useState(false);
    const handleTriggerShowMenu = (e) => {
        e.preventDefault();
        setShow(!show);
    }
    return (
        <menu className="menu">
            <img className="menu__logo" src={logo} alt="logo"/>
            <a href="#" className="menu__link-ico" onClick={(e) => handleTriggerShowMenu(e)}>
                <img className="menu__ico" src={icoMenu} alt="" />
            </a>
            <div className={show ? 'menu__list menu__list_show' : 'menu__list'}>
                <div className="menu__close">
                    <a href="#" className="menu__close-link" onClick={(e) => handleTriggerShowMenu(e)}>
                        <img className="menu__close-ico" src={close} alt="" />
                    </a>
                </div>
                <ul className="menu__list-items">
                    {menuList.map(el => {
                        return (
                            <MenuItem
                                href={el.href}
                                name={el.name}
                                onClick={() => setActive({[el.id]: true})}
                                key={ el.id }
                                isActive={active[el.id]}
                            />
                        )
                    })}
                </ul>
            </div>
        </menu>
    )
}

export default LeftMenu;