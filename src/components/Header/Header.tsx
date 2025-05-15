"use client";
import { HEADER_HEIGHT, links } from "@/constants";
import { AppBar, Container, Grid, IconButton, Link } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        height: HEADER_HEIGHT,
        backgroundColor: "black",
      }}
    >
      <Container>
        <Grid
          height='100%'
          container
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid height={80} width={140} position='relative'>
            <Image
              src='/logo2.png'
              alt='logo'
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid sx={{ display: { xs: "none", md: "block" } }}>
            <Grid container gap={3}>
              {links.map(({ src, label }) => (
                <Grid key={label}>
                  <Link href={src} target='_blank'>
                    {label}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <Menu size={24} color='white' />
            </IconButton>
          </Grid>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key='mobileMenu'
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className='fixed top-0 left-0 w-full h-full bg-black z-50 px-6'
              >
                <IconButton
                  onClick={() => setIsOpen(false)}
                  sx={{ position: "absolute", top: 16, right: 16 }}
                >
                  <X size={24} color='white' />
                </IconButton>
                <Grid container gap={3} flexDirection='column' px={4} mt={12}>
                  {links.map(({ src, label }) => (
                    <Grid key={label}>
                      <Link href={src} target='_blank'>
                        {label}
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            )}
          </AnimatePresence>
        </Grid>
      </Container>
    </AppBar>
  );
};
