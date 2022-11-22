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

interface ITelaImobiliaria {
  type: "ADD" | "EDIT";
  imobiliaria?: IImobiliariaData;
}

const TelaFormImobiliaria = ({ imobiliaria, type }: ITelaImobiliaria) => {
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
      console.log(payload);
    } catch (err) {
      console.log(err);
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
        creciVendedor: form.creciVendedor
          ? form.creciVendedor
          : imobiliaria?.creciVendedor,
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
              <TitlePage>Adicionar imobiliária</TitlePage>
            ) : (
              <TitlePage>Editar imobiliária</TitlePage>
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
                  keyboardType="decimal-pad"
                />
                <InputForm
                  placeholder="Estado"
                  name="cidade"
                  control={control}
                  autoCorrect={false}
                  keyboardType="decimal-pad"
                />
                <InputForm
                  placeholder="CRECI"
                  name="creci"
                  control={control}
                  autoCorrect={false}
                  keyboardType="decimal-pad"
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
