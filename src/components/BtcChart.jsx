import React, { useState, useEffect } from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import {} from "@chakra-ui/react";

const BtcChart = ({ data }) => {
	useEffect(() => {
		console.log(data);
	}, []);

	return (
		<div style={{ width: "100%", height: 400 }}>
			<ResponsiveContainer>
				<AreaChart
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="Date" />
					<YAxis
						type="number"
						domain={["dataMin", "dataMax"]}
						allowDataOverflow={true}
					/>
					<Tooltip />
					<Area
						type="monotone"
						dataKey="Close"
						stroke="#8884d8"
						fill="#8884d8"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default BtcChart;

// {
// 	data?.map((ele) => {
// 		return <div>{ele.Date}</div>;
// 	});
// }
