import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/Button";
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
      console.log(payload)
    } catch {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>

          <ContentSubMenu>
            <TitlePage>Editar Vendedor</TitlePage>
            <SeeAll onPress={() => navigation.goBack()}>Voltar</SeeAll>
          </ContentSubMenu>
          <ScrollView>
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
          </ScrollView>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TelaCrudEditarVendedor;
