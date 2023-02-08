import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBatery(
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
        d="M17.215 18.6c0 .76-.168 1.297-.518 1.636-.347.338-.888.5-1.653.5H9.449c-.765 0-1.309-.162-1.653-.5-.35-.339-.518-.877-.518-1.637V7.566c0-.74.168-1.269.52-1.616.353-.353.894-.524 1.651-.524h5.598c.768 0 1.309.168 1.656.51.347.344.515.876.515 1.63L17.215 18.6ZM10.792 3.712c0-.125.014-.287.088-.358.074-.074.242-.091.368-.091h2.182c.106 0 .296.01.367.085.077.074.089.259.089.364v.453h-3.094v-.453Zm6.816 1.332c-.578-.57-1.38-.85-2.442-.874v-.458c0-.53-.154-.95-.46-1.255C14.4 2.154 13.97 2 13.43 2h-2.182c-.538 0-.968.157-1.275.464-.308.304-.461.723-.461 1.25v.452h-.063c-1.115 0-1.955.293-2.561.896C6.29 5.657 6 6.476 6 7.566V18.6c0 1.116.293 1.944.896 2.533.598.583 1.435.868 2.556.868h5.598c1.12 0 1.957-.285 2.555-.868.603-.592.896-1.42.896-2.533V7.566c-.005-1.104-.296-1.93-.893-2.521Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBatery);
export default ForwardRef;
