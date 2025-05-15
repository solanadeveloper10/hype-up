"use client";
import {
  Autoplay,
  AboutUs,
  Header,
  Projects,
  VideoBlock,
  ContactUs,
  Footer,
  GlassesPreview,
} from "@/components";
import { Box, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Home() {
  const [showPreview, setShowPreview] = useState(true);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showPreview && mainContentRef.current) {
      gsap.from(mainContentRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [showPreview]);

  return (
    <>
      {showPreview ? (
        <GlassesPreview onClose={() => setShowPreview(false)} />
      ) : (
        <div ref={mainContentRef}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              overflow: "hidden",
            }}
          >
            <Header />
            <Box
              component='main'
              sx={{ flexGrow: 1, overflowY: "auto", mb: 6 }}
            >
              <VideoBlock />
              <Container>
                <Box mt={4}>
                  <AboutUs />
                </Box>
                <Box mt={6}>
                  <Projects />
                </Box>
                <Box mt={8}>
                  <Autoplay />
                </Box>
                <Box mt={6}>
                  <ContactUs />
                </Box>
              </Container>
            </Box>
            <Footer />
          </Box>
        </div>
      )}
    </>
  );
}
