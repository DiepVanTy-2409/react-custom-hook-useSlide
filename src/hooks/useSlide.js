import { useState, useEffect, useRef } from "react";

export const useSlide = () => {
    const slideRef = useRef()
    const [distance, setDistance] = useState(0)

    const handleClick = (action) => {
        const slide = slideRef.current
        const items = slide.childNodes
        const itemWidth = items[0].offsetWidth
        const gap = items[1].offsetLeft - (items[0].offsetLeft + itemWidth)
        const maxDistance = (items.length * itemWidth + gap * (items.length - 1)) - slide.offsetWidth

        if (action === 'NEXT') {
            setDistance(dis => (
                dis <= -(maxDistance - itemWidth / 2) ? 0 : (dis - (itemWidth + gap))
            ))
        } else if (action === 'PREV' && distance < 0) {
            setDistance(dis => (dis + itemWidth + gap))
        }
    }

    const goNext = () => handleClick('NEXT')
    const goPrevious = () => handleClick('PREV')

    useEffect(() => {
        slideRef.current.childNodes.forEach(item => {
            item.style.transform = `translate(${distance}px)`
        })
    }, [distance])
    return { slideRef, goNext, goPrevious }
}