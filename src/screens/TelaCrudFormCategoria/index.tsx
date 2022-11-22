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

interface ITelaCrudEditarCategoriaProps {
  type: "ADD" | "EDIT";
  categoria?: ICategoryData;
}

const TelaCrudEditarCategoria = ({
  categoria,
  type,
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
      console.log(payload);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditCategory = async (form: Partial<ICategoryData>) => {
    try {
      setLoading(true);
      const payload = {
        id: form.id ? form.id : categoria?.id,
        descricao: form.descricao ? form.descricao : categoria?.descricao,
      };
      console.log(payload);
    } catch (err) {
      console.log(err);
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
