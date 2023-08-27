import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import mercLogo from "@/assets/svgs/mercLogo.svg";
import fordLogo from "@/assets/svgs/fordLogo.svg";
import chevLogo from "@/assets/svgs/chevLogo.svg";
import cadiLogo from "@/assets/svgs/cadiLogo.svg";
import linLogo from "@/assets/svgs/linLogo.svg";

const fleetCars = [
    {
        name: "PARTY BUS",
        description:
            "When it comes to luxury ground transportation, the Mercedes-Benz Sprinter Limo is a top choice for any occasion. Whether you're planning a corporate event or a wedding, this sleek and stylish vehicle is sure to impress. Not only is the interior spacious and comfortable, but the onboard TVs and bar area make it perfect for presentations or celebrations. At Masterpiece Limousine, we prioritize safety, reliability, and comfort, which is why we offer the Mercedes Sprinter Limo for our clients. Our professionally trained chauffeurs ensure a smooth and enjoyable ride, and we are fully licensed and insured for your peace of mind. In addition to corporate events and weddings, the Mercedes Sprinter Limo is also a popular choice for proms, bachelor/bachelorette parties, and other special occasions. With light shows and customizable music options, this luxury vehicle adds a touch of glamour to any event. Trust Masterpiece Limousine to provide you with the highest quality luxury ground transportation services. Contact us today to book the Mercedes Sprinter Limo for your next event and experience the ultimate in style and comfort.",
        image: "./MSL2.svg",
    },
    {
        name: "PARTY BUS",
        description:
            "Looking for luxury ground transportation that's reliable, comfortable, and safe? Look no further than the Mercedes-Benz Executive Sprinter. This vehicle is perfect for corporate team-building excursions, with its spacious interior and open-style limo seating, providing a luxury environment for up to 12 passengers. Not only is the Sprinter impressive in appearance, but it's also equipped with advanced safety features such as collision prevention, lane keeping, and crosswind assist. The Sprinter's V6 CDI diesel engine offers powerful performance and fuel efficiency, making it a reliable choice for any long-distance travel. Aside from its impressive performance and safety features, the Sprinter is also known for its quality and reliability. Its spacious XL extended cab model provides plenty of room for luggage, making it a convenient choice for transporting wedding parties or other large groups. Additionally, guests can enjoy their preferred music with an AUX cord on board, adding to the celebratory atmosphere. Choose the Mercedes-Benz Sprinter for a luxury and reliable transportation experience that exceeds your expectations. Contact us today to book your Mercedes-Benz Executive Sprinter and experience the comfort and sophistication of luxury ground transportation.",
        image: "./MSL.svg",
    },
    {
        name: "STRETCH LIMOUSINE",
        description:
            "Masterpiece Limousine is proud to offer our clients luxury transportation services that combine comfort, safety, and reliability. Whether you're traveling for business or pleasure, our professional chauffeurs are dedicated to ensuring your experience is stress-free and enjoyable. Our luxurious stretch limo rental is one of our most popular services, offering passengers an unforgettable travel experience. Our Stretch limos are spacious, comfortable, and can accommodate up to 8 passengers, with plenty of luggage space. This makes it perfect for airport transportation, business meetings, or a night out on the town. The Stretch limo rental is the perfect choice for those who seek both style and convenience. At Masterpiece Limousine, we pride ourselves on our experienced and professional chauffeurs who are knowledgeable about the San Diego area and can provide a stress-free journey to your destination. We follow all local regulations and have a strict policy of zero-tolerance for alcohol or drug use in our vehicles. Safety is our top priority, and we are fully licensed and insured for your peace of mind. In addition to our Stretch limo rental, we offer a range of other luxury vehicles, including H2 Hummer limos, Cadillac Escalade limos, and more. We ensure that we have the perfect vehicle to suit your style and budget. At Masterpiece Limousine, we aim to provide you with a travel experience that is nothing short of exceptional. Our luxurious Stretch limo rental and other luxury transportation options are the perfect choice for those who seek both comfort and elegance. Contact us today to learn more about our services and book your next luxurious travel experience with us.",
        image: "./LSL.svg",
    },
    {
        name: "STRETCH LIMOUSINE",
        description:
            "At Masterpiece Limousine, we understand the importance of making a statement and standing out from the crowd. That's why we offer the most exclusive and luxurious limousine services in San Diego, including our H2 Hummer Limo. Our H2 Hummer Limo is the epitome of exclusivity, attracting more attention than any other car on the street. Custom-designed with amenities like neon lights, televisions, and a wet bar, this limo is perfect for bachelor/bachelorette parties, weddings, proms, nights on the town, and sporting events. With Bluetooth connectivity, you can easily stream your favorite music and make hands-free calls while you ride in style. Step into the Masterpiece Hummer Limo, and suddenly you're turning heads and the center of attention. You'll feel like a VIP, making a grand entrance to your event in the most stylish and unforgettable way possible. Our H2 Hummer Limo is perfect for those who want to do things in their unique style and accentuate their star quality. At Masterpiece Limousine, we pride ourselves on providing our clients with the highest service and luxury. When you choose our H2 Hummer Limo, you can trust that you will receive the best in style, comfort, and convenience. Our professional and experienced chauffeurs are dedicated to ensuring that your ride is safe, comfortable, and stress-free. Book our H2 Hummer Limo today and experience the exclusivity and luxury that only Masterpiece Limousine can offer. Make a statement and stand out from the crowd with the most exclusive limousine service in San Diego.",
        image: "./HSL.svg",
    },
    {
        name: "SEDAN",
        description:
            "Luxury ground transportation is the perfect way to elevate your travel experience, and Masterpiece Limousine offers a range of options to suit your needs. Our Executive Sedans are a great choice for small groups, with seating for 2-3 passengers and room for luggage. They are ideal for business meetings, airport transportation, and special events. With luxurious features like leather seats, climate control, and ample legroom, our Executive Sedans offer both style and comfort. Our fleet includes top-of-the-line brands like Mercedes, Cadillac, and Lincoln, ensuring a smooth and sophisticated ride. At Masterpiece Limousine, we prioritize safety, reliability, and comfort, and our professional chauffeurs are trained to provide the best service. With our Executive Sedans, you can sit back and relax, knowing that you're in good hands. If you're interested in booking an Executive Sedan for your transportation needs, don't hesitate to contact us. We'll work with you to find the perfect vehicle for your occasion, and our team will ensure a smooth and enjoyable ride every time.",
        image: "./ES.svg",
    },
    {
        name: "SUV",
        description:
            "Indulge in the luxury of our new Executive SUVs, designed for the discerning traveler seeking a top-notch transportation experience. Our SUVs are the epitome of sophistication, offering unparalleled comfort and convenience. From the moment you step into one of our Executive SUVs, you will be struck by their sleek and modern design. The plush leather seating and advanced audio systems provide the ultimate in luxury and entertainment. With three rows of seating, these vehicles can accommodate up to 6 passengers comfortably, making them the perfect choice for exclusive corporate events or private gatherings. But our Executive SUVs are not just visually stunning; they are also environmentally friendly. As Flex Fuel vehicles, they can run on 85% Ethanol, making them an excellent choice for those looking to reduce their carbon footprint. At Masterpiece Limousine, we pride ourselves on our dedication to safety, reliability, and comfort. Our elite drivers are highly trained and knowledgeable about the Southern California region, ensuring that your ride will be both enjoyable and efficient. With our Executive SUVs, you can sit back and relax, knowing that you are in the hands of professionals who prioritize your comfort and safety. Whether you are a celebrity, executive, or discerning traveler looking for an exclusive transportation experience, our Executive SUVs are the perfect choice. Contact us today to book your ride and indulge in the luxury and sophistication of our new fleet.",
        image: "./ESUV.svg",
    },
];

