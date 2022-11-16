import React, { useEffect, useState } from "react";
import { Container, ContentSearch, IconSearch, SearchInput } from "./styles";

interface IInputSearch {
  placeholder?: string;
  handleSearch: (search: string) => void;
  loading: boolean;
}

const InputSearch: React.FC<IInputSearch> = ({
  loading,
  placeholder,
  handleSearch,
}) => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => handleSearch(search), [search]);

  return (
    <Container>
      <ContentSearch>
        <IconSearch name="search" size={24} color="#FF875E" />
        <SearchInput
          placeholderTextColor={"#808B98"}
          placeholder={placeholder}
          value={search}
          onChangeText={setSearch}
          handleSearch={handleSearch}
          loading={loading}
          underlineColorAndroid="transparent"
        />
      </ContentSearch>
    </Container>
  );
};

export default InputSearch;
