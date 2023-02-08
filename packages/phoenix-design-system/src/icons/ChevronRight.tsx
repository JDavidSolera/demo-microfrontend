import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgChevronRight(
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
        d="M7.118 22a1.108 1.108 0 0 1-.758-1.927l8.868-8.147-8.862-7.99a1.108 1.108 0 0 1-.073-1.571 1.12 1.12 0 0 1 1.551-.1c.009.009.018.014.026.023l9.764 8.807c.234.211.366.507.366.817.003.31-.126.61-.357.822l-9.767 8.97c-.204.19-.475.296-.758.296Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgChevronRight);
export default ForwardRef;
