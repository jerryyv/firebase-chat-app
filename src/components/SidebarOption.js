import styled from 'styled-components'
import { useRoomContext } from '../contexts/RoomContext'
import EditIcon from '@material-ui/icons/Edit';
import { db } from '../firebase'


export default function SidebarOption({ title, roomId}) {
    const { selectedRoomId, setSelectedRoomId } = useRoomContext()
    

    const selectRoom = () => { 
        if(roomId) {
            setSelectedRoomId(roomId)
            console.log('selected')
        }
    }
 
    const editRoomName = (e) => {
        e.stopPropagation()
        const newRoomName = prompt('Edit room name')
        if(newRoomName){
            db.collection("rooms").doc(roomId).update({
                name: newRoomName
            })
        }
    }
   
  
    return (
        <SidebarOptionContainer
            onClick={selectRoom}
            background={selectedRoomId===roomId?'#26282c':''}
            color={selectedRoomId===roomId?'white':'gray'}
        >
            <h3># {title}</h3>
            <div className="roomIcons">
                <button onClick={editRoomName}><EditIcon fontSize="small" /></button>    
            </div>
        </SidebarOptionContainer>
    )
}

const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 13px;
    padding: 10px;
    background: ${props => props.background};
    color: ${props => props.color};

    h3 {
        padding-left:5px
    }

    :hover {
        background: var(--border-color);
        color: white;

    }

    button {
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
        color: ${props => props.color}
    }

    button:hover {
        color: orange;              
    }       
`