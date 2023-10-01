import { Hidden, Stack } from "@mui/material";
import React from "react";

interface BarProps {
    count: number;
    filled: 0 | number;
    color?: string;
}

const Bar: React.FC<BarProps> = ({ count, filled, color }) => {
    // Create an array to store the SVG elements
    const bars: JSX.Element[] = [];

    // Generate the SVG elements based on the filled parameter
    for (let i = 0; i < filled; i++) {
        bars.push(
            <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="28"
                viewBox="0 0 22 36"
                fill="none"
            >
                <path
                    d="M1.98957 33.5503L2.21656 15.8602L20.0105 2.2164L19.7835 19.9065L1.98957 33.5503Z"
                    fill={color ? color : "#2189B7"}
                    stroke={color ? color : "#2189B7"}
                    strokeWidth="2" // Use "strokeWidth" instead of "stroke-width"
                />
            </svg>
        );
    }

    // Generate the SVG elements based on the count parameter
    for (let i = filled; i < count; i++) {
        bars.push(
            <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="28"
                viewBox="0 0 22 36"
                fill="none"
            >
                <path
                    d="M1.98957 33.5503L2.21656 15.8602L20.0105 2.2164L19.7835 19.9065L1.98957 33.5503Z"
                    stroke={color ? color : "#2189B7"}
                    strokeWidth="2" // Use "strokeWidth" instead of "stroke-width"
                />
            </svg>
        );
    }

    // Return the stacked SVG elements
    return (
        <Hidden mdDown>
            <Stack spacing={-1}>{bars}</Stack>
        </Hidden>
    );
};

export default Bar;
