import React from 'react';

export default function C8(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="card" face="8C" height="3.5in" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="2.5in" {...props}>
      <defs>
        <symbol id="SC8" viewBox="-600 -600 1200 1200" preserveAspectRatio="xMinYMid">
          <path d="M30 150C35 385 85 400 130 500L-130 500C-85 400 -35 385 -30 150A10 10 0 0 0 -50 150A210 210 0 1 1 -124 -51A10 10 0 0 0 -110 -65A230 230 0 1 1 110 -65A10 10 0 0 0 124 -51A210 210 0 1 1 50 150A10 10 0 0 0 30 150Z" fill="black" />
        </symbol>
        <symbol id="VC8" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
          <path d="M-1 -50A205 205 0 1 1 1 -50L-1 -50A255 255 0 1 0 1 -50Z" stroke="black" strokeWidth={80} strokeLinecap="square" strokeMiterlimit="1.5" fill="none" />
        </symbol>
      </defs>
      <rect width={239} height={335} x="-119.5" y="-167.5" rx={12} ry={12} fill="white" stroke="black" />
      <use xlinkHref="#VC8" height={70} width={70} x={-122} y={-156} />
      <use xlinkHref="#SC8" height="58.558" width="58.558" x="-116.279" y={-81} />
      <use xlinkHref="#SC8" height={40} width={40} x="-59.668" y="-107.718" />
      <use xlinkHref="#SC8" height={40} width={40} x="19.668" y="-107.718" />
      <use xlinkHref="#SC8" height={40} width={40} x={-20} y="-63.859" />
      <use xlinkHref="#SC8" height={40} width={40} x="-59.668" y={-20} />
      <use xlinkHref="#SC8" height={40} width={40} x="19.668" y={-20} />
      <g transform="rotate(180)">
        <use xlinkHref="#VC8" height={70} width={70} x={-122} y={-156} />
        <use xlinkHref="#SC8" height="58.558" width="58.558" x="-116.279" y={-81} />
        <use xlinkHref="#SC8" height={40} width={40} x="-59.668" y="-107.718" />
        <use xlinkHref="#SC8" height={40} width={40} x="19.668" y="-107.718" />
        <use xlinkHref="#SC8" height={40} width={40} x={-20} y="-63.859" />
      </g>
    </svg>
  );
}
