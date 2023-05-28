import Head from "next/head";
import Image from "next/image";
import logoImg from "../../../public/images/logo.svg";
import { Flex, Text, Center, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    alert('TESTE REGISTER')
  }

  return (
    <>
      <Head>
        <title>Crie sua conta no barberPro</title>
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
            placeholder="Nome da Barbearia"
            type="text"
            mb={3}
            color="white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            onClick={handleRegister}
          >
            Cadastrar
          </Button>
          <Center mt={2}>
            <Link href={"/login"}>
              <Text cursor={"pointer"} color={"white"}>
                Já possui conta? <strong>Faça Login</strong>
              </Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
