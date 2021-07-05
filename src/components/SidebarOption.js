import styled from 'styled-components'
import { useRoomContext } from '../contexts/RoomContext'
import DeleteIcon from '@material-ui/icons/Delete';
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
    // const deleteRoom = (e) => {
    //     e.stopPropagation()
    //     db.collection("rooms").doc(roomId).delete()
    // }
    const editRoom = (e) => {
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
            color={selectedRoomId===roomId?'white':''}
        >
        <h3># {title}</h3>
        <div className="roomIcons">
            <EditIcon fontSize="small" onClick={editRoom}/>
            {/* <DeleteIcon fontSize="small" onClick={deleteRoom}/> */}
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
        background: #26282c;
        color: white;

    }

    svg:hover {
        color: orange;
    }
`