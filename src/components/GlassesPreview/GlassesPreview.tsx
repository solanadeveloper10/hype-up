"use client";
import { useRef, FC } from "react";
import gsap from "gsap";
import { Box, Button, useMediaQuery } from "@mui/material";
import Spline from "@splinetool/react-spline";
import { useTheme } from "@mui/material/styles";

export const GlassesPreview: FC<{ onClose: () => void }> = ({ onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose,
    });

    tl.to(
      containerRef.current,
      {
        scale: 2.5,
        rotationY: 20,
        rotationX: -10,
        opacity: 0,
        duration: 1.7,
        ease: "back.in",
      },
      0
    ).to(
      buttonRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.in",
      },
      0
    );
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Animated particles background */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at center, 
              ${theme.palette.primary.main}33 0%, 
              transparent 70%
            )
          `,
          animation: "pulse 8s infinite alternate",
          "@keyframes pulse": {
            "0%": { transform: "scale(1)", opacity: 0.3 },
            "100%": { transform: "scale(1.2)", opacity: 0.6 },
          },
        }}
      />

      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Spline
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          scene={
            isMobile
              ? "https://prod.spline.design/xRPAz1l8C5Tw6ZPm/scene.splinecode"
              : "https://prod.spline.design/WFL75n-HY3HuD-Rb/scene.splinecode"
          }
        />
      </Box>

      <Button
        ref={buttonRef}
        variant='contained'
        onClick={handleClose}
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10000,
          background: "linear-gradient(45deg, #4CAF50 0%, #2E7D32 100%)",
          color: "white",
          fontSize: "1.2rem",
          padding: "12px 36px",
          borderRadius: 3,
          boxShadow: `
      0 0 15px rgba(30, 230, 37, 0.6),
      inset 0 1px 1px rgba(255, 255, 255, 0.2)
    `,
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontWeight: "bold",
          "&:hover": {
            background:
              "linear-gradient(45deg,rgb(13, 233, 24) 0%,rgb(15, 183, 23) 100%)",
            boxShadow: "0 0 25px rgba(18, 224, 25, 0.8)",
            transform: "translateX(-50%) scale(1.05)",
          },
          "&:active": {
            transform: "translateX(-50%) scale(0.98)",
          },
          transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
        }}
      >
        ENTER EXPERIENCE
      </Button>
    </Box>
  );
};
