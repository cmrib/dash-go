import { Flex, useBreakpointValue, } from '@chakra-ui/react';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { Logo } from './Logo';
import { SearchBox } from './SearchBox';

export function Header() {

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