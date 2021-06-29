import styled from 'styled-components'

export default function Loading() {
    return (
        <LoadingContainer>
           <h1>Loading...</h1>
        </LoadingContainer>
    )
}


const LoadingContainer = styled.div`
   display: flex;
   height: 100vh;
   align-items: center;
   justify-content: center;
`