import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import avatarSrc from "../assets/av.jpg";

const Footer = () => {
    return (
        <Box
            bgColor={"blackAlpha.900"}
            color={"whiteAlpha.700"}
            minH={"48"}
            px={"16"}
            py={["16", "8"]}
        >

            <Stack direction={["column", "row"]}
                h={"full"}
                alignItems={"center"}
            >

                <VStack w={"full"} alignItems={["center", "flex-start"]} >

                    <Text fontWeight={"bold"}>About Us</Text>
                    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]} >
                        We are the best crypto trading app
                    </Text>
                    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]} >
                        Copyright ©2024 YCrypto.com
                    </Text>
                    <Text  fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]}>
                    All rights reserved | Privacy |  Notice |  Status
                    </Text>

                </VStack>
                <VStack>
                    <Avatar
                        boxSize={"28"}
                        mt={["4", "0"]}
                        src={avatarSrc}
                    />
                    <Text>Mahak</Text>
                </VStack>

            </Stack>
        </Box>
    );
};

export default Footer