interface FleetCarProps {
    name: string;
    description: string;
    image: string;
    index: number;
}

const FleetCar: React.FC<FleetCarProps> = ({
    name,
    description,
    image,
    index,
}) => (
    <Grid
        item
        container
        display="flex"
        direction="row"
        sx={{ height: "100vh" }}
    >
        <Grid item xs={12} md={6}>
            {index % 2 !== 0 ? (
                <div
                    style={{
                        width: "100%",
                        height: "100vh",
                        display: "block",
                        position: "relative",
                    }}
                >
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src={image ?? ""}
                        alt={name + " Logo"}
                    />
                </div>
            ) : (
                <Stack px={16} py={12} textAlign="center" spacing={8}>
                    <Typography
                        variant="h4"
                        letterSpacing="12px"
                        fontSize="24px"
                    >
                        {name}
                    </Typography>
                    <Typography variant="body1" fontSize="14px">
                        {description}
                    </Typography>
                    <Button variant="contained"> SEE OPTIONS</Button>
                </Stack>
            )}
        </Grid>
        <Grid item xs={12} md={6}>
            {index % 2 !== 0 ? (
                <Stack px={16} py={12} textAlign="center" spacing={8}>
                    <Typography
                        variant="h4"
                        letterSpacing="12px"
                        fontSize="24px"
                    >
                        {name}
                    </Typography>
                    <Typography variant="body1" fontSize="14px">
                        {description}
                    </Typography>
                    <Button variant="contained"> SEE OPTIONS</Button>
                </Stack>
            ) : (
                <div
                    style={{
                        width: "100%",
                        height: "100vh",
                        display: "block",
                        position: "relative",
                    }}
                >
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src={image ?? ""}
                        alt={name + " Logo"}
                    />
                </div>
            )}
        </Grid>
    </Grid>
);

