import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
import {
  Container,
  ContainerFunctions,
  ContentAdd,
  ContentList,
  ContentOptions,
  ContentResponse,
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
    {
      id: 1,
      nome: "Luis Bob",
    },
    {
      id: 2,
      nome: "Marcelo Owada ",
    },
    {
      id: 3,
      nome: "Testee",
    },
  ]);
  const [correctors, setCorrectors] = useState<ICorrectorData[]>([
    {
      id: 1,
      nome: "Filipe Cupini",
    },
    {
      id: 2,
      nome: "Oliveira Vinicius",
    },
    {
      id: 3,
      nome: "Teste",
    },
  ]);
  const [categoria, setCategoria] = useState<ICategoryData[]>([
    {
      descricao: "Lorem ipsum amet",
    },
  ]);
  const [imovel, setImovel] = useState<IImovelData[]>([
    {
      idImovel: 1,
      metrosQuadradosImovel: "120000",
      metrosQuadradosTerreno: "15000",
    },
    {
      idImovel: 2,
      metrosQuadradosImovel: "85441",
      metrosQuadradosTerreno: "15000",
    },
    {
      idImovel: 3,
      metrosQuadradosImovel: "55555",
      metrosQuadradosTerreno: "15000",
    },
  ]);

  const onDelete = async (id: number) => {
    try {
      await api.delete(`http://localhosto:5000/${id}`);
      Alert.alert("Removido com sucesso!");
    } catch {
      Alert.alert("Erro ao remover");
    }
  };

  const onChangeVendedor = async () => {
    try {
      const { data } = await axios.get("http://localhosto:5000/Vendedor");
      setSellers(data);
    } catch (err) {
      console.log(err);
    }
  };
  const onChangeCorretor = async () => {
    try {
      const { data } = await axios.get("http://localhosto:5000/Corretor");
      setCorrectors(data);
    } catch (err) {
      console.log(err);
    }
  };
  const onChangeCategoria = async () => {
    try {
      const { data } = await axios.get("http://localhosto:5000/Categoria");
      setCategoria(data);
    } catch (err) {
      console.log(err);
    }
  };
  const onChangeImovel = async () => {
    try {
      const { data } = await axios.get("http://localhosto:5000/Imovel");
      setImovel(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onChangeVendedor();
    onChangeCorretor();
    onChangeCategoria();
    onChangeImovel();
  }, []);

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
                    children={
                      <TelaCrudEditarVendedor
                        onChangeVendedor={onChangeVendedor}
                        type="ADD"
                      />
                    }
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
                                    onChangeVendedor={onChangeVendedor}
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
                  children={
                    <TelaCrudFormCorretor
                      onChangeCorretor={onChangeCorretor}
                      type="ADD"
                    />
                  }
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
                                  onChangeCorretor={onChangeCorretor}
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
                    children={
                      <TelaCrudFormImovel
                        onChangeImovel={onChangeImovel}
                        type="ADD"
                      />
                    }
                    title="Adicionar imóvel"
                  />

                  <ScrollView alwaysBounceVertical>
                    {imovel?.map((imovel, key) => {
                      return (
                        <ContentList key={key}>
                          <ContentOptions
                            style={{
                              display: "flex",
                              alignItems: "flex-end",
                              borderBottomWidth: 2,
                              borderBottomColor: "#cec6c6",
                              paddingBottom: 30,
                            }}
                          >
                            <ContentResponse>
                              <TextList>ID: {imovel.idImovel}</TextList>
                              <TextList>
                                M2: {imovel.metrosQuadradosImovel}
                              </TextList>
                              <TextList>
                                Terreno: {imovel.metrosQuadradosTerreno}
                              </TextList>
                            </ContentResponse>
                            <ContentSelect>
                              <ModalContent
                                children={
                                  <TelaCrudFormImovel
                                    onChangeImovel={onChangeImovel}
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
                    children={
                      <TelaCrudFormCategoria
                        onChangeCategoria={onChangeCategoria}
                        type="ADD"
                      />
                    }
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
                                    onChangeCategoria={onChangeCategoria}
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
