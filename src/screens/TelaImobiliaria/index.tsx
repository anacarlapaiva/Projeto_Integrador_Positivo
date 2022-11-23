import React, { useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "../../components/Header";
import { ContentSubMenu, TitlePage } from "../Home/styles";
import {
  Box,
  Container,
  ContentListImage,
  HR,
  Title,
  ViewBox,
  TextList,
  ContentTop,
  ContentButton,
} from "./styles";

import FotoExemplo from "../../assets/example.png";
import ModalContent from "../../components/Modal";
import {
  ContentList,
  ContentOptions,
  Right,
} from "../TelaSelecionarCruds/styles";
import TelaFormImobiliaria from "../TelaFormImobiliaria";
import axios from "axios";

const TelaImobiliaria = () => {
  const [imobiliaria, setImobiliaria] = useState<IImobiliariaData[]>([
    {
      id: 1,
      cnpj: "123456789",
      cep: "86025520",
      logradouro: "Rua mamore",
      bairro: "Vila Mariana",
      cidade: "Londrina",
      uf: "PR",
      creciVendedor: "123456789",
    },
    {
      id: 2,
      cnpj: "5555555",
      cep: "86025520",
      logradouro: "Rua mamore",
      bairro: "Vila Mariana",
      cidade: "Londrina",
      uf: "PR",
      creciVendedor: "123456789",
    },
  ]);

  const onDeleteImobiliaria = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/Imobiliaria/${id}`);
      Alert.alert("Imobiliaria removido com sucesso");
    } catch {
      Alert.alert("Erro ao remover imobiliaria");
    }
  };

  const onChangeImobiliaria = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/Imobiliaria");
      if (data) {
        setImobiliaria(data);
      } else {
        Alert.alert("Não há lojas adicionadas");
      }
      console.log(data);
    } catch (err: any) {
      console.log("ERRO:" + err);
    }
  };

  useEffect(() => {
    onChangeImobiliaria();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <Header />
          <ContentSubMenu>
            <TitlePage>Imobiliária</TitlePage>
            <ModalContent
              children={
                <TelaFormImobiliaria
                  onChangeImobiliaria={onChangeImobiliaria}
                  type="ADD"
                />
              }
              title="cadastrar"
            />
          </ContentSubMenu>

          <ContentListImage>
            <ViewBox>
              <Box source={FotoExemplo} />
            </ViewBox>

            <ScrollView>
              {imobiliaria?.map((imob, key) => {
                return (
                  <ContentList key={key}>
                    <ContentOptions
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <HR>
                        <ContentTop>
                          <Title>Informações: </Title>

                          <ContentButton>
                            <ModalContent
                              children={
                                <TelaFormImobiliaria
                                  type="EDIT"
                                  onChangeImobiliaria={onChangeImobiliaria}
                                />
                              }
                              title="Editar"
                            />
                            <Right
                              name="delete"
                              size={24}
                              color="red"
                              onPress={onDeleteImobiliaria}
                            />
                          </ContentButton>
                        </ContentTop>
                        <TextList>ID: {imob.id}, </TextList>
                        <TextList>cnpj: {imob.cnpj}, </TextList>
                        <TextList>cep: {imob.cep}, </TextList>
                        <TextList>logradouro: {imob.logradouro}, </TextList>
                        <TextList>bairro: {imob.bairro}, </TextList>
                        <TextList>cidade: {imob.cidade}, </TextList>
                        <TextList>estado: {imob.uf}, </TextList>
                        <TextList>creci: {imob.creciVendedor}</TextList>
                      </HR>
                    </ContentOptions>
                  </ContentList>
                );
              })}
            </ScrollView>
          </ContentListImage>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TelaImobiliaria;
