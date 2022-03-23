import * as React from "react"
import Svg, { Path } from 'react-native-svg';

const ListingIcon = (props) => {
    return(
        <Svg
            width={28}
            height={29}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M20.563 12.818a4.813 4.813 0 1 0 0-9.625 4.813 4.813 0 0 0 0 9.625Z"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="M7 3.193h.875a4.375 4.375 0 0 1 4.375 4.375v5.25H7a4.375 4.375 0 0 1-4.375-4.375v-.875A4.375 4.375 0 0 1 7 3.193v0ZM7 16.318h5.25v5.25a4.376 4.376 0 0 1-4.375 4.375H7a4.375 4.375 0 0 1-4.375-4.375v-.875A4.375 4.375 0 0 1 7 16.318v0ZM21.07 25.952h-.875a4.375 4.375 0 0 1-4.375-4.375v-5.25h5.25a4.375 4.375 0 0 1 4.375 4.375v.875a4.375 4.375 0 0 1-4.375 4.375v0Z"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ListingIcon