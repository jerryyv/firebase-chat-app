import styled from 'styled-components'
import { db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

export default function SidebarOption({Icon, title, addRoom}) {
    const [rooms, loading, error] = useCollection(db.collection('rooms'))
    console.log(rooms);
    const addNewRoom = () => {
        const roomName = prompt('Enter room name')
        if(roomName){
            db.collection('rooms').add({
                name: roomName
            })
        }
    }
    const selectRoom = () => {

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