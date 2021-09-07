import styled from "styled-components"
import MenuBar from "../../components/MenuBar"

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    margin: 30px auto;
    min-height: 100vh
`

export const Divider = styled.hr`
    width: 110%;
    margin-top: 10px;
`

export const StyledMenuBar = styled(MenuBar)`
    /* box-shadow: none; */
`