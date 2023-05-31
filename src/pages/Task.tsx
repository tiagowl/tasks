import { Button, Card, CardFooter, Checkbox, Flex, HStack, Input, Select, Spinner, Text } from "@chakra-ui/react";
import Task from "../components/Task";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TaskData } from "../@types/task";
import supabase from "../services/supabase";
import { Subtask } from "../@types/subtask";

const TaskPage = () => {

    const {taskId} = useParams();
    const [task, setTask] = useState<TaskData>();
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState<Partial<Subtask>>({name: "", isChecked: false, tasks_id: Number(taskId)});

    const fetchTask = async() => {
        setLoading(true);
        let { data: Tasks, error } = await supabase
        .from('Tasks')
        .select(`
        *,
        Subtasks (
          id,
          name,
          isChecked
        )
      `)
        .eq('id', `${taskId}`)
        if(Tasks){
            setTask(Tasks[0] as TaskData);
            setLoading(false);
        }
    }

    const createSubtask = async() =>{
        setLoading(true)
        const { data, error } = await supabase
        .from('Subtasks')
        .insert([
            payload,
        ])
        if(!error){
            fetchTask();
            setLoading(false)
            setPayload({...payload, name: ""})
        }
    }

    useEffect(()=>{
        fetchTask();
    }, [])

    return(
        <HStack w="100%" spacing="7" minH="100vh" maxH="auto" >
            <Flex h="100vh" alignItems="flex-start" w="30%">
                
            </Flex>
            <Flex minH="100vh"  maxH="auto" w="70%" flexDirection="column">
                {loading ? <Flex w="100%" >
                    <Spinner m="0 auto" />
                </Flex> :
                <>
                
                    <Task page="Task" title={task?.name} subtitle={task?.description} subitens={task?.Subtasks?.length} />
                    <Input w="100%" mt="7" value={payload.name} onChange={(e)=>setPayload({...payload, name: e.target.value})} placeholder="Add checklist" borderRadius="sm" borderColor="rgb(228, 226, 228)" />
                    <Card w="100%" border="1px solid" borderRadius="sm" borderColor="rgb(228, 226, 228)" boxShadow="none" >
                        <CardFooter display="flex" justifyContent="flex-end" >
                        <Button isLoading={loading} onClick={createSubtask} bg="rgb(73, 69, 255)" fontSize="xs" color="white" >CREATE</Button>
                        </CardFooter>
                    </Card>
                    <Flex w="100%" mt="7" alignItems="center" justifyContent="space-between" >
                        <Text color="rgb(111, 110, 119)" >Checklist</Text>
                        <Flex alignItems="center" >
                            <Text w="7rem" color="rgb(111, 110, 119)" >Change Status</Text>
                            <Select placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Flex>
                    </Flex>
                    <Flex w="100%" mt="4" flexDirection="column" >
                        {task?.Subtasks?.map((item)=>(
                            <Checkbox mb="3" isChecked={item?.isChecked}>{item?.name}</Checkbox>
                        ))}
                    </Flex>
                </>}
            </Flex>
        </HStack>
    );
}

export default TaskPage;