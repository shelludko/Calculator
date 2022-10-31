/* eslint-disable no-useless-escape */
/* eslint-disable no-eval */
import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

const ClickCalc = () => {
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
      const reset = () => {
          setResult('');
          setCounts('0');
      };
      const nums = Array.from(Array(10).keys()).map((number) => {
          return (
              <Button
                  onClick={handleInnerNumbers}
                  key={number}
                  fontSize="2xl"
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
          <Box display="flex" flexWrap="wrap" w="40%">
              {nums}
              <Button
                  w="40px"
                  fontSize="2xl"
                  border="1px solid gray"
                  m="4px"
                  bg="gray.50"
                  onClick={reset}
              >
                  C
              </Button>
              <Button
                  w="40px"
                  fontSize="2xl"
                  border="1px solid red"
                  m="4px"
                  bg="tomato"
                  onClick={() => {
                      setResult(eval(counts));
                  }}
              >
                  =
              </Button>
          </Box>
      );
  };

  const CountButton = (props) => {
      const expressions = /\+|\-|\/|\*| /;
      const lastNumber = props.data[props.data.length - 1];
      const handleExpression = () => {
          if (!expressions.test(lastNumber)) {
              return props.onClick(props.data + props.expression);
          }
      };

      return (
          <Button
              onClick={handleExpression}
              fontSize="2xl"
              border="1px solid #96a3a8"
              bg="lightblue"
              w="20px"
          >
              {props.expression}
          </Button>
      );
  };

  return (
      
          <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              h="100vh"
          >
              <Box
                  display="flex"
                  gap="10px"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
              >
                  <Box
                      display="flex"
                      w="250px"
                      justifyContent="space-between"
                      alignItems="center"
                      borderRadius="8px"
                      border="1px solid lightgray"
                      bg="gray.50"
                      px="5px"
                  >
                      <Text
                          display="flex"
                          alignItems="center"
                          width="100%"
                          h="38px"
                          fontSize="2xl"
                      >
                          {counts}
                      </Text>
                      <Text
                          display="flex"
                          w="fit-content"
                          h="38px"
                          textColor="tomato"
                          alignItems="center"
                          fontSize="2xl"
                      >
                          {result}
                      </Text>
                  </Box>
                  <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      ms="38px"
                  >
                      <Numbers data={counts} onClick={setCounts} />

                      <Box display="flex" gap="8px" mt="5px" w="38%">
                          <CountButton
                              data={counts}
                              expression={'+'}
                              onClick={applyExpression}
                          />
                          <CountButton
                              data={counts}
                              expression={'-'}
                              onClick={applyExpression}
                          />
                          <CountButton
                              data={counts}
                              expression={'*'}
                              onClick={applyExpression}
                          />
                          <CountButton
                              data={counts}
                              expression={'/'}
                              onClick={applyExpression}
                          />
                      </Box>
                  </Box>
              </Box>
          </Box>
      
  );
 };

export default ClickCalc;