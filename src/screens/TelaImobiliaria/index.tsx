import React, { useState } from "react";
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
  Description,
  HR,
  SubDescription,
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
  ContentSelect,
  Right,
} from "../TelaSelecionarCruds/styles";
import TelaFormImobiliaria from "../TelaFormImobiliaria";
import api from "../../services/api";

const TelaImobiliaria = () => {
  const [imobiliaria, setImobiliaria] = useState<IImobiliariaData[]>([
    {
      id: 2,
      cnpj: "0123456789",
      cep: "0505050",
      logradouro: "rua tal 1",
      bairro: "Mamiorgfsd",
      cidade: "londrina",
      uf: "pr",
      creciVendedor: "123",
    },
  ]);

  const onDeleteImobiliaria = async (id: number) => {
    try {
      await api.delete(`/employee/${id}`);
      Alert.alert("Imobiliaria removido com sucesso");
    } catch {
      Alert.alert("Erro ao remover imobiliaria");
    }
  };

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
              children={<TelaFormImobiliaria type="ADD" />}
              title="cadastrar"
            />
          </ContentSubMenu>

          <ContentListImage>
            <ViewBox>
              <Box source={FotoExemplo} />
            </ViewBox>
            <Description>Descrição da imobiliária</Description>
            <SubDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </SubDescription>

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
                              children={<TelaFormImobiliaria type="EDIT" />}
                              title="Editar"
                            />
                            <Right name="delete" size={24} color="red" onPress={onDeleteImobiliaria}/>
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
