import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, IContact, getImageURL } from "@encacap-group/types/dist/re";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { IconPhoneRing } from "../Icon";

interface ContactProps {
  data: IContact;
  isShowTitle?: boolean;
}

const Contact = ({ data, isShowTitle = true }: ContactProps) => (
  <div className="rounded-lg px-4 ring-2 ring-gray-200 md:px-5">
    {isShowTitle && (
      <div className="hidden cursor-pointer items-center justify-between border-b-2 border-gray-200 py-4 md:flex md:py-5 md:font-semibold">
        Liên hệ ngay
      </div>
    )}
    <div
      className={twMerge(
        "flex flex-col items-center justify-center py-8 md:py-6",
        !isShowTitle && "md:flex-row md:space-x-6"
      )}
    >
      <div
        className={twMerge("relative h-32 w-32 rounded-full bg-gray-200", !isShowTitle && "md:h-20 md:w-20")}
      >
        <Image
          src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.SMALL)}
          alt={data.name}
          fill
          className="rounded-full object-cover object-center"
        />
      </div>
      <div className="mb-5 mt-4 flex-1">
        <div className="font-semibold">{data.name}</div>
        {!isShowTitle && (
          <div className="mt-1 hidden text-sm md:block">
            <span className="font-semibold">Điện thoại:</span>
            <span className="ml-2">{data.phone}</span>
          </div>
        )}
      </div>
      <div className="flex cursor-pointer items-center justify-center space-x-4 rounded-full bg-gray-200 px-6 py-3 duration-100 hover:bg-encacap-main hover:text-white">
        <IconPhoneRing className="w-5" />
        <span className={twMerge("ml-2", !isShowTitle && "md:hidden")}>{data.phone}</span>
      </div>
    </div>
  </div>
);

export default Contact;
