import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "../../components/Header";
import { ContentSubMenu, SeeAll, TextBottom, TitlePage } from "../Home/styles";
import {
  Box,
  Container,
  ContentListImage,
  Description,
  SubDescription,
  ViewBox,
} from "./styles";

import FotoExemplo from "../../assets/example.png";
import ModalContent from "../../components/Modal";
import TelaCrudFormImovel from "../TelaCrudFormImovel";
import {
  ContentList,
  ContentOptions,
  ContentSelect,
  Right,
  TextList,
} from "../TelaSelecionarCruds/styles";
import TelaFormImobiliaria from "../TelaFormImobiliaria";

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
              {imobiliaria?.map((imob) => {
                return (
                  <ContentList>
                    <ContentOptions>
                      <TextList>ID: {imob.id}, </TextList>
                      <TextList>cnpj: {imob.cnpj}, </TextList>
                      <TextList>cep: {imob.cep}, </TextList>
                      <TextList>logradouro: {imob.logradouro}, </TextList>
                      <TextList>bairro: {imob.bairro}, </TextList>
                      <TextList>cidade: {imob.cidade}, </TextList>
                      <TextList>estado: {imob.uf}, </TextList>
                      <TextList>creci: {imob.creciVendedor}</TextList>
                      <ContentSelect>
                        <ModalContent
                          children={<TelaFormImobiliaria type="EDIT" />}
                          title="cadastrar"
                        />
                        <Right name="delete" size={24} color="red" />
                      </ContentSelect>
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
