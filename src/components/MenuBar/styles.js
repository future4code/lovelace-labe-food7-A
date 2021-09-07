import styled from "styled-components"

export const ContainerMenu = styled.div`
    display: flex;
    overflow: auto;
    max-width: 100%;
    /* overflow-x: hidden; */
    
    > Button {
        margin: 10px;
        font-size: 12;
    }

    > :first-child {
        margin-right: 0;
    }
`