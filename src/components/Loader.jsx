import React from 'react'
import { Spinner, VStack } from '@chakra-ui/react'
const Loader = () => {
  return (
    <VStack h={'100vh'} justifyContent={'center'} ><Spinner size='xl'/></VStack>
  )
}

export default Loader