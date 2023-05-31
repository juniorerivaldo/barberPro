import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";
import { canSSRAuth } from "@/src/utils/canSSRAuth";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>barberPro - Minha barbearia</title>
      </Head>
      <Flex>
        <Text>BEM VINDO AO DASHBOARD</Text>
      </Flex>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
 