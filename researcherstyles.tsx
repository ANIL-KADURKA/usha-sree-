import styled from "@emotion/styled"
import { HighLightHeader } from "../home/homestyles"

export const Background = styled.div`
  position: absolute;
  background-color: rgb(21, 34, 35);
  height: 100%;
  width: 100%;
  z-index: -1;
  top: 120vh;
`

export const Poster = styled("div")`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 8%;
  & > h1 {
    font-family: Marcellus;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 24px;
    color: #000000;
    width: 100%;
    text-align: center;
    margin-top: 8%;
    margin-bottom: 7%;
  }
  & > h3 {
    position: absolute;
    width: 40%;
    top: 809px;
    padding-left: 6%;
    margin: 0 auto;
    font-family: Marcellus;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
    z-index: 2;

    @media (max-width: 500px) {
      top: 35%;
    }
  }
`

export const ResearchPoster = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & > h1 {
    font-family: Marcellus;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 24px;
    color: #000000;
    width: 100%;
    text-align: center;
    margin: 2%;
    margin-bottom: 100px;
  }
`

export const ResearcherImg = styled("img")`
  width: ${props => props.width};
  height: ${props => props.height};
  z-index: 2;
  margin: 0;
  padding: 0;
`

export const ResearcherCaption = styled("div")`
  font-family: "Marcellus";
  text-align: center;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  padding: 60px 10%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
  background-color: rgb(21, 34, 35);
  position: relative;
  padding-inline: 30px;

  .anchor-element {
    color: white;
    text-decoration: none;
  }

  .anchor-element:hover {
    color: white;
  }

  & > p {
    width: 1024px;
    font-family: Marcellus;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    margin-top: 2%;

    @media (max-width: 600px) {
      font-size: 16px;
      font-size: 16px;
      line-height: 28px;
      padding-inline: 0;
    }
  }
`
export const ResearcherBackground = styled.div`
  position: absolute;
  background-color: rgb(21, 34, 35);
  height: 200px;
  width: 100%;
  z-index: 2;
  top: 1960px;
`

export const ResearcherColumns = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5%;
  font-family: "Marcellus";
`
export const ResearcherColumn = styled("div")`
  text-align: center;
  background-color: black;
  color: #524677;
  float: left;
  margin-left: 3%;
  margin-right:3%;
  position: relative;
  font-family: "Marcellus";
  position:relative;

  & > div {
    position: relative;
    margin-inline: 30px;
  }
  
  & > img {
    background: rgba(0, 0, 0, 0.4)
    mix-blend-mode: normal;
    opacity: 0.5;
    width: 100%;
  }

  & > h3 {
    position: absolute;
    left: 5%;
    top: 45%;
    font-size: 34px;
    font-style: normal;
    font-weight: normal;
    width: 300px;
    color: rgba(255, 255, 255, 1);
    font-family: "Marcellus";
  }
  & > h5 {
    position: absolute;
    top: 40%;
    width: 230px;
    line-height: 30px;
    font-size: 24px;
    font-style: normal;
    font-weight: normal;
    line-height: 30px;
    left: 15%;
    color: rgba(255, 255, 255, 1);
    font-family: "Marcellus";
  }
`

export const ResearchImageContainer = styled("div")`
  position: relative;
  margin-inline: 30px;
`

export const RectangleLeft = styled("div")`
  position: absolute;
  height: 200px;
  top: 0px;
  left: 0px;
  box-sizing: border-box;
  transform: matrix(-1, 0, 0, 1, 0, 0);

  @media (max-width: 600px) {
    display: none;
  }
`

export const RectangleRight = styled("div")`
  position: absolute;
  height: 200px;
  right: 0px;
  top: 120px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    display: none;
  }
`

export const RectangleCenterDown = styled("div")`
  position: absolute;
  height: 200px;
  bottom: -80px;
  box-sizing: border-box;
  border: 1px solid #000000;
  z-index: 3;
  margin-top: 150px;
`

export const H6 = styled("h6")`
  height: 100px;
  font-family: Marcellus;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 50px;
  text-align: center;
  color: #000000;
  padding: 13%;
`

export const ImageHeading = styled("h3")`
  position: absolute;
  font-family: Marcellus;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  color: white;
  font-style: normal;
  font-weight: normal;
  padding: 30px;
  font-size: 34px;
  line-height: 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`

export const HightLightResearcherHeader = styled(HighLightHeader)`
  margin-bottom: 0;
`

export const HighLightText = styled(HighLightHeader)`
  margin-bottom: 0;
`

export const ImageContainer = styled("div")`
  position: relative;
`

export const InnerContainerOP = styled("div")`
  padding:0px;
`

interface OverlayProps {
  show: boolean;
  onClick: () => void;
}

export const Overlay = styled.div<OverlayProps>`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
  display: ${(props) => (props.show ? "block" : "none")};
`;


interface ModalWrapperProps {
  show: boolean;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const ModalContent = styled.div`
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`
export const ModalButton = styled.button`
  padding: 10px 20px;
  display: block;
  margin: 100px auto 0;
  font-size: 18px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
`
