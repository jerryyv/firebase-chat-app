import { AiFillFire } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import styled from 'styled-components'
import { auth } from '../firebase'

export default function Header() {
    return (
        <HeaderContainer>
         <h1><AiFillFire /> FireChat</h1>
         <button onClick={() => auth.signOut()}><FaSignOutAlt /> LogOut</button>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    background-color: var(--dark-color);
    position: sticky;
    top:0;
    height: 80px; 
    border-bottom: 3px solid var(--border-color);

    h1 {
        display: flex;
        align-items: center;

        svg {
            color: orange;
        }
    }

    button {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: gray;
        padding: 0;
        border: none;
        background: none;
        font-size: 18.73px;
        font-weight: 700;
        
        svg {
            margin-right:2px;
        }

        :hover{
            color: white;
        }
    }
`
