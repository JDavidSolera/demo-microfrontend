import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgReload(
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
        d="M14.63 8.737a.577.577 0 0 0 .53.33h.034l5.903-.341a.568.568 0 0 0 .543-.524L22 2.596a.562.562 0 0 0-.339-.547.6.6 0 0 0-.646.111l-2.612 2.488a10.274 10.274 0 0 0-6.31-2.155C6.525 2.493 2 6.867 2 12.246 2 17.626 6.525 22 12.09 22c4.189 0 7.988-2.55 9.454-6.347a.831.831 0 0 0-.487-1.07l-.026-.008a.88.88 0 0 0-1.118.492c-1.213 3.142-4.357 5.254-7.824 5.254-4.605.002-8.35-3.62-8.35-8.075 0-4.454 3.745-8.077 8.35-8.077 1.847 0 3.617.584 5.069 1.657L14.75 8.11a.543.543 0 0 0-.12.626Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgReload);
export default ForwardRef;
