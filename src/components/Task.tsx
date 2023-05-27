import { Flex, Square, Text } from "@chakra-ui/react";

interface Props{
    title?: string;
    subtitle?:string;
    subitens?: number;
    page?: "Dashboard" | "Project" | "Task"
}

const Task = (props: Props) => {
    return(
        <Flex w="100%" >
            <Square border="1px solid" mr="2" borderColor="rgb(228, 226, 228)" size="35px" borderRadius="md" >
                25
            </Square>
            <Flex flexDirection="column" >
                <Text fontSize={props.page === "Dashboard" || props.page === "Project" ? "md" : "xl"} w="12rem" mb="1" fontWeight="semibold" >{props.title}</Text>
                {props.page != "Dashboard" && <Text fontSize="xs" fontWeight="bold" mb={props.page === "Task" ? "5" : "0"} color="rgb(31, 160, 255)" >PLANNED</Text>}
                <Text fontSize={props.page === "Project" || props.page === "Task" ? "md" : "xs"} fontWeight={props.page === "Project" || props.page === "Task" ? "normal" : "bold"} color={props.page === "Task" ? "black" : "rgb(111, 110, 119)"} >{props.subtitle}</Text>
            </Flex>
        </Flex>
    )
}

export default Task;