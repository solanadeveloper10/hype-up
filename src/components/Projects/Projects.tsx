"use client";
import { projects } from "@/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import "./styles.scss";
import { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const CARDS = 3;
const MAX_VISIBILITY = 3;

export const Projects = () => {
  const [active, setActive] = useState(1);

  return (
    <Box>
      <Typography variant='h3' color='white' textAlign='center' mb={4}>
        My projects
      </Typography>
      <Box className='carousel' sx={{ perspective: { xs: 200, md: 500 } }}>
        {active > 0 && (
          <button className='nav left' onClick={() => setActive((i) => i - 1)}>
            <TiChevronLeftOutline />
          </button>
        )}
        {projects.map(({ src, label1, label2 }, i) => (
          <Box
            maxWidth={{ xs: 300, md: 500 }}
            key={src}
            className='card-container'
            sx={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            <Box
              height='100%'
              key={label1}
              borderRadius={2}
              overflow='hidden'
              width='100%'
              position='relative'
            >
              <Image
                src={src}
                fill
                alt={label1}
                style={{ objectFit: "cover" }}
              />
              <Box position='absolute' bottom={0} left={0} padding={3}>
                <Typography color='white'>{label1}</Typography>
                <Typography color='white'>{label2}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
        {active < CARDS - 1 && (
          <button className='nav right' onClick={() => setActive((i) => i + 1)}>
            <TiChevronRightOutline />
          </button>
        )}
      </Box>
    </Box>
  );
};
