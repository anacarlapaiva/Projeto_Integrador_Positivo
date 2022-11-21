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

interface IEditarCorretor {
  documento: string;
  nome: string;
  imoveis: any;
  endereco: string;
  telefone: string;
  nascimento: any;
}

const TelaCrudFormCorretor = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  const handleBack = () => {
    //@ts-ignore
    navigation.navigate("LocationScreen");
  };

  const handleSubmitCorretor = async (form: Partial<IEditarCorretor>) => {
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
            <TitlePage>Adicionar corretor</TitlePage>
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
                  placeholder="CRECI"
                  name="creci"
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
                  onPress={handleSubmit(handleSubmitCorretor)}
                  loading={loading}
                  enabled={!loading}
                  style={{backgroundColor: '#a0bbe980'}}
                />
              </ContentButton>
            </Form>
          </ScrollView>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TelaCrudFormCorretor;
