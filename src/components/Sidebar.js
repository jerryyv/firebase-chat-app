import styled from 'styled-components'
import SidebarOption from './SidebarOption'
import { Avatar } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { auth,db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import {  useAuthState } from 'react-firebase-hooks/auth'
import userEvent from '@testing-library/user-event'


export default function Sidebar() {
    const [user] = useAuthState(auth)
    const [rooms, loading, error] = useCollection(db.collection('rooms'))

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SideAvatar src={user?.photoURL} alt={user?.displayName}/>
                <h4>{user?.displayName}</h4>
            </SidebarHeader>
            <SidebarOption Icon={AddIcon} title='Add Room' addRoom/>
            {rooms?.docs.map(doc => (
                <SidebarOption key={doc.id} id={doc.id} title={doc.data().name}/>
            ))}
        </SidebarContainer>
    )
}


const SidebarContainer = styled.div`
    background-color: var(--main-color);
    color: white;
    flex: 0.25;
    border-top: 1px solid #FF8C00;
    max-width: 260px;
`
const SidebarHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    border-bottom: 1px solid #FF8C00;
`


const SideAvatar = styled(Avatar)`
   margin-bottom: 5px;
`