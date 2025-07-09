import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
background-color: green;
}
`

const BlueButton = styled.button`
background - color: blue;
color: white;
padding: 10px;
border - radius: 4px;
width: 200px;
`
const BlueButtonBig = styled(BlueButton)`
font - size: 100px;
`
const PropsButton = styled.button`
background - color: ${props => props.backgroundColor || "white"}
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="test">테스트용 텍스트
        {/* <BlueButton>yayaya</BlueButton>
        <BlueButtonBig>yayaya</BlueButtonBig> */}
        <PropsButton backgroundColor="red">props button</PropsButton>
        <div className="bgMuted">
          <h1 className="fgMuted">Sample Text</h1>
          <p>본문 예시</p>
          <h1 className="fg0">Sample Text</h1>
          <p>본문 예시</p>
          <h1 className="fgAccent">Sample Text</h1>
          <p>본문 예시</p>
        </div>

        <div className="bg0">
          <h1 className="fgMuted">Sample Text</h1>
          <p>본문 예시</p>
          <h1 className="fg0">Sample Text</h1>
          <p>본문 예시</p>
          <h1 className="fgAccent">Sample Text</h1>
          <p>본문 예시</p>
        </div>

        <div className="bgAccent">
          <h1 className="fgMuted">Sample Text</h1>
          <p>본문 예시</p>
          <h1 className="fg0">Sample Text</h1>
          <p>본문 예시</p>
          <h1 className="fgAccent">Sample Text</h1>
          <p>본문 예시</p>
        </div>

      </div>
    </>
  )
}

export default App
