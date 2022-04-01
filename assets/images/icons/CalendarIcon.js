import * as React from "react"
import Svg, { Path } from 'react-native-svg';   

const CalendarIcon = (props) => {
    return(
        <Svg
            width={18}
            height={18}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15 2.25h-.75V.75h-1.5v1.5h-7.5V.75h-1.5v1.5H3c-.825 0-1.5.675-1.5 1.5v12c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-12c0-.825-.675-1.5-1.5-1.5Zm0 13.5H3V7.5h12v8.25ZM15 6H3V3.75h12V6Z"
                fill={props.color}
            />
        </Svg>
    )
}

export default CalendarIcon