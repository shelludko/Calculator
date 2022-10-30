import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

const App = () => {
    const [counts, setCounts] = useState('0');
    const [result, setResult] = useState('');

    const applyExpression = (countedNumber) => {
        setCounts(countedNumber);
        setResult(eval(counts));
    };

    const Numbers = (props) => {
        const handleInnerNumbers = (event) => {
            if (props.data !== '0') {
                props.onClick(props.data + event.target.innerHTML);
            } else {
                props.onClick(event.target.innerHTML);
            }
        };
        const nums = Array.from(Array(10).keys()).map((number) => {
            return (
                <Button
                    onClick={handleInnerNumbers}
                    key={number}
                    w="40px"
                    h="40px"
                    margin="4px"
                    border="1px solid lightgray"
                >
                    {number}
                </Button>
            );
        });
        return (
            <Box display="flex" flexWrap="wrap" w="45%">
                {nums}
            </Box>
        );
    };

    const CountButton = (props) => {
        const handleExpression = () => {
            props.onClick(props.data + props.expression);
        };

        return (
            <Button onClick={handleExpression} border="1px solid lightgray">
                {props.expression}
            </Button>
        );
    };

    return (
        <div className="App">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                h="100vh"
            >
                <Box
                    display="flex"
                    gap="5px"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    h="200px"
                >
                    <Box display="flex" w="100%" justifyContent="space-between">
                        <Text
                            display="flex"
                            justifyContent="start"
                            alignItems="center"
                            bg="gray.50"
                            w="100%"
                            h="38px"
                            px="4px"
                            borderRadius="8px"
                            border="1px solid lightgray"
                        >
                            {counts}
                        </Text>
                        <Text w="fit-content" h="38px" textColor="tomato">
                            {result}
                        </Text>
                    </Box>
                    <Numbers data={counts} onClick={setCounts} />
                    <Box display="flex">
                        <CountButton
                            data={counts}
                            expression={'+'}
                            onClick={applyExpression}
                        />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default App;
