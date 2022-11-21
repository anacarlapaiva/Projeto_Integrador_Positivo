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

interface IEditarCategoria {
  documento: string;
  nome: string;
  imoveis: any;
  endereco: string;
  telefone: string;
  nascimento: any;
}

const TelaCrudFormCategoria = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  const handleBack = () => {
    //@ts-ignore
    navigation.navigate("LocationScreen");
  };

  const handleSubmitCategoria = async (form: Partial<IEditarCategoria>) => {
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
            <TitlePage>Adicionar imóvel</TitlePage>
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
                  placeholder="Descrição"
                  name="descricao"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                />
               
              </Fields>

              <ContentButton>
                <Button
                  title="Enviar"
                  onPress={handleSubmit(handleSubmitCategoria)}
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

export default TelaCrudFormCategoria;
