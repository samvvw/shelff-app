import * as React from "react"
import Svg, { Path, Circle } from 'react-native-svg';   

const RemoveIcon = (props) => {
    return(
        <Svg
            width={26}
            height={26}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.643 13.928a.928.928 0 1 0 0-1.857H8.357a.929.929 0 1 0 0 1.857h9.286Z"
                fill="#fff"
            />
            <Circle cx={13} cy={13} r={12.5} stroke="#fff" />
      </Svg>
    )
}

export default RemoveIcon