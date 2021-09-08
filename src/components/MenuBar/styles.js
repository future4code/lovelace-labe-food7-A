import styled from "styled-components"

export const ContainerMenu = styled.div`
    display: flex;
    overflow: scroll;
    max-width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }
    
    > Button {
        margin: 10px;
        font-size: 12;
    }

    > :first-child {
        margin-right: -8px;
    }
`