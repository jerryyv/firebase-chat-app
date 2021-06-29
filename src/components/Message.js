import styled from 'styled-components'

export default function Message({message, timestamp, sender, image}) {
    return (
        <MessageContainer>
            {/* <img src={image} alt={sender} /> */}
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
        width:40px;
        border-radius: 5px;
        margin-right: 10px;
    }
`
const MessageInfo = styled.div`

`