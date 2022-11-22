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
} from "./styles";

interface ITelaCrudEditarimovelProps {
  type: "ADD" | "EDIT";
  imovel?: IImovelData;
}

const TelaCrudFormimovel = ({ imovel, type }: ITelaCrudEditarimovelProps) => {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const handleSubmitimovel = async (form: Partial<IImovelData>) => {
    try {
      setLoading(true);
      const payload = {
        idImovel: form.idImovel,
        metrosQuadradosImovel: form.metrosQuadradosImovel,
        metrosQuadradosTerreno: form.metrosQuadradosTerreno,
        valorImovel: form.valorImovel,
        status: form.status,
      };
      console.log(payload);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditimovel = async (form: Partial<IImovelData>) => {
    try {
      setLoading(true);
      const payload = {
        idImovel: form.idImovel ? form.idImovel : imovel?.idImovel,
        metrosQuadradosImovel: form.metrosQuadradosImovel
          ? form.metrosQuadradosImovel
          : imovel?.metrosQuadradosImovel,
        metrosQuadradosTerreno: form.metrosQuadradosTerreno
          ? form.metrosQuadradosTerreno
          : imovel?.metrosQuadradosTerreno,
        valorImovel: form.valorImovel ? form.valorImovel : imovel?.valorImovel,
        status: form.status ? form.status : imovel?.status,
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
              <TitlePage>Adicionar imóvel</TitlePage>
            ) : (
              <TitlePage>Editar imóvel</TitlePage>
            )}
          </ContentSubMenu>
          <ScrollView>
            <Form>
              <Fields>
                <ScrollView>
                  <Form>
                    <Fields>
                      <InputForm
                        placeholder="ID Imóvel"
                        name="idImovel"
                        control={control}
                        autoCorrect={false}
                        keyboardType="default"
                      />
                      <InputForm
                        placeholder="Metros quadrados"
                        name="metrosQuadradosImovel"
                        control={control}
                        autoCorrect={false}
                        keyboardType="default"
                      />
                      <InputForm
                        placeholder="Metros quadrados do terreno"
                        name="metrosQuadradosTerreno"
                        control={control}
                        autoCorrect={false}
                        keyboardType="default"
                      />
                      <InputForm
                        placeholder="Valor do imóvel"
                        name="valorImovel"
                        control={control}
                        autoCorrect={false}
                        keyboardType="default"
                      />
                      <InputForm
                        placeholder="Status"
                        name="status"
                        control={control}
                        autoCorrect={false}
                        keyboardType="default"
                      />
                    </Fields>

                    <ContentButton>
                      <Button
                        title="Enviar"
                        onPress={handleSubmit(
                          type === "ADD" ? handleSubmitimovel : handleEditimovel
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

export default TelaCrudFormimovel;
