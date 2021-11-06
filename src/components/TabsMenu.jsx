import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import OverviewTab from "./OverviewTab";
import HistoryTab from "./HistoryTab";
import {
	bitcoinPriceByMinute,
	bitcoinPriceByHour,
	bitcoinPriceByWeek,
} from "../API/bitcoinPricesAPI.js";

const TabsMenu = ({ tabIndex, setTabIndex }) => {
	const [btcPriceMin, setBtcPriceMin] = useState(null);
	const [btcPriceFiveMins, setBtcPriceFiveMins] = useState(null);
	const [btcPriceHour, setBtcPriceHour] = useState(null);
	const [btcPriceWeek, setBtcPriceWeek] = useState(null);

	const navigate = useNavigate();

	const handleTabsChange = (index) => {
		setTabIndex(index);
	};

	useEffect(() => {
		Promise.all([
			bitcoinPriceByMinute(149),
			bitcoinPriceByHour(29),
			bitcoinPriceByWeek(29),
		]).then((response) => {
			setBtcPriceMin(response[0]?.data?.data.slice(-30));
			setBtcPriceFiveMins(
				response[0]?.data?.data.filter((data, i) => (i + 1) % 5 === 0)
			);
			setBtcPriceHour(response[1]?.data?.data);
			setBtcPriceWeek(response[2]?.data?.data);
		});
	}, []);

	return (
		<Tabs
			index={tabIndex}
			onChange={handleTabsChange}
			mt="5"
			size="lg"
			variant="line"
			isLazy
			colorScheme="facebook"
		>
			<TabList color="grey">
				<Tab
					fontSize="1.8rem"
					fontWeight="bold"
					py="7"
					pr="12"
					pl="12"
					onClick={() => {
						navigate("/overview");
					}}
				>
					Overview
				</Tab>
				<Tab
					fontSize="1.8rem"
					fontWeight="bold"
					py="7"
					pr="12"
					pl="12"
					onClick={(e) => {
						navigate("/history");
					}}
				>
					History
				</Tab>
			</TabList>

			<TabPanels border="1px" borderColor="gray.200">
				<TabPanel>
					<OverviewTab
						btcPriceMin={btcPriceMin}
						btcPriceFiveMins={btcPriceFiveMins}
						btcPriceHour={btcPriceHour}
						btcPriceWeek={btcPriceWeek}
					/>
				</TabPanel>
				<TabPanel>
					<HistoryTab
						btcPriceMin={btcPriceMin}
						btcPriceFiveMins={btcPriceFiveMins}
						btcPriceHour={btcPriceHour}
						btcPriceWeek={btcPriceWeek}
					/>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default TabsMenu;
