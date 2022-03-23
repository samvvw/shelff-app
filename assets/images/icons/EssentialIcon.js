import * as React from "react"
import Svg, { Path } from 'react-native-svg';   

const EssentialIcon = (props) => {
    return(
        <Svg
            width={28}
            height={29}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
        <Path
            d="M13.947 25.007c.269-.03.522-.14.727-.315 2.896-2.073 8.076-7.28 9.476-9.704 1.75-3.08 2.135-8.994-2.625-10.622a6.125 6.125 0 0 0-6.816 1.978 1.041 1.041 0 0 1-.71.35 1.041 1.041 0 0 1-.708-.35 6.125 6.125 0 0 0-6.834-1.978c-4.707 1.628-4.4 7.578-2.607 10.622 1.4 2.424 6.58 7.63 9.476 9.704.205.176.458.285.726.315h-.105Z"
            stroke={props.color}
            strokeWidth={2}
            strokeMiterlimit={10}
        />
        </Svg>
    )
}

export default EssentialIcon