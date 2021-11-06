import React, { useState, useEffect } from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	ReferenceLine,
} from "recharts";
import { Spinner } from "@chakra-ui/react";

const BtcChart = ({ data }) => {
	const [minClose, setMinClose] = useState();
	const [maxClose, setMaxClose] = useState();
	const [avgClose, setAvgClose] = useState();
	const [refLine, setRefLine] = useState();
	const [strokeColor, setStrokeColor] = useState();

	useEffect(() => {
		if (data) {
			setMinClose(Math.min(...data.map(({ Close }) => Close)));
			setMaxClose(Math.max(...data.map(({ Close }) => Close)));
			setRefLine(data[data.length - 1].Close);
		}
	}, [data]);

	useEffect(() => {
		if (minClose && maxClose)
			setAvgClose(minClose + (maxClose - minClose) / 2);
	}, [minClose, maxClose]);

	useEffect(() => {
		if (avgClose && refLine) {
			if (refLine > avgClose) setStrokeColor("green");
			else setStrokeColor("red");
		}
	}, [avgClose, refLine]);

	return strokeColor ? (
		<div style={{ width: "100%", height: 400 }}>
			<ResponsiveContainer>
				<AreaChart
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 11,
						bottom: 0,
					}}
				>
					<defs>
						<linearGradient
							id="colorUv"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="#7EABED"
								stopOpacity={0.7}
							/>
							<stop
								offset="95%"
								stopColor="#7EABED"
								stopOpacity={0.2}
							/>
						</linearGradient>
					</defs>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="Date" />
					<YAxis
						type="number"
						domain={["dataMin", "dataMax"]}
						allowDataOverflow={true}
					/>
					<Tooltip />
					{strokeColor && (
						<ReferenceLine
							y={refLine}
							label=""
							stroke={strokeColor}
							strokeDasharray="4 4"
						/>
					)}
					<Area
						type="monotone"
						dataKey="Close"
						stroke="#7EABED"
						fillOpacity={1}
						fill="url(#colorUv)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	) : (
		<Spinner
			thickness="5px"
			speed="0.65s"
			emptyColor="gray.200"
			color="blue.500"
			size="xl"
			className="absolute-centered"
		/>
	);
};

export default BtcChart;
