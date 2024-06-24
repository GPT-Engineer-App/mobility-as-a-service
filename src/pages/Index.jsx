import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaCar, FaBus, FaBicycle, FaWalking } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="brand.700">
          Mobility as a Service
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Seamless urban mobility solutions for everyone.
        </Text>
        <Flex justifyContent="center" wrap="wrap" spacing={4}>
          <Box p={4} textAlign="center">
            <FaCar size="3em" color="brand.700" />
            <Text mt={2}>Car</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaBus size="3em" color="brand.700" />
            <Text mt={2}>Bus</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaBicycle size="3em" color="brand.700" />
            <Text mt={2}>Bicycle</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaWalking size="3em" color="brand.700" />
            <Text mt={2}>Walking</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;