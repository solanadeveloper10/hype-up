"use client";

import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay as SwiperAutoplay } from "swiper/modules";
import { Swiper } from "../Swiper";

export const Autoplay = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box>
      <Swiper
        modules={[SwiperAutoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        slidesPerView={isMobile ? 3 : 8}
      >
        <SwiperSlide>
          <Grid container flexDirection='column' gap={2}>
            <Box sx={{ background: "#f99", height: 200 }}>Slide 1</Box>
            <Typography textAlign='center'>Hiking</Typography>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "#9f9", height: 200 }}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "#99f", height: 200 }}>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "#f99", height: 200 }}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "#9f9", height: 200 }}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "#99f", height: 200 }}>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "#f99", height: 200 }}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "#9f9", height: 200 }}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "#99f", height: 200 }}>Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
