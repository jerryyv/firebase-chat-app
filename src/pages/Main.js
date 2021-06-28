import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

export default function Main() {
    return (
        <>
            <Header />
            <MainContainer>
            <Sidebar />

            </MainContainer>
        </>
    )
}

const MainContainer = styled.div`
    display: flex;
    height: 100vh
`