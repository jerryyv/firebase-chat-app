import styled from 'styled-components'
import { db } from '../firebase'
import { useRoomContext } from '../contexts/RoomContext'

export default function SidebarOption({Icon, title, addRoom, id}) {
    const { selectedRoomId, setSelectedRoomId } = useRoomContext()
    const addNewRoom = () => {
        const roomName = prompt('Enter room name')
        if(roomName){
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    const selectRoom = () => {
        if(id) {
            setSelectedRoomId(id)
        }
    }
   
    return (
        <SidebarOptionContainer
            onClick={addRoom ? addNewRoom : selectRoom}
        >
            {Icon && <Icon fontSize='small'/>}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <SidebarOptionRoom>
                    <h3><span>#</span> {title}</h3>
                </SidebarOptionRoom>
            )
        }
        </SidebarOptionContainer>
    )
}


const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    padding: 10px;
    >h3 {
        padding-left:5px
    }
    :hover{
        opacity: 0.9;
        background: red;
    }
`

const SidebarOptionRoom = styled.div`

`