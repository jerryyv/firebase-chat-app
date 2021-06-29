import styled from 'styled-components'
import { useRoomContext } from '../contexts/RoomContext'
import MessageInput from './MessageInput'

export default function Chat() {
    const { selectedRoomId } = useRoomContext()
    return (
        <ChatContainer>
            <ChatHeader>
                <h3>#Room-name</h3>
            </ChatHeader>
            <ChatMessages>
                <MessageInput roomId={selectedRoomId}/>
            </ChatMessages>
        </ChatContainer>
    )
}


const ChatContainer = styled.div`
 flex: 0.75;
 flex-grow: 1;
 overflow-y: scroll;
`
const ChatHeader = styled.div`
    padding: 30px;
    border-bottom: 1px solid lightgray;
    text-transform: lowercase;
`
const ChatMessages = styled.div`
`