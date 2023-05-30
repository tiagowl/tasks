import { Flex, Card, CardBody, HStack, CardHeader, Circle, Heading, VStack, Square, Text } from "@chakra-ui/react";
import Task from "../components/Task";

const Dashboard = () => {
    return(
        <>
        <Text color="rgb(134, 132, 141)" mb="10px" fontSize="15px" fontWeight="bold" >Projects</Text>
        <Flex wrap="wrap" mb="50px" >
          {[1,2,3,4,5,6].map((item)=>(
            <Card border="1px solid" minW="19.1rem" mr="6" mb="5" borderColor="rgb(228, 226, 228)" boxShadow="none" >
              <CardBody py="12px" px="16px" >
                <Flex w="100%" justifyContent="space-between" alignItems="center" >
                  <Text fontWeight="semibold" >Content Editing XP</Text>
                  <Text color="#6f6e77" fontSize="xs" fontWeight="bold" >115</Text>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </Flex>
        <Text color="rgb(134, 132, 141)" mb="10px" fontSize="15px" fontWeight="bold" >Status</Text>
        <HStack alignItems="flex-start" >     
            <Card border="1px solid" w="28rem" borderColor="rgb(228, 226, 228)" boxShadow="none"  >
              <CardHeader py="16px" alignItems="center" display="flex" px="20px" bg="rgb(252, 252, 252)" borderBottom="1px solid" borderBottomColor="rgb(228, 226, 228)" >
                <Circle size="8px" bg="#1fa0ff" mr="2" ></Circle>
                <Heading size='md' fontSize="15px">Client Report</Heading>
              </CardHeader>
              <CardBody overflowY="scroll" maxH="25rem" >
                <VStack spacing="5" w="100%" >
                  {[1,2,3,4,5].map((item)=>(
                    <Task page="Dashboard" title="Ability to define custom indexes in the schema" subtitle="DEVELOPER EXPERIENCE" />
                  ))}  
                </VStack>
                
              </CardBody>
            </Card>
          <Card border="1px solid" w="28rem" borderColor="rgb(228, 226, 228)" boxShadow="none" >
            <CardHeader py="16px" alignItems="center" display="flex" px="20px" bg="rgb(252, 252, 252)" borderBottom="1px solid" borderBottomColor="rgb(228, 226, 228)" >
              <Circle size="8px" bg="#c17aff" mr="2" ></Circle>
              <Heading size='md' fontSize="15px">Client Report</Heading>
            </CardHeader>
            <CardBody overflowY="scroll" maxH="25rem" >
                <VStack spacing="5" w="100%" >
                  {[1,2,3,4,5].map((item)=>(
                    <Task page="Dashboard" title="Ability to define custom indexes in the schema" subtitle="DEVELOPER EXPERIENCE" />
                  ))}  
                </VStack>
                
              </CardBody>
          </Card>
          <Card border="1px solid" w="28rem" borderColor="rgb(228, 226, 228)" boxShadow="none" >
            <CardHeader py="16px" alignItems="center" display="flex" px="20px" bg="rgb(252, 252, 252)" borderBottom="1px solid" borderBottomColor="rgb(228, 226, 228)" >
              <Circle size="8px" bg="#6cd345" mr="2" ></Circle>
              <Heading size='md' fontSize="15px">Client Report</Heading>
            </CardHeader>
            <CardBody overflowY="scroll" maxH="25rem" >
                <VStack spacing="5" w="100%" >
                  {[1,2,3,4,5].map((item)=>(
                    <Task page="Dashboard" title="Ability to define custom indexes in the schema" subtitle="DEVELOPER EXPERIENCE" />
                  ))}  
                </VStack>
                
              </CardBody>
          </Card>
        </HStack>
        </>
    )
}

export default Dashboard;