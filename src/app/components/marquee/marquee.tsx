import { count } from "console"
import React from "react"

interface MarqueeProps {
    boldMessage: string,
    message: string,
    count: number,
    displayIcon: boolean
}

const Marquee: React.FC<MarqueeProps> = ({boldMessage, message, count, displayIcon}) => {
    const splitBoldMessage = boldMessage.split("|")
    const splitMessage = message.split("|")

    return (
        <div className="marquee__wrapper flex items-center justify-around">
            {
                
                Array.from({ length: count }, (_, index) => (
                    <div className="marquee__item flex items-center flex-nowrap" key={index + 1}>
                        <div className="whitespace-nowrap font-light">
                            {        
                                splitBoldMessage.length <= 1 ? <strong className="whitespace-nowrap" key={index}>{splitBoldMessage[0]}</strong> : splitBoldMessage.map((part:string, index) => (
                                        <React.Fragment key={index}><strong className="whitespace-nowrap" key={index}>{splitBoldMessage[index]}</strong>{splitMessage[index]}</React.Fragment>
                                ))
                            }
                        </div>
                        <svg className={`marquee__separator ${displayIcon ? '': 'hidden'}`} height="19" width="19" viewBox="0 0 20 20">
                            <polygon points="17.25,7 11.54,7 16.05,0.05 11.08,0.05 8.12,0.05 2.75,10.17 7.33,10.17 4.32,19.95 "></polygon>
                        </svg>
                    </div>
                ))
            }
            
        </div>
    )
}
    
export default Marquee