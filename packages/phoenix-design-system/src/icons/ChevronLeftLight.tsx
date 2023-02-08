import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgChevronLeftLight(
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
        d="M17.183 2a.801.801 0 0 1 .589.248.768.768 0 0 1 0 1.093l-9.808 8.738 9.758 8.581a.758.758 0 0 1 .05 1.09.816.816 0 0 1-1.127.046L6.25 12.656a.77.77 0 0 1-.032-1.107l.032-.031 10.393-9.324a.846.846 0 0 1 .54-.194Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgChevronLeftLight);
export default ForwardRef;
