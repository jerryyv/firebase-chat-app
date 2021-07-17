import styled from 'styled-components'
import SidebarOption from './SidebarOption'
import { Avatar } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { auth,db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import {  useAuthState } from 'react-firebase-hooks/auth'



export default function Sidebar() {
    const [user] = useAuthState(auth)
    const [rooms] = useCollection(db.collection('rooms'))
   
    const addNewRoom = () => {
        const roomName = prompt('Enter room name')
        if(roomName){
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SideAvatar src={user?.photoURL} alt={user?.displayName}/>
                <h4>{user?.displayName}</h4>
            </SidebarHeader>
            <SidebarAddBtn onClick={addNewRoom}>
                <AddIcon fontSize="md"/>
                <span>Create Room</span>
            </SidebarAddBtn>
            {rooms?.docs.map(doc => (
                <SidebarOption key={doc.id} roomId={doc.id} title={doc.data().name}
                
                />
            ))}
        </SidebarContainer>
    )
}


const SidebarContainer = styled.div`
    background-color: var(--dark-color);
    color: gray;
    flex: 0.25;
    max-width: 260px;
    overflow-y: scroll;
`
const SidebarHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid var(--border-color);
`

const SideAvatar = styled(Avatar)`
   margin-bottom: 5px;
`
const SidebarAddBtn = styled.button`
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    padding: 10px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid var(--border-color);
    background: none;
    cursor: pointer;
    color: gray;
    width: 100%;

    :hover {
        background-color: var(--border-color);
        color: white
    }
    
    span {
        margin-left: 5px;
    }

`