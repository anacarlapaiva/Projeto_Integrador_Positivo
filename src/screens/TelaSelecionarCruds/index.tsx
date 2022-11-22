import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ISellerData } from "../../@types/Seller";
import Header from "../../components/Header";
import ModalContent from "../../components/Modal";
import TelaCrudEditarVendedor from "../TelaCrudEditarVendedor";
import TelaCrudFormCorretor from "../TelaCrudFormCorretor";
import TelaCrudFormimovel from "../TelaCrudFormImovel";
import TelaCrudFormImovel from "../TelaCrudFormImovel";
import {
  ButtonOptions,
  Container,
  ContainerFunctions,
  ContentAdd,
  ContentList,
  ContentOptions,
  ContentSelect,
  ContentStore,
  ContentSubMenu,
  Right,
  SeeAll,
  TextList,
  TitlePage,
} from "./styles";

const TelaSelecionarCruds = () => {
  const [step, setStep] = useState(1);
  const [sellers, setSellers] = useState<ISellerData[]>([
    { nome: "João Bobão" },
    { nome: "Camila Pereira " },
    { nome: "Lucas Abreu" },
    { nome: "Pedro Henrique " },
    { nome: "Manoela Almeida" },
  ]);
  const [correctors, setCorrectors] = useState<ICorrectorData[]>([
    { nome: "João Bobão" },
    { nome: "Camila Pereira " },
    { nome: "Lucas Abreu" },
    { nome: "Pedro Henrique " },
    { nome: "Manoela Almeida" },
  ]);
  const navigation = useNavigation();

  const handleChangeStore = () => {
    //@ts-ignore
    navigation.navigate("TelaCrudEditarVendedor");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <Header />
          {step === 1 && (
            <ScrollView>
              <ContentStore>
                <Text>Vendedor</Text>
                <Right
                  name="right"
                  size={24}
                  onPress={() => setStep((prev) => prev + 1)}
                />
              </ContentStore>
              <ContentStore>
                <Text>Corretor</Text>
                <Right
                  name="right"
                  size={24}
                  onPress={() => setStep((prev) => prev + 2)}
                />
              </ContentStore>
              <ContentStore>
                <Text>Imóvel</Text>
                <Right
                  name="right"
                  size={24}
                  onPress={() => setStep((prev) => prev + 3)}
                />
              </ContentStore>
              <ContentStore>
                <Text>Categoria</Text>
                <Right
                  name="right"
                  size={24}
                  onPress={() => setStep((prev) => prev + 4)}
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
                <ContentAdd>
                  <ModalContent
                    children={<TelaCrudEditarVendedor type="ADD" />}
                    title="Adicionar usuário"
                  />

                  <ScrollView alwaysBounceVertical>
                    {sellers?.map((seller, key) => {
                      return (
                        <ContentList key={key}>
                          <ContentOptions>
                            <TextList>{seller.nome}</TextList>
                            <ContentSelect>
                              <ModalContent
                                children={
                                  <TelaCrudEditarVendedor
                                    seller={seller}
                                    type="EDIT"
                                  />
                                }
                                title="Editar"
                              />
                              <Right name="delete" size={24} color="red" />
                            </ContentSelect>
                          </ContentOptions>
                        </ContentList>
                      );
                    })}
                  </ScrollView>
                </ContentAdd>
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
              <ContentAdd>
                <ModalContent
                  children={<TelaCrudFormCorretor type="ADD" />}
                  title="Adicionar corretor"
                />

                <ScrollView alwaysBounceVertical>
                  {correctors?.map((corrector) => {
                    return (
                      <ContentList>
                        <ContentOptions>
                          <TextList>{corrector.nome}</TextList>
                          <ContentSelect>
                            <ModalContent
                              children={
                                <TelaCrudFormCorretor
                                  corrector={corrector}
                                  type="EDIT"
                                />
                              }
                              title="Editar"
                            />
                            <Right name="delete" size={24} color="red" />
                          </ContentSelect>
                        </ContentOptions>
                      </ContentList>
                    );
                  })}
                </ScrollView>
              </ContentAdd>
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
              <ContentAdd>
                <ModalContent
                  children={<TelaCrudFormimovel type="ADD" />}
                  title="Adicionar Imóvel"
                />
              </ContentAdd>
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

export default TelaSelecionarCruds;
