  import styled from "@emotion/styled"

  export const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100vw;
    height: 100vh;
    background: rgba(49, 49, 49, 0.8);
    backdropFilter: "blur(20px)",
    zIndex: 999, 
  `

  export const ModalContent = styled.div`
    border-radius: 5px;
    background-color: white;
    padding: 20px;
  `

  export const CloseButton = styled.p`
    cursor: pointer;
  `

  export const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
  `
