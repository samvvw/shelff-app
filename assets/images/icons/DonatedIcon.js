import * as React from "react"
import Svg, { Path } from 'react-native-svg';

const DonatedIcon = (props) => {
    return(
        <Svg
            width={28}
            height={28}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M6.656 18.23c-1.026-1.815-1.668-3.915-1.3-5.898.921-4.982 5.687-5.396 6.9-4.783 1.33.67 1.61.67 1.745.67.14 0 .414 0 1.744-.67 1.213-.613 5.985-.199 6.9 4.783.292 1.575-.058 3.226-.729 4.748 0 0-.682 1.249-1.283 2.036"
                stroke="#fff"
                strokeMiterlimit={10}
            />
            <Path
                d="M11.614 1.75s2.59 2.788 2.194 6.178"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M18.59 2.333s-5.716.648-4.397 5.851c0 0 5.15-.921 4.398-5.85Z"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13.025 11.177s-3.36-.613-3.931 2.707"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="m16.998 21.659 5.95-4.212s1.57-1.19 2.398 0c.869 1.237-.304 2.112-.304 2.112l-7.84 5.28a1.888 1.888 0 0 1-1.598.238l-5.723-1.72a.872.872 0 0 0-.729.105L5.326 26.25l-2.993-4.084 6.043-4.794a1.369 1.369 0 0 1 1.266-.21l7.35 2.397s1.073.525.537 1.575c-.537 1.05-1.61.525-1.61.525l-3.22-1.05"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default DonatedIcon