import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import ClickCalc from './ClickCalc';
import InputCalc from './InputCalc';

const Calculator = () => {
    const [calcType, setCalcType] = useState('ClickCalc');
    let calculator;

    switch (calcType) {
        case 'ClickCalc':
            calculator = <ClickCalc />;
            break;
        case 'InputCalc':
            calculator = <InputCalc />;
            break;
        default:
            calculator = <ClickCalc />;
    }
  
  const calcTypeChange = () => {
    return calcType === 'ClickCalc' ? setCalcType('InputCalc') : setCalcType('ClickCalc')
  };
  
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            m="10px"
        >
            <Button onClick={calcTypeChange}>Режим</Button>
            <Box>{calculator}</Box>
        </Box>
    );
};

export default Calculator;
