import React, { useState, useEffect } from "react";
import { Box, StackDivider, VStack } from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import bitcoinImg from "../images/btc.png";

const Header = ({ data }) => {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			pl="10"
			pr="10"
			boxShadow="2xl"
			height={40}
		>
			<VStack
				divider={<StackDivider borderColor="gray.200" />}
				display="flex"
				flexDirection="column"
			>
				<Box display="flex" mt="3" alignItems="center">
					<img
						src={bitcoinImg}
						alt="bitcoin"
						className="bitcoin-img"
					/>
					<Box fontSize="3rem" fontWeight="bold">
						Bitcoin
					</Box>
				</Box>
				<Box color="#A5A5A5">
					As of: {new Date(data?.lastUpdate).toUTCString()}
				</Box>
			</VStack>
			<Box display="flex" flexDirection="column">
				<Box display="flex" mt="3" alignItems="center">
					{data?.percentChange > 0 ? (
						<TriangleUpIcon w={8} h={8} color="#617A35" />
					) : (
						<TriangleDownIcon w={8} h={8} color="#E53E3E" />
					)}
					<Box fontSize="3.3rem" fontWeight="bold">
						${new Intl.NumberFormat().format(data?.last)}
					</Box>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Box
						fontSize="1.8rem"
						fontWeight="semibold"
						color={data?.percentChange > 0 ? "#617A35" : "#E53E3E"}
					>
						{data?.change.toFixed(2)}
					</Box>
					<Box
						fontSize="1.8rem"
						fontWeight="semibold"
						color={data?.percentChange > 0 ? "#617A35" : "#E53E3E"}
					>
						({data?.percentChange})%
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Header;
