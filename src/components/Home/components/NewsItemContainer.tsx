import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, getImageURL } from "@encacap-group/types/dist/re";
import { ProductDataType, ProjectDataType, ServiceDataType } from "@interfaces/dataTypes";
import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HomeNewsItemContainerProps extends HTMLAttributes<HTMLDivElement> {
  data: ProductDataType | ServiceDataType | ProjectDataType;
  children: ReactNode;
  imageClassName?: string;
}

const HomeNewsItemContainer = ({ children, className, imageClassName, data }: HomeNewsItemContainerProps) => (
  <div
    className={twMerge(
      "group flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-md shadow-gray-200 duration-100 hover:shadow-gray-300",
      className
    )}
  >
    <div className={twMerge("relative aspect-video w-full flex-shrink-0", imageClassName)}>
      <Image
        src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.THUMBNAIL)}
        alt={data.name}
        fill
        sizes="100%"
        className="object-cover object-center"
      />
    </div>
    {children}
  </div>
);

export default HomeNewsItemContainer;