import { AiFillFire } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import styled from 'styled-components'
import { auth } from '../firebase'

export default function Header() {
    return (
        <HeaderContainer>
         <h1><AiFillFire /> FireChat</h1>
         <h3 onClick={() => auth.signOut()}><FaSignOutAlt /> LogOut</h3>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: #2f3135;
    position: sticky;
    top:0;
    height: 80px; 
    border-bottom: 3px solid #26282c;

    h1 {
        display: flex;
        align-items: center;

        svg {
            color: orange;
        }
    }

    h3 {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: gray;
        
        svg {
            margin-right:2px;
        }

        :hover{
            color: white;
        }
    }
`