const fleet = () => {
    const heroStyle2 = {
        backgroundImage: `url('/fleetbg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",

        justifyContent: "center",
        alignItems: "end",
        color: "white",
        textShadow: "0px 4px 4px 0px #00000040",
    };

    return (
        <Grid container direction="row">
            <Grid
                item
                container
                direction="row"
                style={heroStyle2}
                textAlign="center"
                p={5}
            >
                <Grid item md={5}>
                    <Stack spacing={5} direction="column">
                        <Typography variant="h1" textAlign="left">
                            THE FLEET
                        </Typography>
                        <Typography
                            variant="body1"
                            fontSize="14px"
                            textAlign="left"
                        >
                            Experience safe and reliable Luxury Ground
                            Transportation with our professional chauffeurs at
                            Masterpiece Limousine. We are fully licensed and
                            insured for your peace of mind, and our fleet of
                            vehicles is perfect for any occasion, whether it's a
                            corporate event or a special occasion. Let us take
                            care of the driving while you sit back, relax, and
                            enjoy the comfort and sophistication of our luxury
                            ground transportation services.
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item md={7}>
                    <Image
                        width="210"
                        height="118"
                        src={mercLogo}
                        alt="Mercedes logo"
                    />
                    <Image
                        width="210"
                        height="118"
                        src={fordLogo}
                        alt="Ford logo"
                    />
                    <Image
                        width="210"
                        height="118"
                        src={chevLogo}
                        alt="Chevrolet logo"
                    />
                    <Image
                        width="210"
                        height="118"
                        src={cadiLogo}
                        alt="Cadillac logo"
                    />
                    <Image
                        width="210"
                        height="118"
                        src={linLogo}
                        alt="Lincoln Logo"
                    />
                </Grid>
            </Grid>

            {fleetCars.map((car, index) => (
                <FleetCar
                    key={index}
                    name={car.name}
                    description={car.description}
                    image={car.image}
                    index={index}
                />
            ))}
        </Grid>
    );
};

export default fleet;
