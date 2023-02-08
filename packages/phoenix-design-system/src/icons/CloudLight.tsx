import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCloudLight(
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
        d="M16.864 19H5.945A3.95 3.95 0 0 1 2 15.055c0-.878.305-1.72.884-2.435a4.125 4.125 0 0 1 2.067-1.383.634.634 0 0 0 .14-.05C5.106 7.6 7.564 5 10.942 5a6.219 6.219 0 0 1 5.667 3.675l.006.011.034-.003a5.169 5.169 0 0 1 5.38 5.157A5.167 5.167 0 0 1 16.863 19ZM10.943 5.57c-1.494 0-2.842.567-3.803 1.6-.96 1.031-1.482 2.468-1.482 4.053 0 .405-.417.525-.554.562a3.552 3.552 0 0 0-1.778 1.194 3.277 3.277 0 0 0-.756 2.076 3.379 3.379 0 0 0 3.375 3.375h10.919a4.599 4.599 0 0 0 4.592-4.593 4.596 4.596 0 0 0-4.59-4.592c-.062 0-.122.003-.19.005-.043.003-.083.003-.123.006-.21.006-.365-.105-.456-.333-.003-.006-.003-.012-.006-.017a5.653 5.653 0 0 0-5.148-3.336Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCloudLight);
export default ForwardRef;
