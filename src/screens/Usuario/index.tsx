import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import ModalContent from "../../components/Modal";
import {
  ButtonOptions,
  Container,
  ContainerFunctions,
  ContentAdd,
  ContentSelect,
  ContentStore,
  ContentSubMenu,
  EditUser,
  Right,
  SeeAll,
  TitlePage,
} from "./styles";

const Usuario = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <EditUser>Editar Usuário</EditUser>
          {step === 1 && (
            <ScrollView>
              <ContentStore>
                <Text>Editar dados</Text>
                <Right
                  name="right"
                  size={24}
                  onPress={() => setStep((prev) => prev + 1)}
                />
              </ContentStore>
            </ScrollView>
          )}

          {step === 2 && (
            <ScrollView>
              <ContentSubMenu>
                <TitlePage>Escolha sua opção</TitlePage>
                <SeeAll onPress={() => setStep((prev) => prev - 1)}>
                  Voltar
                </SeeAll>
              </ContentSubMenu>
              <ContainerFunctions>
                <ContentAdd></ContentAdd>
                <ContentSelect>
                  <Right name="edit" size={24} />
                  <ButtonOptions>Editar</ButtonOptions>
                </ContentSelect>
                <ContentSelect>
                  <Right name="delete" size={24} />

                  <ButtonOptions style={{ color: "red" }}>
                    Deletar
                  </ButtonOptions>
                </ContentSelect>
              </ContainerFunctions>
            </ScrollView>
          )}
          {step === 3 && (
            <ScrollView>
              <ContentSubMenu>
                <TitlePage>Escolha sua opção</TitlePage>
                <SeeAll onPress={() => setStep((prev) => prev - 2)}>
                  Voltar
                </SeeAll>
              </ContentSubMenu>
              <ContentAdd></ContentAdd>
            </ScrollView>
          )}
          {step === 4 && (
            <ScrollView>
              <ContentSubMenu>
                <TitlePage>Escolha sua opção</TitlePage>
                <SeeAll onPress={() => setStep((prev) => prev - 3)}>
                  Voltar
                </SeeAll>
              </ContentSubMenu>
              <ContentAdd></ContentAdd>
            </ScrollView>
          )}
          {step === 5 && (
            <ScrollView>
              <ContentSubMenu>
                <TitlePage>Escolha sua opção</TitlePage>
                <SeeAll onPress={() => setStep((prev) => prev - 4)}>
                  voltar
                </SeeAll>
              </ContentSubMenu>
              <Text>teste 5</Text>
            </ScrollView>
          )}
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Usuario;
