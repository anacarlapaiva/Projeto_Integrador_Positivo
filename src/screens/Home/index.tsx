import React, { useState } from 'react'
import { Text } from 'react-native'
import Header from '../../components/Header'
import { Container, ContentSearch, ContentSubMenu, IconSearch, SearchInput, SeeAll, TitlePage } from './styles'

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <Container>
      <Header />
      <ContentSearch>
        <IconSearch name="search" size={24} />
        <SearchInput
          placeholderTextColor={"#808B98"}
          placeholder='Pesquisar'
          value={search}
          onChangeText={setSearch}
          underlineColorAndroid="transparent"
        />
      </ContentSearch>
      <ContentSubMenu>
        <TitlePage>Escolha sua opção</TitlePage>
        <SeeAll>Ver todos</SeeAll>
      </ContentSubMenu>
    </Container>
  )
}

export default Home