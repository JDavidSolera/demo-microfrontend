import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSpinnerLitte(
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM3.667 12a8.333 8.333 0 1 0 16.666 0 8.333 8.333 0 0 0-16.666 0Z"
        fill="url(#spinner-litte_svg__a)"
      />
      <circle cx={21.167} cy={12} r={0.833} fill="#fff" />
      <defs>
        <radialGradient
          id="spinner-litte_svg__a"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(10 0 0 10 12 12)"
        >
          <stop stopColor="#80CEF9" />
          <stop offset={0.5} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" />
        </radialGradient>
      </defs>
    </svg>
  );
}

const ForwardRef = forwardRef(SvgSpinnerLitte);
export default ForwardRef;
