import React, { useState, useEffect } from "react";
import {
	Table,
	TableCaption,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Spinner,
} from "@chakra-ui/react";
import {
	ArrowUpDownIcon,
	TriangleUpIcon,
	TriangleDownIcon,
} from "@chakra-ui/icons";

const BtcHistoryTable = ({ data }) => {
	const [tableData, setTableData] = useState();
	const [sortState, setSortState] = useState({
		date: 1,
		high: 0,
		low: 0,
		open: 0,
		close: 0,
	});

	useEffect(() => {
		setTableData(data);
	}, [data]);

	const sortByDateAsc = () => {
		setTableData(data.sort((a, b) => new Date(a.Date) - new Date(b.Date)));
		setSortState({
			date: 1,
			high: 0,
			low: 0,
			open: 0,
			close: 0,
		});
	};
	const sortByDateDesc = () => {
		setTableData(data.sort((a, b) => new Date(b.Date) - new Date(a.Date)));
		setSortState({
			date: 2,
			high: 0,
			low: 0,
			open: 0,
			close: 0,
		});
	};
	const sortByHighAsc = () => {
		setTableData(data.sort((a, b) => a.High - b.High));
		setSortState({
			date: 0,
			high: 1,
			low: 0,
			open: 0,
			close: 0,
		});
	};
	const sortByHighDesc = () => {
		setTableData(data.sort((a, b) => b.High - a.High));
		setSortState({
			date: 0,
			high: 2,
			low: 0,
			open: 0,
			close: 0,
		});
	};
	const sortByLowAsc = () => {
		setTableData(data.sort((a, b) => a.Low - b.Low));
		setSortState({
			date: 0,
			high: 0,
			low: 1,
			open: 0,
			close: 0,
		});
	};
	const sortByLowDesc = () => {
		setTableData(data.sort((a, b) => b.Low - a.Low));
		setSortState({
			date: 0,
			high: 0,
			low: 2,
			open: 0,
			close: 0,
		});
	};
	const sortByOpenAsc = () => {
		setTableData(data.sort((a, b) => a.Open - b.Open));
		setSortState({
			date: 0,
			high: 0,
			low: 0,
			open: 1,
			close: 0,
		});
	};
	const sortByOpenDesc = () => {
		setTableData(data.sort((a, b) => b.Open - a.Open));
		setSortState({
			date: 0,
			high: 0,
			low: 0,
			open: 2,
			close: 0,
		});
	};
	const sortByCloseAsc = () => {
		setTableData(data.sort((a, b) => a.Close - b.Close));
		setSortState({
			date: 0,
			high: 0,
			low: 0,
			open: 0,
			close: 1,
		});
	};
	const sortByCloseDesc = () => {
		setTableData(data.sort((a, b) => b.Close - a.Close));
		setSortState({
			date: 0,
			high: 0,
			low: 0,
			open: 0,
			close: 2,
		});
	};

	return tableData ? (
		<>
			<Table variant="simple" fontSize="1.3rem" fontWeight="semibold">
				<TableCaption>
					Imperial to metric conversion factors
				</TableCaption>
				<Thead>
					<Tr backgroundColor="#D8D8D8">
						<Th fontSize="1.4rem" fontWeight="bold" color="black">
							Date
							<button
								onClick={() => {
									if (
										sortState?.date === 0 ||
										sortState?.date === 1
									)
										sortByDateDesc();
									else sortByDateAsc();
								}}
							>
								{sortState?.date === 1 ? (
									<TriangleUpIcon pl="1" />
								) : sortState?.date === 2 ? (
									<TriangleDownIcon pl="1" />
								) : (
									<ArrowUpDownIcon pl="1" />
								)}
							</button>
						</Th>
						<Th fontSize="1.4rem" fontWeight="bold" color="black">
							High
							<button
								onClick={() => {
									if (
										sortState?.high === 0 ||
										sortState?.high === 1
									)
										sortByHighDesc();
									else sortByHighAsc();
								}}
							>
								{sortState?.high === 1 ? (
									<TriangleUpIcon pl="1" />
								) : sortState?.high === 2 ? (
									<TriangleDownIcon pl="1" />
								) : (
									<ArrowUpDownIcon pl="1" />
								)}
							</button>
						</Th>
						<Th fontSize="1.4rem" fontWeight="bold" color="black">
							Low
							<button
								onClick={() => {
									if (
										sortState?.low === 0 ||
										sortState?.low === 1
									)
										sortByLowDesc();
									else sortByLowAsc();
								}}
							>
								{sortState?.low === 1 ? (
									<TriangleUpIcon pl="1" />
								) : sortState?.low === 2 ? (
									<TriangleDownIcon pl="1" />
								) : (
									<ArrowUpDownIcon pl="1" />
								)}
							</button>
						</Th>
						<Th fontSize="1.4rem" fontWeight="bold" color="black">
							Open
							<button
								onClick={() => {
									if (
										sortState?.open === 0 ||
										sortState?.open === 1
									)
										sortByOpenDesc();
									else sortByOpenAsc();
								}}
							>
								{sortState?.open === 1 ? (
									<TriangleUpIcon pl="1" />
								) : sortState?.open === 2 ? (
									<TriangleDownIcon pl="1" />
								) : (
									<ArrowUpDownIcon pl="1" />
								)}
							</button>
						</Th>
						<Th fontSize="1.4rem" fontWeight="bold" color="black">
							Close
							<button
								onClick={() => {
									if (
										sortState?.close === 0 ||
										sortState?.close === 1
									)
										sortByCloseDesc();
									else sortByCloseAsc();
								}}
							>
								{sortState?.close === 1 ? (
									<TriangleUpIcon pl="1" />
								) : sortState?.close === 2 ? (
									<TriangleDownIcon pl="1" />
								) : (
									<ArrowUpDownIcon pl="1" />
								)}
							</button>
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{tableData.map((ele) => {
						return (
							<Tr>
								<Td>{ele.Date}</Td>
								<Td>
									{new Intl.NumberFormat().format(ele.High)}
								</Td>
								<Td>
									{new Intl.NumberFormat().format(ele.Low)}
								</Td>
								<Td>
									{new Intl.NumberFormat().format(ele.Open)}
								</Td>
								<Td>
									{new Intl.NumberFormat().format(ele.Close)}
								</Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</>
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

export default BtcHistoryTable;
