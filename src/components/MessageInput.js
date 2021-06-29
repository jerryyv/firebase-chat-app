import styled from 'styled-components'
import firebase from 'firebase'
import { db } from '../firebase'
import { useState } from 'react'

export default function MessageInput({roomId, roomName, bottomRef}) {
    const [messageInput, setMessageInput] = useState('')
    const sendMessage = (e) => {
        e.preventDefault()
        
        if(!roomId){
            return
        }

        db.collection('rooms').doc(roomId).collection('messages').add({
            message:messageInput,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            sender:'current user'
        })

        bottomRef.current.scrollIntoView({
            behavior:"smooth"
        })

        setMessageInput('')
    }
    
    return (
        <MessageInputContainer>
            <form>
                <input 
                value={messageInput} 
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder={`Message #${roomName}`}/>
                <button hidden type='submit' onClick={sendMessage}>send</button>
            </form>

        </MessageInputContainer>
    )
}

const MessageInputContainer = styled.div`
    padding-top:20px;

    >form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    >form >input {
        position: fixed;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 20px;
        bottom: 30px;
        width: 65%;
        outline: none;
    }
`