import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCloud(
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
        d="M16.54 19H6.072A4.078 4.078 0 0 1 2 14.928c0-.909.315-1.779.912-2.516a4.26 4.26 0 0 1 2.054-1.401c.053-1.635.63-3.124 1.64-4.21C7.685 5.639 9.199 5 10.865 5a6.252 6.252 0 0 1 5.62 3.526h.06c2.89 0 5.239 2.35 5.239 5.24S19.427 19 16.54 19ZM10.862 6.123c-.69 0-1.343.13-1.937.385a4.422 4.422 0 0 0-1.497 1.058c-.866.935-1.342 2.243-1.342 3.69 0 .278-.13.644-.743.816a3.145 3.145 0 0 0-1.559 1.047c-.298.371-.658.99-.658 1.809a2.95 2.95 0 0 0 2.946 2.946H16.54a4.12 4.12 0 0 0 4.114-4.114 4.12 4.12 0 0 0-4.282-4.108c-.043.002-.082.002-.124.005-.152.006-.53-.033-.715-.503l-.003-.009a5.121 5.121 0 0 0-4.668-3.022Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCloud);
export default ForwardRef;
