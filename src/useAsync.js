import { useEffect } from "react"


export const useAsync = (callback, deps = []) => {

  const state = '' // store에서 가져온 state

  const fetchData = async () => {
    try{
      const data = await callback();
      console.log(data); // 콘솔로그 대신 data를 state에 저장하는 로직
    } catch (e) {
      console.log(e) // 콘솔로그 대신에 에러처리
    }
  }

  useEffect(() => {
    fetchData();
  }, deps)

  return [state, fetchData]
}