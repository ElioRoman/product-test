"use client";
import { data } from "./data";
import Card from "./components/Card";
import { Flex, Container } from "@radix-ui/themes";

export default function Home() {
  return (
    <Container py="9">
      <Flex gap="4" wrap="wrap" justify="center" align="center">
        {data.map((el) => (
          <Card data={el} key={el.id} />
        ))}
      </Flex>
    </Container>
  );
}
