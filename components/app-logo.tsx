// app logo component

import Image from "next/image";

export function FarsiUILogo() {
  return (
    <div className="flex">
      <Image
        src="/farsi-ui.png"
        alt="فارسی یو آی Logo"
        width={120}
        height={40}
        className=""
      />
    </div>
  )
}
