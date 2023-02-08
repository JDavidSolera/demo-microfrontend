import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgReloadLight(
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.654 2.047a.625.625 0 0 0-.657.114l-2.863 2.715a10.038 10.038 0 0 0-6.172-2.05c-5.037-.008-9.283 3.615-9.89 8.435-.605 4.821 2.627 9.317 7.52 10.464 4.89 1.147 9.902-1.414 11.664-5.965a.561.561 0 0 0-.342-.725.607.607 0 0 0-.452.011.577.577 0 0 0-.31.319c-1.33 3.412-4.778 5.617-8.555 5.47-3.776-.149-7.028-2.619-8.061-6.122-1.036-3.506.378-7.256 3.505-9.3 3.128-2.043 7.265-1.923 10.26.302l-2.642 2.513a.549.549 0 0 0-.136.62.592.592 0 0 0 .546.353l6.01-.361a.578.578 0 0 0 .552-.532l.365-5.658a.583.583 0 0 0-.342-.603Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgReloadLight);
export default ForwardRef;
