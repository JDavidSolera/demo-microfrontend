import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMobileLight(
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
        d="M15.788 22H8.212c-1.096 0-1.888-.242-2.417-.743C5.26 20.753 5 19.993 5 18.939V5.061c0-1.025.26-1.774.792-2.287.54-.52 1.333-.774 2.42-.774h7.576c1.1 0 1.891.248 2.423.757.532.51.789 1.262.789 2.304v13.878c0 1.054-.26 1.811-.795 2.318-.529.501-1.32.743-2.417.743ZM8.212 2.57c-.92 0-1.571.196-1.996.603-.418.401-.621 1.02-.621 1.888v13.878c0 1.771.759 2.492 2.614 2.492h7.576c1.858 0 2.614-.72 2.614-2.492V5.061c0-.886-.2-1.51-.612-1.902-.413-.393-1.067-.59-2-.59H8.213Z"
        fill="currentColor"
      />
      <path
        d="M12.008 17.926c-.538 0-.888.27-.888.848 0 .28.08.484.224.624.155.15.383.225.664.225.28 0 .508-.074.663-.225.143-.14.221-.345.221-.624 0-.578-.347-.848-.884-.848Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMobileLight);
export default ForwardRef;
