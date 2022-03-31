import { Flex, Icon, IconButton, useBreakpointValue, } from '@chakra-ui/react';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { Logo } from './Logo';
import { SearchBox } from './SearchBox';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { AiOutlineMenu } from 'react-icons/ai'

export function Header() {
    const { onOpen, onClose } = useSidebarDrawer()

    // responsividade
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >

            {!isWideVersion && (
                <IconButton aria-label='Open navigation'
                    icon={<Icon as={AiOutlineMenu} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >
                </IconButton>
            )}


            <Logo />

            {isWideVersion && (<SearchBox />)}

            <Flex align="center" ml="auto" //faz jogar pra direita
            >
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    );
}