import React from 'react';

type Props = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: string;
  imageHeight: string;
  imageClassName: string;
};

export default function ProductItem({
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageClassName,
}: Props) {
  return (
    <div className="flex flex-col items-center p-5 text-center">
      <div>
        <img
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={imageClassName}
        />
      </div>
      <div className="mt-2 font-kghappy text-[12px] font-bold">
        <div>{title}</div>
        <div className="mt-[5px] text-sky-250">per 100g</div>
      </div>
    </div>
  );
}
