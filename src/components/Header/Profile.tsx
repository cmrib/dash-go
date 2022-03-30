import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Cicero Ribeiro</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >ciceromirandar@gmail.com</Text>
            </Box>

            <Avatar size="md" name="Cicero Ribeiro" src="https://github.com/cmrib.png" />
        </Flex>
    );
}