import Image from "next/image";

import React from "react";

export const Loading = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <Image
        src="/logo.svg"
        width={120}
        height={120}
        alt="Logo"
        className="animate-pulse duration-700 rotate-180"
      />
    </div>
  );
};
