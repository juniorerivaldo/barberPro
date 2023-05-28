import Head from "next/head";
import Image from "next/image";
import logoImg from "../../../public/images/logo.svg";
import { Flex, Text, Center, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    alert("TESTE");
  }

  return (
    <>
      <Head>
        <title>BarberPro- Faça login para acessar</title>
      </Head>
      <Flex
        background={"barber.900"}
        height={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex width={640} direction={"column"} p={14} rounded={8}>
          <Center p={4}>
            <Image
              src={logoImg}
              quality={100}
              width={240}
              alt="logo barber-pro"
            />
          </Center>
          <Input
            background="barber.400"
            variant="filled"
            size="lg"
            placeholder="teste@teste.com"
            type="email"
            mb={3}
            color="white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            background="barber.400"
            variant="filled"
            size="lg"
            placeholder="*********"
            type="text"
            mb={6}
            color="white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            background="button.cta"
            mb={6}
            color={"gray.900"}
            size={"lg"}
            _hover={{ bg: "#ffb13e" }}
            onClick={handleLogin}
          >
            Acessar
          </Button>
          <Center mt={2}>
            <Link href={"/register"}>
              <Text cursor={"pointer"} color={"white"}>
                Ainda não possui conta? <strong>Cadastre-se</strong>
              </Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
