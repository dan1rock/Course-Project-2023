import { ResponsiveBar } from "@nivo/bar";
import {useContext} from "react";
import {ColorModeContext, palette} from "../theme";

const BarChart = ({ data, sideLegend, bottomLegend }) => {
    const colorMode = useContext(ColorModeContext);
    const colors = palette(colorMode.getMode());

    return (
        <ResponsiveBar
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.default,
                        },
                    },
                    legend: {
                        text: {
                            fontSize: 12,
                            fontWeight: 600,
                            fill: colors.default,
                        },
                    },
                    ticks: {
                        line: {
                            stroke: "#fcfcfc",
                            strokeWidth: 1,
                        },
                        text: {
                            fontSize: 12,
                            fontWeight: 600,
                            fill: colors.default,
                        },
                    },
                },
                legends: {
                    text: {
                        fontSize: 12,
                        fontWeight: 600,
                        fill: colors.default,
                    },
                },
            }}
            keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            borderColor={{
                from: "color",
                modifiers: [["darker", "1.6"]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: bottomLegend,
                legendPosition: "middle",
                legendOffset: 32,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: sideLegend,
                legendPosition: "middle",
                legendOffset: -40,
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            legends={[
                {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            role="application"
            barAriaLabel={function (e) {
                return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
            }}
        />
    );
};

export default BarChart;