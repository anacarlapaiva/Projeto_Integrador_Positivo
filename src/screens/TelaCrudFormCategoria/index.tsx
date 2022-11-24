import axios from "axios";
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

interface ITelaCrudEditarCategoriaProps {
  type: "ADD" | "EDIT";
  categoria?: ICategoryData;
  onChangeCategoria: () => void;
}

const TelaCrudEditarCategoria = ({
  categoria,
  type,
  onChangeCategoria,
}: ITelaCrudEditarCategoriaProps) => {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const handleSubmitCategory = async (form: Partial<ICategoryData>) => {
    try {
      setLoading(true);
      const payload = {
        id: form.id,
        descricao: form.descricao,
      };
      await api.post("/Categoria", payload);
      onChangeCategoria();
      Alert.alert("Adicionado com sucesso");
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao adicionar");
    } finally {
      setLoading(false);
      console.log("teste");
    }
  };

  const handleEditCategory = async (form: Partial<ICategoryData>) => {
    try {
      setLoading(true);
      const payload = {
        id: form.id ? form.id : categoria?.id,
        descricao: form.descricao ? form.descricao : categoria?.descricao,
      };
      await api.put(
        `/Categoria/${categoria?.id}`,
        payload
      );
      onChangeCategoria();
      Alert.alert("Editado com sucesso");
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao adicionar");
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
              <TitlePage>Adicionar categoria</TitlePage>
            ) : (
              <TitlePage>Editar categoria</TitlePage>
            )}
          </ContentSubMenu>
          <ScrollView>
            <Form>
              <Fields>
                <ScrollView>
                  <Form>
                    <Fields>
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
                        onPress={handleSubmit(
                          type === "ADD"
                            ? handleSubmitCategory
                            : handleEditCategory
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

export default TelaCrudEditarCategoria;
