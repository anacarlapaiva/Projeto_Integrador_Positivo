import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputForm from "../../components/InputForm";
import {
  Container,
  ContentButton,
  ContentSubMenu,
  Fields,
  Form,
  SeeAll,
  TitlePage,
} from "./styled";

interface IEditarVendedor {
  documento: string;
  nome: string;
  imoveis: any;
  endereco: string;
  telefone: string;
  nascimento: any;
}

const TelaCrudEditarVendedor = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  const handleSubmitVendedor = async (form: Partial<IEditarVendedor>) => {
    try {
      setLoading(true);
      const payload = {
        documento: form.documento,
        nome: form.nome,
        imoveis: form.imoveis,
        endereco: form.endereco,
        telefone: form.telefone,
        nascimento: form.nascimento,
      };
    } catch {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header />

      <ContentSubMenu>
        <TitlePage>Editar Vendedor</TitlePage>
        <SeeAll onPress={() => navigation.goBack()}>Voltar</SeeAll>
      </ContentSubMenu>

      <Form>
        <Fields>
          <InputForm
            placeholder="Documento"
            name="documento"
            control={control}
            autoCorrect={false}
            keyboardType="default"
          />
          <InputForm
            placeholder="Nome"
            name="nome"
            control={control}
            autoCorrect={false}
            keyboardType="default"
          />
          <InputForm
            placeholder="Imóveis cadastrados"
            name="imoveis"
            control={control}
            autoCorrect={false}
            keyboardType="default"
          />
          <InputForm
            placeholder="Endereço"
            name="endereco"
            control={control}
            autoCorrect={false}
            keyboardType="default"
          />
          <InputForm
            placeholder="Telefone"
            name="telefone"
            control={control}
            autoCorrect={false}
            keyboardType="default"
          />
          <InputForm
            placeholder="Data de nascimento"
            name="nascimento"
            control={control}
            autoCorrect={false}
            keyboardType="decimal-pad"
          />
        </Fields>

        <ContentButton>
          <Button
            title="Enviar"
            onPress={handleSubmit(handleSubmitVendedor)}
            loading={loading}
            enabled={!loading}
          />

          <Button
            title="Cancelar"
            onPress={() => navigation.goBack()}
            loading={loading}
            enabled={!loading}
            style={{ backgroundColor: "red", marginLeft: 10 }}
          />
        </ContentButton>
      </Form>
    </Container>
  );
};

export default TelaCrudEditarVendedor;
