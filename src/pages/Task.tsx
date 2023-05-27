import { Button, Card, CardFooter, Checkbox, Flex, HStack, Input, Select, Text } from "@chakra-ui/react";
import Task from "../components/Task";

const TaskPage = () => {
    return(
        <HStack w="100%" spacing="7" minH="100vh" maxH="auto" >
            <Flex h="100vh" alignItems="flex-start" w="30%">
                
            </Flex>
            <Flex minH="100vh"  maxH="auto" w="70%" flexDirection="column">
                <Task page="Task" title="Support pnpm" subtitle="Currently Strapi does not support pnpm and you run into errors when trying to use it. I think Strapi should support pnpm as it saves up on disk space and development time when creating new Strapi projects." />
                <Input w="100%" mt="7" placeholder="Add checklist" borderRadius="sm" borderColor="rgb(228, 226, 228)" />
                <Card w="100%" border="1px solid" borderRadius="sm" borderColor="rgb(228, 226, 228)" boxShadow="none" >
                    <CardFooter display="flex" justifyContent="flex-end" >
                    <Button bg="rgb(73, 69, 255)" fontSize="xs" color="white" >CREATE</Button>
                    </CardFooter>
                </Card>
                <Flex w="100%" mt="7" alignItems="center" justifyContent="space-between" >
                    <Text color="rgb(111, 110, 119)" >Checklist</Text>
                    <Flex alignItems="center" >
                        <Text w="5rem" color="rgb(111, 110, 119)" >Sort By</Text>
                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Flex>
                </Flex>
                <Flex w="100%" mt="4" >
                    <Checkbox defaultChecked>Checkbox</Checkbox>
                </Flex>
            </Flex>
        </HStack>
    );
}

export default TaskPage;