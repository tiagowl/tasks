import { Flex, Card, CardBody, HStack, CardHeader, Circle, Heading, VStack, Text, Spinner, Button } from "@chakra-ui/react";
import Task from "../components/Task";
import { useEffect, useState } from "react";
import { TaskData } from "../@types/task";
import { Project } from "../@types/project";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";

const Dashboard = () => {

    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState<TaskData[]>();
    const [projects, setProjects] = useState<Project[]>();
    const navigate = useNavigate();

    const fetchProjects = async() => {
      setLoading(true);
      let { data: Projects, error } = await supabase
      .from('Projects')
      .select(`
          *,
          Tasks (
              id,
              name
          )
      `)
      if(Projects){
          setProjects(Projects as Project[]);
          setLoading(false);
      }
  }

  const fetchTasks = async() => {
    setLoading(true);
    let { data, error } = await supabase
    .from('Tasks')
    .select(`
    *,
    Projects (
        id,
        name
    ),
    Subtasks(
        id
    )
    `)
    if(data){
        setTasks(data as unknown as TaskData[])
        setLoading(false);
    }
  }

  const PlannedTasks = tasks?.filter((item)=> item?.status_id === 1);
  const InProgessTasks = tasks?.filter((item)=> item?.status_id === 2);
  const CompleteTasks = tasks?.filter((item)=> item?.status_id === 3);

  useEffect(()=>{
    fetchProjects();
    fetchTasks();
  }, [])

    return(
        <>
        <Flex w="100%" justifyContent="space-between" pr="7" mb="2">
          <Text color="rgb(134, 132, 141)" mb="10px" fontSize="15px" fontWeight="bold" >Projects</Text>
          <Button leftIcon={<AddIcon/>} size="sm" bg="rgb(73, 69, 255)" color="white" fontSize="xs" fontWeight="bold" >CREATE PROJECT</Button>
        </Flex>
        <Flex wrap="wrap" mb="50px" >
          {loading ? <Spinner margin="0 auto" mb="10rem" /> :
          projects?.map((item)=>(
              <Card border="1px solid" cursor="pointer" onClick={()=>navigate(`project/${item?.id}`)} minW="19.1rem" mr="6" mb="5" borderColor="rgb(228, 226, 228)" boxShadow="none" >
                <CardBody py="12px" px="16px" >
                  <Flex w="100%" justifyContent="space-between" alignItems="center" >
                    <Text fontWeight="semibold" >{item?.name}</Text>
                    <Text color="#6f6e77" fontSize="xs" fontWeight="bold" >{item?.Tasks?.length}</Text>
                  </Flex>
                </CardBody>
              </Card>
            ))} 
        </Flex>
        <Text color="rgb(134, 132, 141)" mb="10px" fontSize="15px" fontWeight="bold" >Status</Text>
        {loading ? <Flex w="100%" >
            <Spinner m="0 auto" />
        </Flex> : 
        <HStack alignItems="flex-start" >     
            <Card border="1px solid" w="28rem" borderColor="rgb(228, 226, 228)" boxShadow="none"  >
              <CardHeader py="16px" alignItems="center" display="flex" px="20px" bg="rgb(252, 252, 252)" borderBottom="1px solid" borderBottomColor="rgb(228, 226, 228)" >
                <Circle size="8px" bg="#1fa0ff" mr="2" ></Circle>
                <Heading size='md' fontSize="15px">Planned</Heading>
              </CardHeader>
              <CardBody overflowY="scroll" maxH="25rem" minH="25rem" >
                <VStack spacing="5" w="100%" >
                  {PlannedTasks?.map((item)=>(
                    <Task page="Dashboard" title={item?.name} route={`/task/${item?.Projects?.id}/${item?.id}`} subitens={item?.Subtasks?.length} subtitle={item?.Projects?.name?.toUpperCase()} />
                  ))}  
                </VStack>
                
              </CardBody>
            </Card>
          <Card border="1px solid" w="28rem" borderColor="rgb(228, 226, 228)" boxShadow="none" >
            <CardHeader py="16px" alignItems="center" display="flex" px="20px" bg="rgb(252, 252, 252)" borderBottom="1px solid" borderBottomColor="rgb(228, 226, 228)" >
              <Circle size="8px" bg="#c17aff" mr="2" ></Circle>
              <Heading size='md' fontSize="15px">In Progress</Heading>
            </CardHeader>
            <CardBody overflowY="scroll" maxH="25rem" minH="25rem" >
                <VStack spacing="5" w="100%" >
                {InProgessTasks?.map((item)=>(
                    <Task page="Dashboard" title={item?.name} route={`/task/${item?.Projects?.id}/${item?.id}`} subitens={item?.Subtasks?.length} subtitle={item?.Projects?.name?.toUpperCase()} />
                  ))}    
                </VStack>
                
              </CardBody>
          </Card>
          <Card border="1px solid" w="28rem" borderColor="rgb(228, 226, 228)" boxShadow="none" >
            <CardHeader py="16px" alignItems="center" display="flex" px="20px" bg="rgb(252, 252, 252)" borderBottom="1px solid" borderBottomColor="rgb(228, 226, 228)" >
              <Circle size="8px" bg="#6cd345" mr="2" ></Circle>
              <Heading size='md' fontSize="15px">Complete</Heading>
            </CardHeader>
            <CardBody overflowY="scroll" maxH="25rem" minH="25rem" >
                <VStack spacing="5" w="100%" >
                {CompleteTasks?.map((item)=>(
                    <Task page="Dashboard" title={item?.name} route={`/task/${item?.Projects?.id}/${item?.id}`} subitens={item?.Subtasks?.length} subtitle={item?.Projects?.name?.toUpperCase()} />
                  ))}   
                </VStack>
                
              </CardBody>
          </Card>
        </HStack>}
        </>
    )
}

export default Dashboard;