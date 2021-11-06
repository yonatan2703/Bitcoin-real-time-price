import React, { useState, useEffect } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import BtcChart from "./BtcChart";

const OverviewTab = ({
	btcPriceMin,
	btcPriceFiveMins,
	btcPriceHour,
	btcPriceWeek,
}) => {
	useEffect(() => {
		// eslint-disable-next-line
	}, []);

	return (
		<Tabs colorScheme="black">
			<TabList>
				<Tab
					fontWeight="semibold"
					fontSize="1.3rem"
					py="3"
					pr="6"
					pl="6"
				>
					1 Minute
				</Tab>
				<Tab
					fontWeight="semibold"
					fontSize="1.3rem"
					py="3"
					pr="6"
					pl="6"
				>
					5 Minute
				</Tab>
				<Tab
					fontWeight="semibold"
					fontSize="1.3rem"
					py="3"
					pr="6"
					pl="6"
				>
					1 Hour
				</Tab>
				<Tab
					fontWeight="semibold"
					fontSize="1.3rem"
					py="3"
					pr="6"
					pl="6"
				>
					1 Week
				</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<BtcChart data={btcPriceMin} />
				</TabPanel>
				<TabPanel>
					<BtcChart data={btcPriceFiveMins} />
				</TabPanel>
				<TabPanel>
					<BtcChart data={btcPriceHour} />
				</TabPanel>
				<TabPanel>
					<BtcChart data={btcPriceWeek} />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default OverviewTab;
