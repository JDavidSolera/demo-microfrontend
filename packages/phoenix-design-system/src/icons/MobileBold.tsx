import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMobileBold(
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
        d="M18.152 2.845C17.573 2.276 16.72 2 15.537 2H8.463C6.164 2 5 3.124 5 5.344v13.312C5 20.907 6.131 22 8.463 22h7.074C17.87 22 19 20.907 19 18.656V5.344c0-1.124-.278-1.941-.848-2.499Zm-5.271 16.48c-.21.202-.51.31-.875.31-.364 0-.669-.108-.875-.31-.206-.202-.307-.478-.307-.822 0-.709.442-1.133 1.185-1.133.743 0 1.182.424 1.182 1.133-.003.344-.107.62-.31.822Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMobileBold);
export default ForwardRef;
