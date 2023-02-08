import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgChevronLeft(
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
        d="M16.882 2a1.108 1.108 0 0 1 .758 1.927l-8.868 8.146 8.862 7.99c.456.42.489 1.114.073 1.572a1.12 1.12 0 0 1-1.551.1c-.009-.01-.018-.015-.026-.023l-9.764-8.808A1.097 1.097 0 0 1 6 12.087c-.003-.31.126-.609.357-.822l9.767-8.97c.204-.19.475-.296.758-.296Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgChevronLeft);
export default ForwardRef;
