import { Heading, Box, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack borderRadius={10} backgroundColor="HighlightText" textColor="black">
      <Image src={imageSrc} borderTopRadius={10} />
      <Box padding={5} textColor="">
        <Heading as="h3" size="md" marginBottom={4}>
          {title}
        </Heading>
        <Text>{description}</Text>
        <Link href="#" marginTop={4} display="flex" alignItems="center" gap={3}>
          See more <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </Box>
  </VStack>
  );
};

export default Card;
