import "@styles/swiper.scss";

import { ProductImageDataType } from "@interfaces/dataTypes";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions, PaginationOptions } from "swiper/types";
import ProductContentSliderButton from "./ContentSliderButton";

interface ProductContentSliderProps {
  data: ProductImageDataType[];
}

const ProductContentSlider = ({ data }: ProductContentSliderProps) => {
  const pagination: PaginationOptions = {
    type: "fraction",
    horizontalClass: "product-slider-counting",
  };
  const navigation: NavigationOptions = {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button",
    disabledClass: "opacity-0",
  };

  return (
    <div className="relative aspect-video w-full">
      <ProductContentSliderButton className="pr-1 left-8 swiper-prev-button" />
      <Swiper
        pagination={pagination}
        navigation={navigation}
        modules={[Pagination, Navigation]}
        className="relative w-full mb-8 bg-gray-100 md:rounded-lg real-estate-detail-slider aspect-video"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <Image src={item.src} alt={item.src} fill className="object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ProductContentSliderButton className="pr-1 right-8 swiper-next-button rotate-180" />
    </div>
  );
};

export default ProductContentSlider;
