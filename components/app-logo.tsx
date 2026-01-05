// app logo component

import Image from "next/image";

export function FarsiUILogo() {
  return (
    <div className="flex size-8">
      <Image
        src="/icon-dark-32x32.png"
        alt="فارسی یو آی Logo"
        width={36}
        height={36}
        className="h-4 w-4 sm:h-5 sm:w-5"
      />
    </div>
  )
}