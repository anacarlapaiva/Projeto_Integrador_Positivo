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
import {
  Container,
  ContentButton,
  ContentSubMenu,
  Fields,
  Form,
  TitlePage,
} from "./styles";

interface ITelaCrudEditarenderecoProps {
  type: "ADD" | "EDIT";
  endereco?: IEnderecoData;
}

const TelaCrudEditarEndereco = ({
  endereco,
  type,
}: ITelaCrudEditarenderecoProps) => {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const handleSubmitEndereco = async (form: Partial<IEnderecoData>) => {
    try {
      setLoading(true);
      const payload = {
        id: form.id,
        cep: form.cep,
        logradouro: form.logradouro,
        bairro: form.bairro,
        cidade: form.cidade,
        uf: form.uf,
      };
      console.log(payload);
      Alert.alert("Adicionado com sucesso");
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao adicionar");
    } finally {
      setLoading(false);
    }
  };

  const handleEditEndereco = async (form: Partial<IEnderecoData>) => {
    try {
      setLoading(true);
      const payload = {
        id: form.id ? form.id : endereco?.id,
        cep: form.cep ? form.cep : endereco?.cep,
        logradouro: form.logradouro ? form.logradouro : endereco?.logradouro,
        bairro: form.bairro ? form.bairro : endereco?.bairro,
        cidade: form.cidade ? form.cidade : endereco?.cidade,
        uf: form.uf ? form.uf : endereco?.uf,
      };
      console.log(payload);
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
              <TitlePage>Adicionar endereço</TitlePage>
            ) : (
              <TitlePage>Editar endereço</TitlePage>
            )}
          </ContentSubMenu>
          <ScrollView>
            <Form>
              <Fields>
                <ScrollView>
                  <Form>
                    <Fields>
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
                        placeholder="Estado"
                        name="uf"
                        control={control}
                        autoCorrect={false}
                        keyboardType="default"
                      />
                    </Fields>

                    <ContentButton>
                      <Button
                        title="Enviar"
                        onPress={handleSubmit(
                          type === "ADD"
                            ? handleSubmitEndereco
                            : handleEditEndereco
                        )}
                        loading={loading}
                        enabled={!loading}
                      />
                    </ContentButton>
                  </Form>
                </ScrollView>
              </Fields>
            </Form>
          </ScrollView>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TelaCrudEditarEndereco;
