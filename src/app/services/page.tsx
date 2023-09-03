import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const services = [
    "+ GOLD KEY CONCIERGE",
    "+ AIRPORT TRANSFERS",
    "+ EXECUTIVE GROUND TRANSPORTATION",
    "+ TIJUANA/CBX AIRPORT SERVICES",
    "+ TEMECULA WINE TOURS",
    "+ WEDDING LIMOUSINE TRANSPORTATION",
    "+ SAN DIEGO BREWERY TOURS",
    "+ CONCERT LIMO SERVICES",
    "+ MEXICO LIMOUSINE TOURS",
    "+ BACHELOR & BACHELORETTE PARTIES",
    "+ SOCIAL CASINO LIMO SERVICES",
    "+ DEL MAR RACES LIMOUSINE SERVICE",
    "+ GRADUATION LIMO SERVICES",
    "+ SPORTING EVENT TRANSPORTATION",
    "+ PROM NIGHT LIMOUSINE SERVICE",
    "+ QUINCERANERA LIMOUSINE SERVICE",
    "+ NIGHTCLUB LIMO SERVICE",
    "+ SCHOOL EVEN LIMO SERVICES",
];

const servicesDetailed = [
    {
        title: "Gold Key Concierge",
        description:
            "Masterpiece Limousine offers a premium level of service withour Gold Key Concierge Service. We go above and beyond to provide a personalized and tailored experience that caters to the specific needs and preferences of our most discerning clients. Our commitment to excellence and attention to detail make us the preferred choice for luxury ground transportation. <br /> <br /> With our Gold Key Concierge Service, you can expect nothing but the best. Our experienced team of professionals works closely with you to create a customized itinerary that meets your specific needs and preferences. We provide expert advice and recommendations on event planning, entertainment options, restaurant reservations, and more. We strive to exceed your expectations and create an unforgettable travel experience. <br /> <br /> At Masterpiece Limousine, we understand that luxury travel should be seamless and stress-free. Our Gold Key Concierge Service is available 24/7 to provide around-the-clock assistance and support. We are dedicated to providing the highest level of service to ensure that your travel experience is smooth and hassle-free. Contact us today to learn more about our Gold Key Concierge Service, and let us help you create an unforgettable travel experience.",
        picture: "./service1.svg",
        icon: "./icons/FilledBowTie.svg",
    },
    {
        title: "Airport Transfers",
        description:
            "Masterpiece Limousine offers a diverse fleet of luxury vehicles to meet your transportation needs. From our high-end luxury buses to our Executive Sprinters and Sprinter Limos, we have everything you need to travel in style. Our services include affordable luxury vehicles such as sedans, SUVs, and the exclusive H2 Hummer that can accommodate up to 14 passengers. We also offer a range of convenient pickup options, including Curbside Pickup and Meet and Greet services to ensure you get to your destination hassle-free. If you're looking for airport transportation in San Diego, we have you covered. Choose from our luxury sedans and SUV’s or the H2 limo for a truly unforgettable experience. Our top priority is your safety and comfort, and we strive to provide a touch of elegance in all our services. Experience the ultimate in luxury transportation with Masterpiece Limousine. Contact us today for all your travel needs to and from San Diego International Airport.",
        picture: "./service2.svg",
        icon: "./icons/AirportTransfers.svg",
    },
    {
        title: "Executive Ground Transportation",
        description:
            "Masterpiece Limousine is the premier provider of Executive Ground Transportation in San Diego, California. Our commitment to excellence and attention to detail make us the preferred choice for corporate clients looking for reliable and comfortable transportation. Whether you need transportation to and from the airport or to a business meeting, we have the perfect vehicle to meet your needs. Our fleet includes a range of luxurious vehicles, including sedans, SUVs, Luxury Buses, Executive Sprinters, and Sprinter Limos. All our vehicles are meticulously maintained and outfitted with the latest amenities to ensure your comfort and safety. Our experienced drivers are knowledgeable about the area and will get you to your destination on time and in style. We offer competitive pricing and customizable packages to meet your specific needs and budget. Choose Masterpiece Limousine for all your Executive Ground Transportation needs in San Diego. At Masterpiece Limousine, we understand that executive travel is not just about getting from point A to point B. It's about arriving in style, comfort, and on time. That's why we offer a range of services designed to meet the needs of our corporate clients. From Meet and Greet services to Curbside Pickup, we make sure that your travel experience is smooth and hassle-free. We also offer 24/7 customer support, so you can always reach us if you have any questions or concerns. Trust us to provide the best Executive Ground Transportation services in San Diego.",
        picture: "./service3.svg",
        icon: "./icons/Wheel.svg",
    },
    {
        title: "Tijuana/CBX Airport Services",
        description:
            "At Masterpiece Limousine, we take great pride in delivering safe, reliable, and affordable luxury ground transportation. Our extensive range of services includes transportation to the CBX (Cross Border Xpress) and Tijuana Airport in Mexico, with a diverse fleet of luxury vehicles, including Executive and Limo Sprinters, that are designed to cater to all your transportation needs. Our experienced drivers are well-versed in Mexican laws and the region, ensuring that you have a seamless and hassle-free border crossing experience. Our Meet and Greet and Curbside Service options are designed to provide you with an effortless travel experience from the moment you step out of your door. To expedite the process and minimize wait times, we also offer a Border Crossing Fast Pass service at an additional cost. At Masterpiece Limousine, we place the utmost priority on safety and reliability. Our vehicles are maintained meticulously and equipped with the latest safety features to guarantee your comfort and peace of mind. We believe that luxury ground transportation should be affordable and customizable to meet your unique needs and budget. Whether you are traveling for business or pleasure, our transportation services with Meet and Greet and Curbside Service options will get you to your destination in comfort and style. Experience the epitome of luxury ground transportation with Masterpiece Limousine today. Get in touch with us to schedule your next trip.",
        picture: "./service4.svg",
        icon: "./icons/Airport.svg",
    },
    {
        title: "School Even Limo Services",
        description:
            "Are you looking to make your child's school event unforgettable? Look no further than Masterpiece Limousine's safe and reliable school event limo services. Our experienced and professional chauffeurs will pick your child up from home and take them to their school event in style, ensuring a safe and enjoyable journey. Our luxury limousines are equipped with all the amenities to make the ride even more enjoyable, with options like stretch limousines, Hummer limos, and party buses. And with the option to bring friends along in our spacious H2 Hummer Limo, which can hold up to 40 passengers, the party can start right in the car. At Masterpiece Limousine, we understand the importance of privacy and security for children, which is why our limousines have tinted windows and separate driver's compartments. Our chauffeurs are also trained in handling paparazzi and security threats on the road and are always available to assist through the intercom system. Safety is our top priority, so you can trust that your child will be in good hands with us. We follow all local regulations and have a strict zero-tolerance policy for alcohol or drug use in our vehicles. Our chauffeurs are also trained in defensive driving techniques to ensure your child's safety on the road. If you need to make last-minute adjustments to your schedule, our school event limo services in San Diego are flexible and can start at any time. And if the event ends earlier than expected, our limos are on standby to take your child home safely. And if you're looking for transportation for prom night, Masterpiece Limousine has got you covered with our luxury prom limousine service. We offer a wide range of luxury vehicles, including Executive Sprinters and Sprinter Limos, equipped with top-of-the-line amenities to make your prom night special. Our experienced and professional chauffeurs will ensure your prom night is safe, fun, and stress-free. Contact Masterpiece Limousine today to book our school event or prom limo services and give your child the celebrity treatment they deserve.",
        picture: "./service5.svg",
        icon: "./icons/SchoolHouse.svg",
    },
];

