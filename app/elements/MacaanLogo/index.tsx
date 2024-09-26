import Image from 'next/image';

export function MacaanLogo({ height, width }: { height: number; width: number }) {
  return (
    <Image
      src={"/icons/MacaanAi.svg"}
      alt="macaan"
      width={width}
      height={height}
    />
  );
}

export default MacaanLogo