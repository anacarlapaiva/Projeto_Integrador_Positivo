import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
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
import api from "../../services/api";
import TelaCrudEditarVendedor from "../TelaCrudEditarVendedor";
import TelaCrudFormCategoria from "../TelaCrudFormCategoria";
import TelaCrudEditarCategoria from "../TelaCrudFormCategoria";
import TelaCrudFormCorretor from "../TelaCrudFormCorretor";
import TelaCrudFormImovel from "../TelaCrudFormImovel";
import TelaCrudFormimovel from "../TelaCrudFormImovel";
import {
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
  const [categoria, setCategoria] = useState<ICategoryData[]>([
    { id: 1, descricao: "dahsouihfiuahf" },
    { id: 2, descricao: "dahsouihfiuahf" },
    { id: 3, descricao: "dahsouihfiuahf" },
  ]);
  const [imovel, setImovel] = useState<IImovelData[]>([
    {
      idImovel: 1,
      metrosQuadradosImovel: "123",
      metrosQuadradosTerreno: "200",
      valorImovel: "R$200.000",
      status: true,
    },
  ]);

  const onDelete = async (id: number) => {
    try {
      await api.delete(`/employee/${id}`);
      Alert.alert("Removido com sucesso!");
    } catch {
      Alert.alert("Erro ao remover");
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
                              <Right
                                name="delete"
                                size={24}
                                color="red"
                                onPress={onDelete}
                              />
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
                  {correctors?.map((corrector, key) => {
                    return (
                      <ContentList key={key}>
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
                            <Right
                              name="delete"
                              size={24}
                              color="red"
                              onPress={onDelete}
                            />
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
              <ContainerFunctions>
                <ContentAdd>
                  <ModalContent
                    children={<TelaCrudFormImovel type="ADD" />}
                    title="Adicionar imóvel"
                  />

                  <ScrollView alwaysBounceVertical>
                    {imovel?.map((imovel, key) => {
                      return (
                        <ContentList key={key}>
                          <ContentOptions>
                            <TextList>{imovel.idImovel}</TextList>
                            <TextList>{imovel.metrosQuadradosImovel}</TextList>
                            <TextList>{imovel.metrosQuadradosTerreno}</TextList>
                            <TextList>{imovel.status}</TextList>
                            <ContentSelect>
                              <ModalContent
                                children={
                                  <TelaCrudFormImovel
                                    imovel={imovel}
                                    type="EDIT"
                                  />
                                }
                                title="Editar"
                              />
                              <Right
                                name="delete"
                                size={24}
                                color="red"
                                onPress={onDelete}
                              />
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
          {step === 5 && (
            <ScrollView>
              <ContentSubMenu>
                <TitlePage>Escolha sua opção</TitlePage>
                <SeeAll onPress={() => setStep((prev) => prev - 4)}>
                  voltar
                </SeeAll>
              </ContentSubMenu>
              <ContainerFunctions>
                <ContentAdd>
                  <ModalContent
                    children={<TelaCrudFormCategoria type="ADD" />}
                    title="Adicionar categoria"
                  />

                  <ScrollView alwaysBounceVertical>
                    {categoria?.map((categoria, key) => {
                      return (
                        <ContentList key={key}>
                          <ContentOptions>
                            <TextList>{categoria.id}</TextList>
                            <TextList>{categoria.descricao}</TextList>
                            <ContentSelect>
                              <ModalContent
                                children={
                                  <TelaCrudEditarCategoria
                                    categoria={categoria}
                                    type="EDIT"
                                  />
                                }
                                title="Editar"
                              />
                              <Right
                                name="delete"
                                size={24}
                                color="red"
                                onPress={onDelete}
                              />
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
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TelaSelecionarCruds;
