import React from "react";

const HeartIcon = (props) => {
  if (props?.love) {
    return (
      <svg
        width={11}
        height={9}
        viewBox="0 0 11 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.6393 0C1.91349 0 1.26686 0.303519 0.778592 0.778592C0.303519 1.25367 0 1.90029 0 2.6393C0 3.3651 0.303519 4.01173 0.778592 4.5L5.27859 9L9.77859 4.5C10.2537 4.02493 10.5572 3.3783 10.5572 2.6393C10.5572 1.91349 10.2537 1.26686 9.77859 0.778592C9.30352 0.303519 8.65689 0 7.91789 0C7.19208 0 6.54545 0.303519 6.05718 0.778592C5.58211 1.25367 5.27859 1.90029 5.27859 2.6393C5.27859 1.91349 4.97507 1.26686 4.5 0.778592C4.02493 0.303519 3.3783 0 2.6393 0Z"
          fill="#E99F9F"
        />
      </svg>
    );
  }
  return (
    <svg
      width={13}
      height={12}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.25 0C2.35625 0 1.56 0.37375 0.95875 0.95875C0.37375 1.54375 0 2.34 0 3.25C0 4.14375 0.37375 4.94 0.95875 5.54125L6.5 11.0825L12.0413 5.54125C12.6262 4.95625 13 4.16 13 3.25C13 2.35625 12.6262 1.56 12.0413 0.95875C11.4563 0.37375 10.66 0 9.75 0C8.85625 0 8.06 0.37375 7.45875 0.95875C6.87375 1.54375 6.5 2.34 6.5 3.25C6.5 2.35625 6.12625 1.56 5.54125 0.95875C4.95625 0.37375 4.16 0 3.25 0Z"
        fill="#A25F60"
      />
    </svg>
  );
};

export default HeartIcon;