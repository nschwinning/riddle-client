import React, { ReactElement, useState } from 'react'
import { useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import { Navbar, NavExpandableMenuLink, NavbarList, NavbarListLink, NavMenu, NavMenuList, NavMenuListItem, 
    NavMenuClose, NavMenuListItemLinkText, NavMenuListItemLink } from '../styles';
import { IconContext } from "react-icons";

interface Props {
    
}

function Menubar({}: Props): ReactElement {
    const location = useLocation();
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Navbar>
                    <NavExpandableMenuLink to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavExpandableMenuLink>

                    <NavMenu active={sidebar}>
                        <NavMenuList onClick={showSidebar}>
                            <NavMenuClose>
                                <NavExpandableMenuLink to="#">
                                    <AiIcons.AiOutlineClose />
                                </NavExpandableMenuLink>
                            </NavMenuClose>

                            <NavMenuListItem>
                                <NavMenuListItemLink to="/">
                                    <AiIcons.AiFillHome />
                                    <NavMenuListItemLinkText>Home</NavMenuListItemLinkText>
                                </NavMenuListItemLink>
                            </NavMenuListItem>

                            <NavMenuListItem>
                                <NavMenuListItemLink to="/sudoku">
                                    <AiIcons.AiOutlineTable />
                                    <NavMenuListItemLinkText>Sudoku</NavMenuListItemLinkText>
                                </NavMenuListItemLink>
                            </NavMenuListItem>

                            <NavMenuListItem>
                                <NavMenuListItemLink to="/kakuro">
                                    <GiIcons.GiAbstract063 />
                                    <NavMenuListItemLinkText>Kakuro</NavMenuListItemLinkText>
                                </NavMenuListItemLink>
                            </NavMenuListItem>

                            <NavMenuListItem>
                                <NavMenuListItemLink to="/wordle">
                                    <GiIcons.GiAbstract063 />
                                    <NavMenuListItemLinkText>Wordle</NavMenuListItemLinkText>
                                </NavMenuListItemLink>
                            </NavMenuListItem>
                        </NavMenuList>
                    </NavMenu>

                    <NavbarList>
                        <li>{location.pathname === "/about" ? <NavbarListLink to="/">Home</NavbarListLink> : <NavbarListLink to="/about">About</NavbarListLink>}</li>
                    </NavbarList>
                </Navbar>
            </IconContext.Provider>
        </>
    )
}

export default Menubar;


