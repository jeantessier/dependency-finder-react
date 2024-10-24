import { useEffect, useRef } from 'react'

export default function useTitle(title) {
    const documentDefined = typeof document !== 'undefined'
    const originalTitleRef = useRef(documentDefined ? document.title : null)

    useEffect(() => {
        if (!documentDefined) return

        const originalTitle = originalTitleRef.current
        if (document.title !== title) document.title = title

        return () => {
            document.title = originalTitle
        }
    })
}
