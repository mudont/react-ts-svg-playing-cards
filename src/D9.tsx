import React from 'react';

export default function D9(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="card" face="9D" height="3.5in" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="2.5in" {...props}>
      <defs>
        <symbol id="SD9" viewBox="-600 -600 1200 1200" preserveAspectRatio="xMinYMid">
          <path d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z" fill="red" />
        </symbol>
        <symbol id="VD9" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
          <path d="M250 -100A250 250 0 0 1 -250 -100L-250 -210A250 250 0 0 1 250 -210L250 210A250 250 0 0 1 0 460C-150 460 -180 400 -200 375" stroke="red" strokeWidth={80} strokeLinecap="square" strokeMiterlimit="1.5" fill="none" />
        </symbol>
      </defs>
      <rect width={239} height={335} x="-119.5" y="-167.5" rx={12} ry={12} fill="white" stroke="black" />
      <use xlinkHref="#VD9" height={70} width={70} x={-122} y={-156} />
      <use xlinkHref="#SD9" height="58.558" width="58.558" x="-116.279" y={-81} />
      <use xlinkHref="#SD9" height={40} width={40} x="-59.668" y="-107.668" />
      <use xlinkHref="#SD9" height={40} width={40} x="19.668" y="-107.668" />
      <use xlinkHref="#SD9" height={40} width={40} x="-59.668" y="-49.222" />
      <use xlinkHref="#SD9" height={40} width={40} x="19.668" y="-49.222" />
      <use xlinkHref="#SD9" height={40} width={40} x={-20} y={-20} />
      <g transform="rotate(180)">
        <use xlinkHref="#VD9" height={70} width={70} x={-122} y={-156} />
        <use xlinkHref="#SD9" height="58.558" width="58.558" x="-116.279" y={-81} />
        <use xlinkHref="#SD9" height={40} width={40} x="-59.668" y="-107.668" />
        <use xlinkHref="#SD9" height={40} width={40} x="19.668" y="-107.668" />
        <use xlinkHref="#SD9" height={40} width={40} x="-59.668" y="-49.222" />
        <use xlinkHref="#SD9" height={40} width={40} x="19.668" y="-49.222" />
      </g>
    </svg>
  );
}
