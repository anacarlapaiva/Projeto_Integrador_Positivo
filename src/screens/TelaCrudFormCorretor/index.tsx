import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import api from "../../services/api";
import {
  Container,
  ContentButton,
  ContentSubMenu,
  Fields,
  Form,
  TitlePage,
} from "./styles";

interface ITelaCrudEditarVendedorProps {
  type: "ADD" | "EDIT";
  corrector?: ICorrectorData;
  onChangeCorretor: () => void;
}

const TelaCrudEditarVendedor = ({
  corrector,
  type,
  onChangeCorretor
}: ITelaCrudEditarVendedorProps) => {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const handleSubmitCorrector = async (form: Partial<ICorrectorData>) => {
    try {
      setLoading(true);
      const payload = {
        id: form.id,
        documento: form.documento,
        nome: form.nome,
        imoveis: form.creci,
        endereco: form.endereco,
        telefone: form.telefone,
        nascimento: form.data,
      };
      await api.post("/Corretor", payload);
      onChangeCorretor();
      Alert.alert("Adicionado com sucesso");
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao adicionar");
    } finally {
      setLoading(false);
    }
  };

  const handleEditCorrector = async (form: Partial<ICorrectorData>) => {
    try {
      setLoading(true);
      const payload = {
        id: form.id ? form.id : corrector?.id,
        documento: form.documento ? form.documento : corrector?.documento,
        nome: form.nome ? form.nome : corrector?.nome,
        imoveis: form.creci ? form.creci : corrector?.creci,
        endereco: form.endereco ? form.endereco : corrector?.endereco,
        telefone: form.telefone ? form.telefone : corrector?.telefone,
        nascimento: form.data ? form.data : corrector?.data,
      };
      await api.put(`/Corretor/${corrector?.id}`, payload);
      onChangeCorretor();
      Alert.alert("Editado com sucesso");
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao editar");
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
              <TitlePage>Adicionar corretor</TitlePage>
            ) : (
              <TitlePage>Editar corretor</TitlePage>
            )}
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
                  defaultValue={corrector?.nome}
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
                  onPress={handleSubmit(
                    type === "ADD" ? handleSubmitCorrector : handleEditCorrector
                  )}
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

export default TelaCrudEditarVendedor;
