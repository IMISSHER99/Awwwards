'use client'

import { useEffect } from "react";

interface ScrollHelperProps {

}

const ScrollHelper: React.FC<ScrollHelperProps> = ({}) => {

    useEffect(() => {
        const handleScroll= () => {
            const scrollPosition = window.scrollY
            console.log(scrollPosition)
            const element = document.getElementById("bt-nav")
            if(element) {
                if(scrollPosition > 100) {
                    element.classList.remove('hidden')
                    element.classList.add('flex')
                }
                else {
                    element.classList.remove('flex')
                    element.classList.add('hidden')
                }
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div className="bt-nav bt-nav--left hidden items-center justify-center" id="bt-nav">
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.69899 3.08174L7.76441 4.02584L7.75493 4.0258L1.3542 10.4265L0.0117182 9.08405L6.41245 2.68332L8.69707 0.398693L10.0396 1.74118L17.4565 9.15817L16.1159 10.4893L9.66059 4.0339L8.69899 3.08174ZM8.22508 5.69881L10.4911 7.2949L10.5527 21.8672L8.29342 21.8576L8.22508 5.69881Z" fill="white"></path>
            </svg>
        </div>
    )
} 

export default ScrollHelper