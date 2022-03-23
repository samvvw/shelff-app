import * as React from "react"
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = (props) => {
    return(
        <Svg
            width={28}
            height={29}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M14 13.693a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="M18.375 17.193s7 0 7 8.75H2.625c0-8.75 7-8.75 7-8.75h8.75Z"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ProfileIcon