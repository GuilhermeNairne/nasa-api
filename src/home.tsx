import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import nasa1 from './assets/nasa1.jpg';
import nasaLogo from './assets/nasa-logo.svg';
import meteoro from './assets/meteoro.jpg';
import meteoro2 from './assets/meteoro2.png';
import galaxia from './assets/galaxia2.png';
import { Formik } from 'formik';

export function Home() {
  return (
    <Flex w={'full'} h={'full'} flexDir={'column'}>
      <Box
        flexDir={'column'}
        bg={'#07001b'}
        w={'full'}
        h={'130px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Img w={'100px'} h={'80px'} src={nasaLogo} mb={'10px'} />
        <HStack spacing={5}>
          <Text color={'white'} fontSize={'lg'}>
            Opção 1
          </Text>
          <Text color={'white'} fontSize={'lg'}>
            Opção 2
          </Text>
          <Text color={'white'} fontSize={'lg'}>
            Opção 3
          </Text>
        </HStack>
      </Box>
      <Box
        w={'full'}
        h={'400px'}
        bgImage={galaxia}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDir={'column'}
      >
        <Text fontSize={'60px'} fontWeight={'bold'} color={'white'}>
          NASA-API
        </Text>
        <Text fontSize={'lgpx'} color={'white'}>
          Meteoros próximos da terra, informações climáticas espacial e
          terrestre, foto astronomica do dia
        </Text>
      </Box>
      {/* <Img w={'full'} h={'400px'} src={nasa1} /> */}
      <Stack
        bg={'white'}
        w={'full'}
        minH={'200px'}
        p={'20px'}
        alignItems={'center'}
        flexDir={'column'}
      >
        <Text fontSize={'2xl'} fontWeight={'bold'} color={'#d1313d'}>
          PESQUISE POR METEÓROS
        </Text>
        <Text fontSize={'md'} color={'black'}>
          Informa a da de início e data final para bucar asteróides mais próxima
          da Terra
        </Text>

        <HStack mt={'20px'}>
          <Formik initialValues={initialValues} onSubmit={handleSave}>
            <Input
              w={'150px'}
              h={'30px'}
              borderRadius={'10px'}
              bg={'#E2E2E2'}
              placeholder="Data de início"
              borderWidth={'1px'}
              borderColor={'#CCCCCC'}
            />
            <Text color={'black'}>a</Text>
            <Input
              w={'150px'}
              h={'30px'}
              borderRadius={'10px'}
              bg={'#E2E2E2'}
              placeholder="Data final"
              borderWidth={'1px'}
              borderColor={'#CCCCCC'}
            />
            <Button
              w={'110px'}
              h={'30px'}
              borderRadius={'10px'}
              bg={'#d1313d'}
              _hover={{ opacity: 0.8 }}
            >
              <Text color={'white'} fontWeight={'bold'}>
                Buscar
              </Text>
            </Button>
          </Formik>
        </HStack>
      </Stack>
    </Flex>
  );
}
