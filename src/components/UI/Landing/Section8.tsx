import { InfoTile } from "@/components";
import { Box, Stack, Typography } from "@mui/material";

const Section8 = () => {
    const heroStyle = {};
    return (
        <Box
            sx={{
                backgroundImage: `url('/counters.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "top",
                alignItems: "center",
                color: "white",
                textShadow: "0px 4px 4px 0px #00000040",
            }}
            textAlign="left"
            p={10}
            rowGap={5}
        >
            <Stack spacing={1} direction="row">
                <InfoTile
                    text="9000"
                    subtext="HAPPY CUSTOMERS"
                    variant="long"
                />
                <InfoTile text="12" subtext="LUXARY LIMOS" variant="long" />
                <InfoTile text="900K" subtext="MILES" variant="long" />
                <InfoTile
                    text="30"
                    subtext="QUALIFIED CHAUFFEURS"
                    variant="long"
                />
            </Stack>
            <Typography
                sx={{
                    backgroundColor: "#000000b7",
                }}
                variant="h4"
                fontSize="18px"
                letterSpacing={10}
                px={28}
                py={4}
            >
                -ESTABLISHED 2001-
            </Typography>
        </Box>
    );
};

export default Section8;
