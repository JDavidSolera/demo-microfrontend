import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBateryLight(
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
        d="M17.615 18.741c0 .84-.196 1.438-.6 1.825-.402.387-1.014.575-1.867.575H9.35c-.854 0-1.466-.188-1.867-.575-.404-.39-.6-.985-.6-1.825V7.471c0-.818.196-1.404.6-1.802.41-.402 1.019-.598 1.867-.598h5.798c.856 0 1.468.19 1.87.583.4.393.597.985.597 1.816v11.271ZM10.52 3.534c0-.364.12-.48.156-.518.04-.04.16-.156.538-.156h2.26c.387 0 .501.113.54.15.038.037.155.151.155.524v.677h-3.65v-.677Zm7.124 1.514c-.578-.563-1.395-.837-2.5-.837h-.093v-.677c0-.484-.14-.862-.413-1.13-.273-.267-.666-.404-1.164-.404h-2.26c-.498 0-.888.14-1.167.41-.273.27-.412.649-.412 1.121v.678H9.35c-1.096 0-1.91.279-2.496.853C6.279 5.63 6 6.417 6 7.467v11.271c0 1.082.285 1.879.862 2.437.575.555 1.39.825 2.488.825h5.798c1.098 0 1.912-.27 2.487-.825.58-.558.862-1.355.862-2.437V7.468c0-1.068-.278-1.86-.853-2.42Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBateryLight);
export default ForwardRef;
