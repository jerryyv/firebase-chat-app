import styled from 'styled-components'
import { useRoomContext } from '../contexts/RoomContext'


export default function SidebarOption({ title, roomId}) {
    const { selectedRoomId, setSelectedRoomId } = useRoomContext()

    const selectRoom = () => {
        if(roomId) {
            setSelectedRoomId(roomId)
        }
    }
   
    console.log(selectedRoomId)
    return (
        <SidebarOptionContainer
            onClick={selectRoom}
            background={selectedRoomId===roomId?'#26282c':''}
            color={selectedRoomId===roomId?'white':''}
        >
        <h3><span>#</span> {title}</h3>
        </SidebarOptionContainer>
    )
}

const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
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
`