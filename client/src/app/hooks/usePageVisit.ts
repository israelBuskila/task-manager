import { useEffect } from "react"

const usePageVisit = (pageName: string) => {
    useEffect(() => console.log(`User visited: ${pageName}`))
}
export default usePageVisit 