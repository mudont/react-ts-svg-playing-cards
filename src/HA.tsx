import React from 'react';

export default function HA(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="card" face="AH" height="3.5in" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="2.5in" {...props}>
      <defs>
        <symbol id="VHA" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
          <path d="M-270 460L-110 460M-200 450L0 -460L200 450M110 460L270 460M-120 130L120 130" stroke="red" strokeWidth={80} strokeLinecap="square" strokeMiterlimit="1.5" fill="none" />
        </symbol>
        <symbol id="SHA" viewBox="-600 -600 1200 1200" preserveAspectRatio="xMinYMid">
          <path d="M0 -300C0 -400 100 -500 200 -500C300 -500 400 -400 400 -250C400 0 0 400 0 500C0 400 -400 0 -400 -250C-400 -400 -300 -500 -200 -500C-100 -500 0 -400 -0 -300Z" fill="red" />
        </symbol>
      </defs>
      <rect width={239} height={335} x="-119.5" y="-167.5" rx={12} ry={12} fill="white" stroke="black" />
      <use xlinkHref="#SHA" height={40} width={40} x={-20} y={-20} />
      <use xlinkHref="#VHA" height={70} width={70} x={-122} y={-156} />
      <use xlinkHref="#SHA" height="58.558" width="58.558" x="-116.279" y={-81} />
      <g transform="rotate(180)">
        <use xlinkHref="#VHA" height={70} width={70} x={-122} y={-156} />
        <use xlinkHref="#SHA" height="58.558" width="58.558" x="-116.279" y={-81} />
      </g>
    </svg>
  );
}
