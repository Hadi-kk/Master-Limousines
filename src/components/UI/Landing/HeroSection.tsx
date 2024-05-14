"use client";
import { Box, Dialog, DialogContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import banner1 from "@/assets/svgs/banner1.svg";

import { Bar } from "@/components";

const HeroSection = () => {
  const heroStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    color: "white",
    textShadow: "0px 4px 4px 0px #00000040",
    boxShadow: "inset -40em 0em 15em -10em rgba(0, 0, 0, 0.76)",
  };
  return (
    <Grid
      container
      style={heroStyle}
      textAlign="right"
      pr={0.5}
      sx={{ postion: "relative" }}
    >
      <Grid
        item
        container
        direction="column"
        display="flex"
        alignItems="end"
        xs={12}
        md={4}
        p={2}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h1">SAN DIEGO LIMOUSINE SERVICE</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" maxWidth={400}>
            Offering luxury transportation options for any occasion. We have a
            vehicle to fit your needs, from stylish limousines to spacious party
            buses. Our professional chauffeurs have local knowledge and provide
            top-notch service to make your experience unforgettable.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" maxWidth={400}>
            So choose us for an elegant and memorable transportation experience.
          </Typography>
        </Grid>
      </Grid>
      <Bar count={24} filled={0} />
      <Image
        src={banner1}
        alt="hero"
        fill
        priority
        quality={100}
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      {/* <Dialog open={true}>
                <DialogContent sx={{ height: 900 }}>
                    <Box p={8}>
                        <Typography variant="h4" gutterBottom pb={2}>
                            Hello folks at MasterLimo!
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#25b39b"
                            gutterBottom
                            pb={2}
                            fontSize={28}
                        >
                            Do the Right thing :)
                        </Typography>
                        <Typography variant="body1" fontSize={20} pb={4}>
                            Hello MasterLimo, kindly pay your dues to the
                            developer, not sure if the delay is from you or the
                            middle guy in between us (I think it might be the
                            later), but the site is almost completed, and I did
                            that on pure trust and no money I think its fair
                            that I demand my peice now. I dont like this
                            approach as I value our clients and their business
                            but one can only do so much work for free, I hope
                            you understand
                        </Typography>

                        <Typography variant="body1" fontSize={20}>
                            lets connect and figure this out you can reach me at
                            :: hadinioh@gmail.com
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog> */}
    </Grid>
  );
};

export default HeroSection;
