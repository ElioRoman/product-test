import {
  Select,
  Flex,
  Heading,
  Text,
  Button,
  Card,
  Box,
} from "@radix-ui/themes";
import Image from "next/image";
export default function AppleCard({ data }) {
  const { path, title, description } = data;
  return (
    <Box maxWidth="340px">
      <Card>
        <Flex justify="center" align="center" gap="4" wrap="wrap">
          <Image
            src={path}
            alt="Product Image"
            width={120}
            height={120}
            priority={true}
            className="object-fit"
          />
          <Flex direction="column" gap="3">
            <Heading size="4">{title}</Heading>
            <Text>{description}</Text>
            <Flex justify="between">
              <Select.Root defaultValue="1" gap="4">
                <Select.Trigger />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Amount</Select.Label>
                    <Select.Item value="1">1</Select.Item>
                    <Select.Item value="2">2</Select.Item>
                    <Select.Item value="3">3</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
              <Button>Add to Card</Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
}
