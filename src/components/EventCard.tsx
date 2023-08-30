"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import { EventCardProps } from "@/types";

export default function EventCard(props: EventCardProps) {
    const { picture, title, description, stamp } = props;
    return (
        <Card sx={{ maxWidth: 365 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="270"
                    image={picture}
                    alt="green iguana"
                />
                <CardContent sx={{ borderLeft: "1px solid red" }}>
                    <Stack spacing={4}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            textAlign="center"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="rgba(255, 255, 255, 0.8)"
                            gutterBottom
                        >
                            {description}
                        </Typography>
                        <Typography
                            variant="body1"
                            fontSize="14px"
                            color="rgba(255, 255, 255, 0.70);"
                            textAlign="end"
                        >
                            {stamp}
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
