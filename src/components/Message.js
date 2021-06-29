import styled from 'styled-components'

export default function Message({message, timestamp, sender}) {
    return (
        <MessageContainer>
            <MessageInfo>
                <h4>
                    {sender}
                    {/* <span> {new Date(timestamp?.toDate()).toUTCString()}</span> */}
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}


const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    >img {

    }
`
const MessageInfo = styled.div`

`