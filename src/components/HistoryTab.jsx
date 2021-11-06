import React, { useState, useEffect } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import BtcHistoryTable from "./BtcHistoryTable";

const HistoryTab = ({
	btcPriceMin,
	btcPriceFiveMins,
	btcPriceHour,
	btcPriceWeek,
}) => {
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
					<BtcHistoryTable data={btcPriceMin} />
				</TabPanel>
				<TabPanel>
					<BtcHistoryTable data={btcPriceFiveMins} />
				</TabPanel>
				<TabPanel>
					<BtcHistoryTable data={btcPriceHour} />
				</TabPanel>
				<TabPanel>
					<BtcHistoryTable data={btcPriceWeek} />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default HistoryTab;
