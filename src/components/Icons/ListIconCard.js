import React from "react";

const ListIconCard = (props) => {
  const { width, height } = props;
  return (
    <svg
      width={width ?? 67}
      height={height ?? 156}
      viewBox="0 0 67 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_414_1314)">
        <rect x={11} y={16} width={32} height={116} rx={16} fill="#FFB1B1" />
      </g>
      <line
        x1={19}
        y1="72.5"
        x2={34}
        y2="72.5"
        stroke="white"
        strokeWidth={3}
      />
      <line
        x1={19}
        y1="78.5"
        x2={34}
        y2="78.5"
        stroke="white"
        strokeWidth={3}
      />
      <line
        x1={19}
        y1="66.5"
        x2={34}
        y2="66.5"
        stroke="white"
        strokeWidth={3}
      />
      <defs>
        <filter
          id="filter0_d_414_1314"
          x={-5}
          y={0}
          width={72}
          height={156}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={10} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_414_1314"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_414_1314"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ListIconCard;
