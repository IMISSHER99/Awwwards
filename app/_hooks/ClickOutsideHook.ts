import { RefObject, useEffect } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

const useClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: Handler) => {

    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if(!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event)
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }

    }, [ref, handler])
}

export default useClickOutside