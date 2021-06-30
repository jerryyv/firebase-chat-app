import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import styled from 'styled-components'


export default function Main() {
   
    return (
        <>
            <Header />
            <MainContainer>
            <Sidebar />
            <Chat />
            </MainContainer>
        </>
    )
}

const MainContainer = styled.div`
    display: flex;
    height: calc(100vh - 80px)
`