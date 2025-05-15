import { FOOTER_HEIGHT } from "@/constants";
import { Container, Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Container>
      <Box
        height={{ xs: "initial", md: FOOTER_HEIGHT }}
        borderTop={1}
        borderColor='#fff'
      >
        <Typography my={3}>
          2021-2024 ANIMATS EUROPE LIMITED, Flat 6, Campden House, Harben Road,
          London, United Kingdom, NW6 4RN
        </Typography>
      </Box>
    </Container>
  );
};
