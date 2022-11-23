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

interface ITelaImobiliaria {
  type: "ADD" | "EDIT";
  imobiliaria?: IImobiliariaData;
  onChangeImobiliaria: () => void;
}

const TelaFormImobiliaria = ({
  imobiliaria,
  type,
  onChangeImobiliaria,
}: ITelaImobiliaria) => {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const handleSubmitImobiliaria = async (form: Partial<IImobiliariaData>) => {
    try {
      setLoading(true);
      const payload = {
        id: form.id,
        cnpj: form.cnpj,
        cep: form.cep,
        logradouro: form.logradouro,
        bairro: form.bairro,
        cidade: form.cidade,
        uf: form.uf,
        creciVendedor: form.creciVendedor,
      };
      await api.post("/Imobiliaria", payload);
      onChangeImobiliaria();
      Alert.alert("Adicionado com sucesso");
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao adicionar");
    } finally {
      setLoading(false);
    }
  };

  const handleEditImobiliaria = async (form: Partial<IImobiliariaData>) => {
    try {
      setLoading(true);
      const payload = {
        id: form.id ? form.id : imobiliaria?.id,
        cnpj: form.cnpj ? form.cnpj : imobiliaria?.cnpj,
        logradouro: form.logradouro ? form.logradouro : imobiliaria?.logradouro,
        bairro: form.bairro ? form.bairro : imobiliaria?.bairro,
        cidade: form.cidade ? form.cidade : imobiliaria?.cidade,
        uf: form.uf ? form.uf : imobiliaria?.uf,
        creciVendedor: form.creciVendedor,
      };
      await api.put(`/Imobiliaria/${imobiliaria?.id}`, payload);
      onChangeImobiliaria();
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
              <TitlePage>Adicionar imobiliária</TitlePage>
            ) : (
              <TitlePage>Editar imobiliária</TitlePage>
            )}
          </ContentSubMenu>
          <ScrollView>
            <Form>
              <Fields>
                <InputForm
                  placeholder="CNPJ"
                  name="cnpj"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                  defaultValue={imobiliaria?.cnpj}
                />
                <InputForm
                  placeholder="CEP"
                  name="cep"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                  defaultValue={imobiliaria?.cep}
                />
                <InputForm
                  placeholder="Logradouro"
                  name="logradouro"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                  defaultValue={imobiliaria?.logradouro}
                />
                <InputForm
                  placeholder="Bairro"
                  name="bairro"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                  defaultValue={imobiliaria?.bairro}
                />
                <InputForm
                  placeholder="Cidade"
                  name="cidade"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                  defaultValue={imobiliaria?.cidade}
                />
                <InputForm
                  placeholder="Estado"
                  name="uf"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                  defaultValue={imobiliaria?.uf}
                />
                <InputForm
                  placeholder="CRECI"
                  name="creci"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                  defaultValue={imobiliaria?.creciVendedor}
                />
              </Fields>

              <ContentButton>
                <Button
                  title="Enviar"
                  onPress={handleSubmit(
                    type === "ADD"
                      ? handleSubmitImobiliaria
                      : handleEditImobiliaria
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

export default TelaFormImobiliaria;
