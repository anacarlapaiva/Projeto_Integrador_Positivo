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
  TitlePage,
} from "./styles";

interface IEditarEndereco {
  documento: string;
  nome: string;
  imoveis: any;
  endereco: string;
  telefone: string;
  nascimento: any;
}

const TelaCrudFormEndereco = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  const handleBack = () => {
    //@ts-ignore
    navigation.navigate("LocationScreen");
  };

  const handleSubmitEndereco = async (form: Partial<IEditarEndereco>) => {
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
      console.log(payload);
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
          {type === "ADD" ? (
              <TitlePage>Adicionar endereço</TitlePage>
            ) : (
              <TitlePage>Editar endereço</TitlePage>
            )}
          </ContentSubMenu>
          <ScrollView>
            <Form>
              <Fields>
                <InputForm
                  placeholder="ID"
                  name="id"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                />
                <InputForm
                  placeholder="CEP"
                  name="cep"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                />
                <InputForm
                  placeholder="Logradouro"
                  name="logradouro"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                />
                <InputForm
                  placeholder="Bairro"
                  name="bairro"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                />
                <InputForm
                  placeholder="Cidade"
                  name="cidade"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                />
                <InputForm
                  placeholder="UF"
                  name="uf"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                />
                <InputForm
                  placeholder="Complemento"
                  name="complemento"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                />
              </Fields>

              <ContentButton>
                <Button
                  title="Enviar"
                  onPress={handleSubmit(handleSubmitEndereco)}
                  loading={loading}
                  enabled={!loading}
                  style={{ backgroundColor: "#a0bbe980" }}
                />
              </ContentButton>
            </Form>
          </ScrollView>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TelaCrudFormEndereco;
