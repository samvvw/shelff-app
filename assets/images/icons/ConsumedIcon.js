import * as React from "react"
import Svg, { Path } from 'react-native-svg';


const ConsumedIcon = (props) => {
    return(
        <Svg
            width={28}
            height={28}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11 2s2.357 2.287 2.158 5.22M17.907 2s-4.86.548-3.74 4.97c.007 0 4.382-.787 3.74-4.97Z"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16.304 14.63c.1-1.318-1.727-1.983-2.06-1.633-.355.373-.32 1.347.234 2.374.578 1.073 1.733.484 1.826-.74ZM11.112 14.63c-.099-1.318 1.727-1.983 2.06-1.633.355.373.32 1.347-.234 2.374-.577 1.073-1.732.484-1.826-.74Z"
                fill="#fff"
            />
            <Path
                d="M6.417 7s2.917-1.75 5.833 0c2.917 1.75 4.667-2.333 8.75 0M7 24.5c.583 1.75 4.083 1.75 4.083 1.75 1.75 0 2.334-1.167 3.5-.583 1.167.583 1.75.583 1.75.583 2.917 0 4.084-1.75 4.084-1.75-1.383-1.92-2.334-5.938-2.334-8.75 0-3.11 1.272-6.778 2.917-8.75M7 24.5c1.383-1.92 2.334-5.938 2.334-8.75 0-3.11-1.272-6.778-2.917-8.75"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ConsumedIcon