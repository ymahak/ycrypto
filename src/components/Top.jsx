import {Button , HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const Top = () => {
  return <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} >
    <Button w={"20"} variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
    </Button>
    <Button w={"20"} variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
    </Button>
    <Button w={"20"} variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
    </Button>
  </HStack>
};


export default Top
