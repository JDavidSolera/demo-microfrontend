import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSettingsBold(
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
        d="M21 10.238h-1.882a7.477 7.477 0 0 0-.664-2.145L19.847 6.7a1.015 1.015 0 0 0 0-1.43l-1.12-1.116a1.014 1.014 0 0 0-1.43 0l-1.392 1.393a7.43 7.43 0 0 0-2.145-.664V2.997A.998.998 0 0 0 12.763 2h-1.53a.998.998 0 0 0-.996.997v1.886a7.477 7.477 0 0 0-2.145.663L6.7 4.155a1.014 1.014 0 0 0-1.43 0L4.153 5.27a1.015 1.015 0 0 0 0 1.43l1.39 1.39c-.322.57-.552 1.49-.66 2.148H2.996a.998.998 0 0 0-.997.997v1.53c0 .55.447.997.997.997h1.885c.109.66.34 1.578.661 2.148l-1.39 1.39a1.015 1.015 0 0 0 0 1.43l1.117 1.116a1.014 1.014 0 0 0 1.43 0l1.392-1.393c.63.314 1.35.536 2.145.664v1.886c0 .55.447.997.997.997h1.53c.549 0 .996-.447.996-.997v-1.886a7.431 7.431 0 0 0 2.145-.664l1.393 1.393a1.014 1.014 0 0 0 1.43 0l1.116-1.116a1.014 1.014 0 0 0 0-1.43l-1.39-1.39c.313-.63.535-1.35.664-2.145h1.885c.55 0 .997-.447.997-.997v-1.53c-.003-.553-.447-1-1-1Zm-9-1.014c1.894 0 2.777.883 2.777 2.777 0 1.895-.883 2.778-2.777 2.778-1.894 0-2.777-.883-2.777-2.778 0-1.894.883-2.777 2.777-2.777Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgSettingsBold);
export default ForwardRef;
