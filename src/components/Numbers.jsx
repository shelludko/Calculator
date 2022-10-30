import { Box, Button } from '@chakra-ui/react';

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
            >
                {number}
            </Button>
        );
    });
    return (
        <Box display="flex" flexWrap="wrap" w="8%">
            {nums}
        </Box>
    );
};

export default Numbers;
