import * as React from "react"
import Svg, { Path } from 'react-native-svg';
//https://react-svgr.com/playground/

const HomeIcon = (props) => {
    return(
        <Svg
        width={28}
        height={29}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
            <Path
                d="M14.604 3.377a.989.989 0 0 0-1.146 0L3.387 10.718a1.847 1.847 0 0 0-.744 1.75l1.619 11.524a2.31 2.31 0 0 0 2.31 1.951h14.875a2.31 2.31 0 0 0 2.31-1.951l1.618-11.533a1.846 1.846 0 0 0-.743-1.75L14.604 3.377Z"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="M14 20.693a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
        </Svg>
    )
}

export default HomeIcon