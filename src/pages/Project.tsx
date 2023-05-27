import { Button, Card, CardBody, CardFooter, CardHeader, Flex, FormControl, FormHelperText, FormLabel, HStack, Heading, Input, InputGroup, InputLeftElement, Select, Text, VStack } from "@chakra-ui/react";
import Task from "../components/Task";
import { SearchIcon } from "@chakra-ui/icons";

const Project = () => {
    return(
        <HStack w="100%" spacing="7" minH="100vh" maxH="auto" >
            <Flex h="100vh" alignItems="flex-start" w="30%">
                <Card bg="rgb(252, 252, 252)" w="100%" border="1px solid" borderColor="rgb(228, 226, 228)" boxShadow="none" >
                    <CardHeader>
                    <Heading size='md' fontWeight="semibold" textAlign="center">Create a Task</Heading>
                    </CardHeader>
                    <CardBody>
                    <FormControl>
                        <FormLabel fontSize="xs" color="rgb(111, 110, 119)" fontWeight="bold" >TITLE</FormLabel>
                        <Input borderColor="rgb(228, 226, 228)" bg="white" type='email' mb="5" />
                        <FormLabel fontSize="xs" color="rgb(111, 110, 119)" fontWeight="bold" >TITLE</FormLabel>
                        <Input borderColor="rgb(228, 226, 228)" bg="white" type='email' />
                    </FormControl>
                    </CardBody>
                    <CardFooter display="flex" justifyContent="flex-end" >
                    <Button bg="rgb(73, 69, 255)" color="white" fontSize="xs" fontWeight="bold" >CREATE TASK</Button>
                    </CardFooter>
                </Card>
            </Flex>
            <Flex minH="100vh"  maxH="auto" w="70%" flexDirection="column">
                <Flex w="100%" justifyContent="space-between"  >
                    <Flex>
                        <Text w="17rem" fontSize="lg" >Showing tasks in</Text>
                        <Select size="sm" placeholder='All Categories'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Flex>
                    <InputGroup ml="8rem" >
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color="rgb(111, 110, 119)" />
                        </InputLeftElement>
                        <Input size="md" w="15rem" type='tel' placeholder='Search' />
                    </InputGroup>
                </Flex>
                <VStack w="100%" mt="7" spacing="5" minH="100vh" maxH="auto" >
                    {[1,2,3,4,5,6].map((item)=>(
                        <Task page="Project" title="Conditional fields" subtitle="It could be great to add context or let the users create their contents with little constraints. For example, a grid could have" />
                    ))}
                </VStack>
            </Flex>
        </HStack>
    )
}

export default Project;