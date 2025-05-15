"use client";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { FormEvent } from "react";

export const ContactUs = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:");
  };

  return (
    <Box>
      <Typography variant='h3' textAlign='center' color='white' mb={4}>
        Contact Us
      </Typography>
      <Box component='form' onSubmit={handleSubmit}>
        <Grid
          container
          flexDirection='column'
          gap={3}
          width='100%'
          alignItems='center'
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              name='name'
              label='Name'
              placeholder='Enter your name'
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              name='email'
              label='Email'
              placeholder='Email'
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              name='note'
              label='Note'
              placeholder='Notes'
              rows={5}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Button
              fullWidth
              variant='contained'
              sx={{
                background: "linear-gradient(45deg, #4CAF50 0%, #2E7D32 100%)",
                color: "white",
                fontSize: "1.2rem",
                padding: "12px 36px",
                boxShadow: `
                  0 0 15px rgba(30, 230, 37, 0.6),
                  inset 0 1px 1px rgba(255, 255, 255, 0.2)
                `,
                textTransform: "uppercase",
                borderRadius: 3,
                letterSpacing: "1px",
                fontWeight: "bold",
                "&:hover": {
                  background:
                    "linear-gradient(45deg,rgb(13, 233, 24) 0%,rgb(15, 183, 23) 100%)",
                  boxShadow: "0 0 25px rgba(18, 224, 25, 0.8)",
                },
                transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
              }}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
