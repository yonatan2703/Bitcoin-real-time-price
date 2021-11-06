import React, { useState, useEffect } from "react";
import {} from "@chakra-ui/react";

const BtcHistoryTable = ({ data }) => {
	useEffect(() => {
		console.log(data);
	}, []);

	return (
		<>
			{data?.map((ele) => {
				return <div>{ele.Date}</div>;
			})}
		</>
	);
};

export default BtcHistoryTable;
