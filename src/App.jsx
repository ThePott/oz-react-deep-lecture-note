import styled from "styled-components"

const BlueButton = styled.button`
background-color: blue;
color: white;
padding: 10px;
border-radius: 4px;
width: 200px;
`
const BlueButtonBig = styled(BlueButton)`
  font-size: 100px;
`


const App = () => {
  return (
    <>
      <div className="test">테스트용 텍스트
        <BlueButton>yayaya</BlueButton>
        <BlueButtonBig>yayaya</BlueButtonBig>
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
