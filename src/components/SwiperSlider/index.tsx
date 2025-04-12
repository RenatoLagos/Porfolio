import React, { type FC, useMemo } from "react";

import { SwiperSlide } from "swiper/react";
import type { SwiperOptions, SwiperModule } from "swiper/types";
import * as S from "./styled";

type SwiperSliderProps = {
    children: React.ReactNode;
    modules: SwiperModule[] | undefined;
    options: SwiperOptions;
};

/**
 *  SwiperSlider based on the Swiper
 * @url https://swiperjs.com/react
 */
export const SwiperSlider: FC<SwiperSliderProps> = ({
    children,
    options,
    modules,
    ...rest
}) => {
    /**
     * If there is no children return null
     */
    if (!children) {
        return null;
    }

    /**
     * List of the children is unknown, so to keep better performance
     * memorize the array of children
     */
    const memoChildren = useMemo(
        () =>
            React.Children.map(children, (child, index) => (
                <SwiperSlide key={index} className="splide__slide">
                    {child}
                </SwiperSlide>
            )),
        [children]
    );

    return (
        <S.SwiperStyled
            // default values for the slider
            modules={modules}
            slidesPerView={2}
            speed={9000}
            spaceBetween={90}
            {...options}
            {...rest}
        >
            {memoChildren}
        </S.SwiperStyled>
    );
};
