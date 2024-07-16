import React from "react";

export default function Icon({
  children,
  ...props
}: Readonly<React.SVGAttributes<SVGElement>>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="[&>path]:fill-inherit [&>path]:stroke-current"
      {...props}
    >
      {children}
    </svg>
  );
}
