import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMobile(
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
        d="M15.492 22H8.508c-1.179 0-2.038-.27-2.626-.825-.594-.56-.881-1.386-.881-2.518V5.343c0-1.104.287-1.915.878-2.487C6.475 2.282 7.334 2 8.508 2h6.985c1.182 0 2.041.273 2.632.84.591.565.875 1.382.875 2.503v13.314c0 1.133-.29 1.957-.88 2.518-.592.555-1.448.825-2.628.825ZM8.508 3.138c-1.641 0-2.313.64-2.313 2.205v13.314c0 1.608.627 2.205 2.313 2.205h6.986c1.686 0 2.313-.597 2.313-2.205V5.343c0-.805-.173-1.363-.525-1.701-.353-.339-.94-.504-1.788-.504H8.506Z"
        fill="currentColor"
      />
      <path
        d="M12 17.647c-.537 0-.887.27-.887.848 0 .279.081.484.224.623.155.15.382.225.663.225.28 0 .508-.074.663-.225.143-.14.224-.347.224-.623-.003-.578-.35-.848-.887-.848Z"
        fill="currentColor"
      />
      <path
        d="M12 19.63c-.364 0-.669-.108-.875-.31-.206-.202-.307-.478-.307-.822 0-.709.442-1.132 1.185-1.132.743 0 1.182.424 1.182 1.132 0 .347-.104.623-.307.822-.203.2-.514.31-.878.31Zm0-1.695c-.406 0-.588.173-.588.563 0 .193.048.336.137.424.09.088.245.14.448.14s.355-.046.448-.14c.092-.094.137-.233.137-.424.003-.39-.176-.566-.582-.563Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMobile);
export default ForwardRef;
