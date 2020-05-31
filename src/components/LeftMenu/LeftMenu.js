import React from "react"
import './LeftMenu.scss'
import icoMenu from './menu_open_btn.svg'
import logo from './react-logo.svg'
import close from './menu-close-btn.svg'

const LeftMenu = ({ menuList }) => {
    return (
        <menu className="menu">
            <img className="menu__logo" src={logo} alt="logo"/>
            <a href="#" className="menu__link-ico">
                <img className="menu__ico" src={icoMenu} alt=""/>
            </a>
            <div className="menu__list">
                <div className="menu__close">
                    <img className="menu__close-ico" src={close} alt=""/>
                </div>
                <ul className="menu__list-items">
                    {Object.entries(menuList).map(el => {
                        return (
                            <li className="menu__item" key={ el[0] }>
                                <a
                                    href={ el[1].href }
                                    className="menu__link">{ el[1].name }
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </menu>
    )
}

export default LeftMenu;