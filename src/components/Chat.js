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
    },[selectedRoomId,loading,roomMessages])
    
    return (
        <ChatContainer>
            {roomInfo && roomMessages && (
                <>
                    <ChatHeader>
                        <h2># {roomInfo?.data().name}</h2>
                    </ChatHeader>
                    <ChatMessages>
                        {roomMessages?.docs.map(doc => {
                            const { message, sender, image } = doc.data()
                            return (
                                <Message 
                                    key={doc.id}
                                    message={message}
                                    sender={sender}
                                    image={image}
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
 background-color: #363a3f;
`
const ChatHeader = styled.div`
    display: flex;
    align-items: center;
    /* height: 80px; */
    padding: 20px 30px;
    /* border-bottom: 1px solid #26282c; */
    text-transform: lowercase;
    color: gray 
`
const ChatMessages = styled.div`
    color: white;
`
const BottomSpace = styled.div`
    padding-bottom: 200px;
`