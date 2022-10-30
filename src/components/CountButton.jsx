import { Button } from '@chakra-ui/react';

const CountButton = (props) => {
    const handleExpression = () => {
        props.onClick(props.data + props.expression);
    };

    return <Button onClick={handleExpression}>{props.expression}</Button>;
};

export default CountButton;
