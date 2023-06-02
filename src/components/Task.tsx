import { Flex, Square, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props{
    title?: string;
    subtitle?:string;
    subitens?: number;
    page?: "Dashboard" | "Project" | "Task"
    status?: string;
    route?: string;
}

const Task = (props: Props) => {

    const navigate = useNavigate();

    const statusColor = (status: string) => {
        switch(status){
            case "PLANNED":
                return "rgb(31, 160, 255)"
            case "IN PROGRESS":
                return "rgb(193, 122, 255)"
            case "COMPLETE":
                return "rgb(108, 211, 69)"
        }
    }

    return(
        <Flex w="100%" >
            <Square border="1px solid" mr="2" borderColor="rgb(228, 226, 228)" size="35px" borderRadius="md" >
                {props.subitens}
            </Square>
            <Flex flexDirection="column" >
                <Text cursor="pointer" onClick={()=>navigate(props.route as string)} fontSize={props.page === "Dashboard" || props.page === "Project" ? "md" : "xl"} w={props.page != "Dashboard" ? "20rem" : "13rem"} mb="1" fontWeight="semibold" >{props.title}</Text>
                {props.page != "Dashboard" && <Text fontSize="xs" fontWeight="bold" mb={props.page === "Task" ? "5" : "0"} color={statusColor(props?.status as string)} >{props?.status}</Text>}
                <Text fontSize={props.page === "Project" || props.page === "Task" ? "md" : "xs"} fontWeight={props.page === "Project" || props.page === "Task" ? "normal" : "bold"} color={props.page === "Task" ? "black" : "rgb(111, 110, 119)"} >{props.subtitle}</Text>
            </Flex>
        </Flex>
    )
}

export default Task;