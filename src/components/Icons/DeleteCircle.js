import React from "react";

const DeleteCircle = () => {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_414_1252)">
        <circle cx="12.5" cy="12.5" r="12.5" fill="white" />
      </g>
      <g filter="url(#filter1_i_414_1252)">
        <path
          d="M9.79618 8L8 9.79618L8.9172 10.7134L11.1847 13.0191L8.9172 15.2866L8 16.1656L9.79618 18L10.7134 17.0828L13.0191 14.7771L15.2866 17.0828L16.1656 18L18 16.1656L17.0828 15.2866L14.7771 13.0191L17.0828 10.7134L18 9.79618L16.1656 8L15.2866 8.9172L13.0191 11.1847L10.7134 8.9172L9.79618 8Z"
          fill="#A25F60"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_414_1252"
          x={0}
          y={0}
          width={25}
          height={26}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_414_1252"
          />
        </filter>
        <filter
          id="filter1_i_414_1252"
          x={8}
          y={8}
          width={10}
          height={14}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_414_1252"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DeleteCircle;
