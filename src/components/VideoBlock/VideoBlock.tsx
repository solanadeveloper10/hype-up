"use client";
import { HEADER_HEIGHT } from "@/constants";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export const VideoBlock = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        margin: "0 auto",
        aspectRatio: "16 / 9",
        maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        overflow: "hidden",
        mt: `${HEADER_HEIGHT}px`,
      }}
    >
      <ReactPlayer
        url='/hypeup.mp4'
        playing={true}
        controls={true}
        width='100%'
        height='100%'
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </Box>
  );
};
