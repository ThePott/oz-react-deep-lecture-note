import React, { useCallback, useMemo, useState, useEffect } from 'react'

const Displacy = React.memo(({ afterPlus }) => {
    console.log("re-render display")
    return (
        <div>after plus number: {afterPlus}</div>
    )
})

const MemoizePage = () => {
    const [number, setNumber] = useState(0)
    const [rerenderToggler, setRerenderToggler] = useState(false)

    // const plus1 = (number) => {
    //     console.log("---- 1 더함")
    //     return number + 1
    // }

    const plus1 = useCallback(
        (number) => {
            // console.log("---- 1 더함")
            return number + 1
        },
        []
    )

    const afterPlus = useMemo(
        () => plus1(number),
        [number]
    )

    // 참조하는 함수가 달라지면 로그 찍음
    // useEffect(() => console.log("---- plus1 함수 새로 정의됨"), [plus1])

    // console.log("---- re-render")
    return (
        <>
            <Displacy afterPlus={afterPlus} />
            <button onClick={() => setNumber(prev => prev + 1)}>number plus 1</button>
            <button onClick={() => setRerenderToggler(prev => !prev)}>re-render</button>
        </>
    )
}

export default MemoizePage