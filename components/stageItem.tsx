import React, { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageWidth: string;
  imageHeight: string;
  imageClassName: string;
};

export default function StageItem({
  title,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageClassName,
}: Props) {
  return (
    <div className="flex items-center p-5">
      <div className="min-w-[50px] flex flex-col items-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={imageClassName}
        />
      </div>
      <div className="min-w-[100px] ml-[20px] font-kghappy text-[12px] font-bold text-left">
        <div>{title}</div>
        <div className="mt-[5px] text-sky-250">{description}</div>
      </div>
    </div>
  );
}
