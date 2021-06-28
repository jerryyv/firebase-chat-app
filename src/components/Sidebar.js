import styled from 'styled-components'
import SidebarOption from './SidebarOption'
import { Avatar } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'


export default function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SideAvatar/>
                <h4>Users Name</h4>
            </SidebarHeader>
            <SidebarOption Icon={AddIcon} title='Add Room' addRoom/>
        </SidebarContainer>
    )
}


const SidebarContainer = styled.div`
    background-color: var(--main-color);
    color: white;
    flex: 0.25;
    border-top: 1px solid #FF8C00;
    max-width: 260px;
`
const SidebarHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    border-bottom: 1px solid #FF8C00;
`


const SideAvatar = styled(Avatar)`
   margin-bottom: 5px;
`