import { useState } from "react"
import { Input, Text, Button, Row, Column, List, Logo, Icon } from "components"

export const Home = () => {
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState<{ label: string }[]>([]);

    const handleOKButton = () => {
        if(!taskName) return;

        setTasks((previous) => {
            const copy = [...previous];
            copy.push({ label: taskName });
            return copy;
        });
        setTaskName('');
    }

    return (
        <Column width='600px' margin='0 auto'>
            <Column width='100%' py='25px' alignItems='center'>
                <Logo />
            </Column>

            <Column width="100%" minHeight="300px" p='20px' bg='rgba(255, 255, 255, 0.2)' borderRadius='4px' alignItems='center'>
                <Text fontFamily='secundary' fontSize='bodyExtraLarge'>Ready</Text>
                
                <Text fontFamily='secundary' fontSize='displayExtraLarge' fontWeight='bold' py='40px'>25:00</Text>

                <Button variant="primary">
                    <Text fontFamily='secundary' fontSize='bodyExtraLarge' fontWeight='bold' color="primary" >START</Text>
                </Button>

                <Button variant='primary'>
                    <Icon variant="done" />
                </Button>
            </Column>
            <Text my='10px' fontSize='bodyLarge' fontWeight="bold" pl='10px'>Tasks</Text>
            <Row width='100%'>
                <Input flex={1} placeholder="Enter a task name here..." value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                <Button onClick={handleOKButton}>OK</Button>
            </Row>

            <List items={tasks}/>
        </Column>
    )
}