/* eslint-disable no-eval */
/* eslint-disable no-useless-escape */
import { Box, Text, Input } from '@chakra-ui/react';
import { useState } from 'react';

const InputCalc = () => {
    const [result, setResult] = useState('');

    const updateCounts = (e) => {
        const expressions = /\+|\-|\/|\*|=|[A-z]|/;
        const lastNumber = e.target.value[e.target.value.length - 1];
        if (!expressions.test(lastNumber)) {
            return;
        } else {
            setResult(eval(e.target.value));
        }
    };
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            h="80vh"
        >
            <Box
                display="flex"
                gap="10px"
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
            >
                <Text>Введите выражение:</Text>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    border="2px solid gray.50"
                    borderRadius="8px"
                >
                    <Input
                        borderRadius="8px"
                        border="1px solid lightgray"
                        bg="gray.50"
                        px="5px"
                        type="text"
                        onInput={(e) => updateCounts(e)}
                    />
                    &nbsp;
                    <Text>=</Text>
                    <Text textColor="tomato" px="8px">
                        {result}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default InputCalc;
