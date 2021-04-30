import React from 'react';

export default function ClubLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="151" height="110" {...props}><g fill="none" fill-rule="evenodd" font-size="24"><text fill="#FFF" font-family="PTMono-Regular, PT Mono"><tspan x="35" y="23">RĪGA</tspan> <tspan x="35" y="50">Data </tspan> <tspan x="35" y="77">Science </tspan> <tspan x="35" y="104">Club</tspan></text><text font-family="PTMono-Bold, PT Mono" font-weight="bold"><tspan x="0" y="21" fill="#CC1757">/</tspan> <tspan x="0" y="48" fill="#AE72C1">/</tspan> <tspan x="0" y="75" fill="#A3FF3E">/</tspan> <tspan x="0" y="102" fill="#F8E71C">/</tspan></text></g></svg>
    )
}