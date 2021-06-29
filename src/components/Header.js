import { AiFillFire } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import styled from 'styled-components'
import { auth } from '../firebase'

export default function Header() {
    return (
        <HeaderContainer>
         <h1><AiFillFire /> FireChat</h1>
         <p onClick={() => auth.signOut()}><FaSignOutAlt /> LogOut</p>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: var(--main-color);
    position: sticky;
    z-index: 999;

    >h1 {
        display: flex;
        align-items: center;
    }

    >p {
        display: flex;
        align-items: center;
        cursor: pointer;

        >svg {
            margin-right:2px;
        }
    }
`
