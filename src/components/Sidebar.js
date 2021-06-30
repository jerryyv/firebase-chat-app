import styled from 'styled-components'
import SidebarOption from './SidebarOption'
import { Avatar } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
                <div className="title">
                    <ExpandMoreIcon fontSize="small" />
                    <h3>Chat Rooms</h3>
                </div>
                <AddIcon fontSize="small"/>
            </SidebarAddBtn>
            {rooms?.docs.map(doc => (
                <SidebarOption key={doc.id} roomId={doc.id} title={doc.data().name}
                
                />
            ))}
        </SidebarContainer>
    )
}


const SidebarContainer = styled.div`
    background-color: #2f3135;
    color: gray;
    flex: 0.25;
    max-width: 260px;
`
const SidebarHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #26282c;
`

const SideAvatar = styled(Avatar)`
   margin-bottom: 5px;
`
const SidebarAddBtn = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    padding:10px;
    justify-content: space-between;
    border-bottom: 1px solid #26282c;
   
    .title {
        display: flex;
        align-items: center;
    }
    
    h3 {
        padding-left:5px;
    }

    :hover {
        background: #26282c;
        color: white;

    }
`