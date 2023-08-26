import { injectGlobal } from "@emotion/css";

const globalStyle = injectGlobal`
:root{
  --white: #F6F1F1;
  --lightblue: #AFD3E2;
  --blue: #19A7CE;
  --darkblue: #146C94;
}
::-webkit-scrollbar {
  width: 10px;
}
 
::-webkit-scrollbar-track {      
  background: var(--white);    
}
 
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: var(--darkblue);
}
  html{
    scroll-behavior: smooth;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: "CircularBook";
  src:
    url("/src/assets/fonts/CircularStd-Book.otf") format("opentype")
  }
  @font-face {
    font-family: "CircularLight";
  src:
    url("/src/assets/fonts/CircularStd-Light.otf") format("opentype")
  }
  @font-face {
    font-family: "CircularMedium";
  src:
    url("/src/assets/fonts/CircularStd-Medium.otf") format("opentype")
  }
  @font-face {
    font-family: "CircularBold";
  src:
    url("/src/assets/fonts/CircularStd-Bold.otf") format("opentype")
  }
  `;

export default globalStyle;
