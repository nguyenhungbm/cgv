import styled from "vue3-styled-components";
const rowProps = {
  maxWidth: String,
};
export const WrapperImage = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  & > img {
    -moz-transform: translateY(-50%) translateX(-50%);
    -moz-transition: 0.5s all ease-in-out;
    display: block;
    left: 50%;
    margin: auto;
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    transition: 0.5s all ease-in-out;
    vertical-align: middle;
  }
`;

export const WrapperProgress = styled("div", rowProps)`
  margin-top: 15px;
  width: 100%;
  height: 19px;
  border-radius: 20px;
  border: 1px solid #fc9a24;
  text-align: center;
  line-height: 19px;
  font-family: RobotoM;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #000;
  & > .process {
    position: absolute;
    top: 0;
    right: 0;
    background: #fc9a24;
    height: 100%;
    z-index: 1;
     ${(props) => props.maxWidth && `width:${props.maxWidth}`}
  }
  & > .text {
    position: relative;
    z-index: 2;
  }
`;
 
