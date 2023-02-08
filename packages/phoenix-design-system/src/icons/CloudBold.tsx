import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCloudBold(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.072 19H16.54c2.887 0 5.243-2.344 5.243-5.234s-2.35-5.24-5.24-5.24h-.059A6.252 6.252 0 0 0 10.864 5c-1.666 0-3.18.639-4.257 1.801-1.01 1.086-1.588 2.575-1.641 4.21a4.26 4.26 0 0 0-2.054 1.401A3.969 3.969 0 0 0 2 14.928 4.078 4.078 0 0 0 6.072 19Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCloudBold);
export default ForwardRef;
