import styled, { css } from 'styled-components'
import { Link } from "react-router-dom";

interface IProps {
    active?: boolean
}

export const Navbar = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.navbar};
        display: flex;
        flex-direction: row;
        height: 80px;
        justify-content: flex-start;
        align-items: center;
  `}
`

export const NavExpandableMenuLink = styled(Link)`
    ${() => css`
      margin-left: 2rem;
      font-size: 2rem;
      background: none;
  `}
`

export const NavbarList = styled.ul`
    ${() => css`
        display: flex;
        margin-left: auto;
        padding-right: 1rem;
  `}
`

export const NavbarListLink = styled(Link)`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        padding: 1rem;
        text-decoration: none;
    `}
`

export const NavMenu = styled.nav<IProps>`
    ${({ active, theme }) => css`
        background-color: ${theme.colors.navbar};
        width: 250px;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        left: ${active ? '0' : '-100%'};
        transition: ${active ? '350ms' : '850ms'};
  `}
`

export const NavMenuList = styled.ul`
    ${() => css`
        width: 100%;
  `}
`

export const NavMenuClose = styled.li`
    ${({ theme }) => css`
        background-color: ${theme.colors.navbar};
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
  `}
`

export const NavMenuListItem = styled.li`
    ${() => css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 8px 0px 8px 16px;
        list-style: none;
        height: 60px;
  `}
`

export const NavMenuListItemLink = styled(Link)`
    ${({ theme }) => css`
        text-decoration: none;
        color: ${theme.colors.white};
        font-size: 18px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;

        &:hover {
            background-color: ${theme.colors.navbarHover};
        }
  `}
`

export const NavMenuListItemLinkText = styled.span`
    ${() => css`
        margin-left: 16px;
  `}
`