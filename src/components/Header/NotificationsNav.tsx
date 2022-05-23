import { HStack, Icon, Button, useColorMode } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";
import { FaMoon, FaSun } from "react-icons/fa"

export function NotificationsNav() {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack
            spacing={["6", "8"]}
            mx={["6", "8"]}
            pr={["6", "8"]}
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"

        >
            <Button onClick={toggleColorMode} variant="ghost">
                {colorMode === 'light' ? <Icon as={FaMoon} fontSize="20" /> : <Icon as={FaSun} fontSize="20" />}
            </Button>
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiUserAddLine} fontSize="20" />

        </HStack>
    )
}