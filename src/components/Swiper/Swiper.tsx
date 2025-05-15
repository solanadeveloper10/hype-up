"use client";
import { Box } from "@mui/material";
import { FC, useState } from "react";
import { Swiper as SwiperJs, SwiperProps } from "swiper/react";

export const Swiper: FC<SwiperProps> = ({ children, ...rest }) => {
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  return (
    <Box
      sx={{
        ".swiper": {
          visibility: "hidden",
          opacity: 0,
        },

        ".swiper.swiper-initialized": {
          visibility: "visible",
          opacity: 1,
          transition: "opacity 0.3s ease",
        },
        opacity: isSwiperReady ? 1 : 0,
        transition: "opacity 0.3s",
      }}
    >
      <SwiperJs onInit={() => setIsSwiperReady(true)} {...rest}>
        {children}
      </SwiperJs>
    </Box>
  );
};
