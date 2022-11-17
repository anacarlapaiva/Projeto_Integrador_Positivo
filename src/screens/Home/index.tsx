import React, { useState } from "react";
import Header from "../../components/Header";
import {
  Box,
  ViewBox,
  Container,
  ContentListImage,
  ContentSearch,
  ContentSubMenu,
  IconSearch,
  SearchInput,
  SeeAll,
  TitlePage,
  TextBottom,
} from "./styles";

import FotoExemplo from "../../assets/example.png";
import { ScrollView } from "react-native-gesture-handler";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <Container>
      <Header />
      <ContentSearch>
        <IconSearch name="search" size={24} />
        <SearchInput
          placeholderTextColor={"#808B98"}
          placeholder="Pesquisar"
          value={search}
          onChangeText={setSearch}
          underlineColorAndroid="transparent"
        />
      </ContentSearch>
      <ContentSubMenu>
        <TitlePage>Escolha sua opção</TitlePage>
        <SeeAll>Ver todos</SeeAll>
      </ContentSubMenu>
      <ScrollView>
        <ContentListImage>
          <ViewBox>
            <Box source={FotoExemplo} />
            <TextBottom>Apartamento</TextBottom>
          </ViewBox>
          <ViewBox>
            <Box source={FotoExemplo} />
            <TextBottom>Apartamento</TextBottom>
          </ViewBox>
          <ViewBox>
            <Box source={FotoExemplo} />
            <TextBottom>Apartamento</TextBottom>
          </ViewBox>
          <ViewBox>
            <Box source={FotoExemplo} />
            <TextBottom>Apartamento</TextBottom>
          </ViewBox>
          <ViewBox>
            <Box source={FotoExemplo} />
            <TextBottom>Apartamento</TextBottom>
          </ViewBox>
          <ViewBox>
            <Box source={FotoExemplo} />
            <TextBottom>Apartamento</TextBottom>
          </ViewBox>
        </ContentListImage>
      </ScrollView>
    </Container>
  );
};

export default Home;
