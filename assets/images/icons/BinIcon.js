import * as React from "react"
import Svg, { Path } from 'react-native-svg';   

const BinIcon = (props) => {
    return(
        <Svg
            width={28}
            height={28}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M22.336 13.82c.058.314.099.647.128.997.082 1.038-.035 1.534-.134 2.053-.933 4.8-5.734 9.333-7.73 9.374-1.084.023-1.055-.408-2.478-.408-1.43 0-1.424.443-2.509.426-2.403-.059-8.831-6.61-7.74-12.315C2.963 8.242 8.61 7.77 10.05 8.47c1.575.764 1.907.764 2.065.764.169 0 .49 0 2.065-.764.91-.443 3.226-.706 5.279.8 0 0 .95.64 1.534 1.808"
                stroke="#fff"
                strokeMiterlimit={10}
            />
            <Path
                d="M8.371 1.762S11.58 4.9 11.09 8.715"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16.257 2s-6.563.688-5.023 6.47c0 0 6.266-.47 5.023-6.47ZM17.622 17.12a3.757 3.757 0 0 1-3.558-.43 3.76 3.76 0 0 1-1.57-3.442"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="m15.167 16.916 1.75-2.333s.957-1.884 3.61-1.219c2.03.507 3.717-.163 4.568-1.015.508-.508 1.523-2.03 1.015-4.06-.746-2.998-2.03-2.03-2.03-2.03s-.869.443-.507 1.522c.507 1.517.548 3.302-1.99 3.302-2.537 0-4.263-1.12-6.416 1.75l-1.75 2.333"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default BinIcon