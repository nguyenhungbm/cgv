import styled from "vue3-styled-components";
 
const SpinLoadingProps = {
  size: Number,
};

export const EmptyPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #FFF;
  z-index: 100000;cal-align: middle;
`;


export const SpinLoading = styled("div", SpinLoadingProps)`
  width: ${(props) => props.size || 200}px;
  height: ${(props) => props.size || 200}px;
  position: fixed;
  left: 50%;
  top: 50%;
  background-image: url('/view/img/loader.gif');
  background-repeat: no-repeat;
  background-position: center;
  margin: -100px 0 0 -100px;
  z-index: 100001;
`;
