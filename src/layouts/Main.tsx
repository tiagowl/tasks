import { Flex, Container, Square, Icon, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GiDeskLamp } from "react-icons/gi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SiSupabase } from "react-icons/si";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Project } from "../@types/project";
import supabase from "../services/supabase";

const Main = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {id} = useParams();
    const [project, setProject] = useState<Project>();
    const [page, setPage] = useState("");

    const fetchProject = async () => {
        let { data: Projects, error } = await supabase
        .from('Projects')
        .select("*")
        .eq('id', `${id}`);

        if(Projects){
            setProject(Projects[0] as Project);
        }
    }

    const navigateProject = () => {
        if(location.pathname != "/"){
            navigate(`/project/${project?.id}`);
        }
    }


    const currentPage = () => {
        if(location.pathname === "/"){
            return "DASHBOARD";
        }else{
            return project?.name?.toUpperCase();
        }
    }

    useEffect(()=>{
        if(location.pathname != "/"){
            fetchProject();
        }
    }, [])

    return(
        <Flex minH="100vh" maxH="auto" w="100%" flexDirection="column" >
            <Flex w="100%" h="100px" borderBottom="1px solid" borderBottomColor="rgb(228, 226, 228)">
                <Container maxW="container.lg" h="100%" py="3" display="flex" flexDirection="column" justifyContent="space-between" >
                    <Flex>
                        <Square cursor="pointer" onClick={()=>navigate("/")} size="36px" mr="2" border="1px solid" borderColor="rgb(228, 226, 228)" borderRadius="lg">
                            <Icon fontSize="xl" as={SiSupabase} />
                        </Square>
                        <Text fontSize="20px" fontWeight="semibold" >Tasks</Text>
                    </Flex>
                    <Flex w="100%" justifyContent="space-between" >
                        <HStack spacing="6" >
                            <Flex alignItems="center" cursor="pointer" onClick={()=>navigate("/")} >
                                <Icon fontSize="xl" mr="2" color={location.pathname === "/" ? "#4945ff" : "gray.400"} as={CgMenuLeftAlt} />
                                <Text fontSize="xs" color={location.pathname === "/" ? "#4945ff" : "#6f6e77"} fontWeight="bold" >ROADMAP</Text>
                            </Flex>
                            <Flex alignItems="center" cursor={location.pathname == "/" ? "default" : "pointer"} onClick={navigateProject} >
                                <Icon fontSize="xl" mr="2" color={location.pathname != "/" ? "#4945ff" : "gray.400"} as={GiDeskLamp} />
                                <Text fontSize="xs" color={location.pathname != "/" ? "#4945ff" : "#6f6e77"} fontWeight="bold" >{currentPage()}</Text>
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