interface serviceDetailProps {
    index: number;
    title: string;
    description: string;
    picture: string;
    icon: string;
}

const ServiceDetailPage = (props: serviceDetailProps) => {
    const { index, title, description, picture, icon } = props;

    if (index % 2 === 0) {
        return (
            <Grid item container sx={{ backgroundColor: "#2189B7" }} my={10}>
                <Grid item md={1}>
                    bar
                </Grid>
                <Grid item md={4} my={-6}>
                    <Image
                        src={picture}
                        alt="service image"
                        width="500"
                        height="700"
                    />
                </Grid>
                <Grid item md={7} p={6}>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <Typography variant="h1">{index}</Typography>
                        <Image src={icon} alt="icon" width="50" height="50" />
                    </Box>

                    <Typography variant="h3" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body1">{description}</Typography>
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Grid item container sx={{ backgroundColor: "#A72211" }} my={10}>
                <Grid item md={7} p={6}>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <Typography variant="h1">{index}</Typography>
                        <Image src={icon} alt="icon" width="50" height="50" />
                    </Box>
                    <Typography variant="h3" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body1">{description}</Typography>
                </Grid>
                <Grid item md={4} my={-6}>
                    <Image
                        src={picture}
                        alt="service image"
                        width="500"
                        height="700"
                    />
                </Grid>
                <Grid item md={1}>
                    bar
                </Grid>
            </Grid>
        );
    }
};

const Section8 = () => {
    const heroStyle = {
        backgroundImage: `url('/servicesbg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "150vh",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };
    return (
        <Grid container direction="column">
            <Grid item style={heroStyle} textAlign="left" p={5}>
                <Stack maxWidth={400} spacing={1}>
                    <Typography variant="h1">EXCLUSIVE SERVICES</Typography>
                    {services.map((service, index) => {
                        return (
                            <Typography key={index} variant="h5">
                                {service}
                            </Typography>
                        );
                    })}
                </Stack>
            </Grid>
            \
            {servicesDetailed.map((service, index) => {
                return (
                    <ServiceDetailPage
                        key={index}
                        index={index + 1}
                        title={service.title}
                        description={service.description}
                        picture={service.picture}
                        icon={service.icon}
                    />
                );
            })}
        </Grid>
    );
};

export default Section8;
