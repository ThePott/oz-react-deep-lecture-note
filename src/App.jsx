

const App = () => {
  return (
    <>
      <div className="test">테스트용 텍스트
        <div className="bgMuted bg-amber-200">
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
