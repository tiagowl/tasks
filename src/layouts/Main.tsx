import { Flex, Container, Square, Icon, HStack, Text } from "@chakra-ui/react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GiDeskLamp } from "react-icons/gi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SiSupabase } from "react-icons/si";
import { Outlet } from "react-router-dom";

const Main = () => {
    return(
        <Flex minH="100vh" maxH="auto" w="100%" flexDirection="column" >
            <Flex w="100%" h="100px" borderBottom="1px solid" borderBottomColor="rgb(228, 226, 228)">
                <Container maxW="container.lg" h="100%" py="3" display="flex" flexDirection="column" justifyContent="space-between" >
                    <Flex>
                        <Square size="36px" mr="2" border="1px solid" borderColor="rgb(228, 226, 228)" borderRadius="lg">
                        <Icon fontSize="xl" as={SiSupabase} />
                        </Square>
                        <Text fontSize="20px" fontWeight="semibold" >Tasks</Text>
                    </Flex>
                    <Flex w="100%" justifyContent="space-between" >
                        <HStack spacing="6" >
                            <Flex alignItems="center" >
                                <Icon fontSize="xl" mr="2" color="gray.400" as={CgMenuLeftAlt} />
                                <Text fontSize="xs" color="#6f6e77" fontWeight="bold" >ROADMAP</Text>
                            </Flex>
                            <Flex alignItems="center" >
                                <Icon fontSize="xl" mr="2" color="gray.400" as={GiDeskLamp} />
                                <Text fontSize="xs" color="#6f6e77" fontWeight="bold" >DASHBOARD</Text>
                            </Flex>
                        </HStack>
                        <Flex alignItems="center" >
                            <Icon fontSize="xl" mr="2" color="gray.400" as={HiMagnifyingGlass} />
                            <Text fontSize="xs" color="#6f6e77" fontWeight="bold" >SEARCH</Text>
                        </Flex>
                    </Flex>
                </Container>
            </Flex>
            <Container maxW="container.lg" pb="5" mt="25px" minH="100vh" maxH="auto">
                <Outlet/>
            </Container>
        </Flex>
    )
}

export default Main;
