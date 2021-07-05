import styled from 'styled-components'

export default function Message({message, sender, image}) {
    return (
        <MessageContainer>
            <img src={image} alt={sender} /> 
            <div className="text">
                <h4>
                    {sender}
                </h4>
                <p>{message}</p>
            </div>
        </MessageContainer>
    )
}


const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    img {
        width:40px;
        border-radius: 5px;
        margin-right: 10px;
        
    }
`
