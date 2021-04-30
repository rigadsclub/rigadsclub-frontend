import React from "react";

export default function KaggleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" {...props}><path fill={props.color || '#20BEFF'} d="M12.55 15.906c-.015.062-.078.094-.187.094H10.27a.422.422 0 01-.328-.165L6.49 11.442l-.965.916v3.407c0 .157-.078.235-.235.235H3.67c-.158 0-.236-.078-.236-.235V.235C3.434.08 3.512 0 3.67 0h1.62c.157 0 .235.08.235.235v9.562L9.66 5.615c.11-.11.22-.164.33-.164h2.16c.095 0 .157.04.19.12.03.1.023.17-.024.21l-4.37 4.23 4.557 5.67c.063.07.078.14.047.24" fillRule="nonzero"/></svg>
    )
}