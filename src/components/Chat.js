import styled from 'styled-components'
import { useRoomContext } from '../contexts/RoomContext'
import MessageInput from './MessageInput'
import Message from './Message'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import { useRef,useEffect } from 'react'

export default function Chat() {
    const { selectedRoomId } = useRoomContext()
    const bottomRef = useRef()

    const [roomInfo] = useDocument(
      selectedRoomId && db.collection('rooms').doc(selectedRoomId)
    )
    const [roomMessages,loading] = useCollection(
        selectedRoomId && 
        db.collection('rooms').doc(selectedRoomId).collection('messages')
        .orderBy('timestamp', 'asc')
    )
  
    useEffect(() => {
        bottomRef?.current?.scrollIntoView({
            behavior:"smooth"
        })
    },[selectedRoomId,loading])
    
    return (
        <ChatContainer>
            {roomInfo && roomMessages && (
                <>
                    <ChatHeader>
                        <h3>#{roomInfo?.data().name}</h3>
                    </ChatHeader>
                    <ChatMessages>
                        {roomMessages?.docs.map(doc => {
                            const { message, timestamp, sender, senderImage } = doc.data()
                            return (
                                <Message 
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    sender={sender}
                                    image={senderImage}
                                />
                            )
                        })}
                    </ChatMessages>
                    <BottomSpace ref={bottomRef}/>
                    <MessageInput roomId={selectedRoomId} roomName={roomInfo?.data().name} bottomRef={bottomRef}/>
                </>
             )} 

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
const BottomSpace = styled.div`
    padding-bottom: 150px;
`