import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ISellerData } from "../../@types/Seller";
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
  seller?: ISellerData;
  onChangeVendedor: () => void;
}

const TelaCrudEditarVendedor = ({
  seller,
  type,
  onChangeVendedor,
}: ITelaCrudEditarVendedorProps) => {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const handleSubmitSeller = async (form: Partial<ISellerData>) => {
    try {
      setLoading(true);
      const payload = {
        id: form.id,
        documento: form.documento,
        nome: form.nome,
        imoveis: form.imoveis,
        endereco: form.endereco,
        telefone: form.telefone,
        nascimento: form.nascimento,
      };
      await api.post("/Vendedor", payload);
      onChangeVendedor();
      Alert.alert("Vendedor adicionado com sucesso");
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao adicionar");
    } finally {
      setLoading(false);
    }
  };

  const handleEditSeller = async (form: Partial<ISellerData>) => {
    try {
      setLoading(true);
      const payload = {
        documento: form.documento ? form.documento : seller?.documento,
        nome: form.nome ? form.nome : seller?.nome,
        imoveis: form.imoveis ? form.imoveis : seller?.imoveis,
        endereco: form.endereco ? form.endereco : seller?.endereco,
        telefone: form.telefone ? form.telefone : seller?.telefone,
        nascimento: form.nascimento ? form.nascimento : seller?.nascimento,
      };
      await api.put(`/Vendedor/${seller?.id}`, payload);
      onChangeVendedor();
      Alert.alert("Vendedor editado com sucesso");
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
              <TitlePage>Adicionar Vendedor</TitlePage>
            ) : (
              <TitlePage>Editar Vendedor</TitlePage>
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
                  defaultValue={seller?.nome}
                />
                <InputForm
                  placeholder="Im??veis cadastrados"
                  name="imoveis"
                  control={control}
                  autoCorrect={false}
                  keyboardType="default"
                />
                <InputForm
                  placeholder="Endere??o"
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
                    type === "ADD" ? handleSubmitSeller : handleEditSeller
                  )}
                  loading={loading}
                  enabled={!loading}
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
