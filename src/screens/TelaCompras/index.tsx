import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/Button";
import RNPickerSelect from "react-native-picker-select";
import {
  Container,
  ContentButton,
  ContentListagem,
  ContentSubMenu,
  Fields,
  Form,
  TitlePage,
} from "./styles";
import { Picker } from "@react-native-picker/picker";

interface ITelaComprasProps {
  type: "ADD" | "EDIT";
  compras?: IComprasData;
}

const TelaCompras = ({ type }: ITelaComprasProps) => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState();
  const { control, handleSubmit } = useForm();

  const handleSubmitcompras = async (form: Partial<IComprasData>) => {
    try {
      setLoading(true);
      const payload = {
        imovel: form.imovel,
        imobiliaria: form.imobiliaria,
        corretor: form.corretor,
      };
      Alert.alert("Adicionado com sucesso");
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
            <TitlePage>Imóveis</TitlePage>
          </ContentSubMenu>
          <ScrollView>
            <Form>
              <Fields>
                <ScrollView>
                  <Form>
                    <Fields>
                      <ContentListagem>
                        <Text style={{ marginBottom: 10, marginTop: 20 }}>
                          Imobiliaria:{" "}
                        </Text>
                        <RNPickerSelect
                          onValueChange={(selected) => setSelected(selected)}
                          items={[
                            {
                              label: "Imobiliaria da vila",
                              value: "Imobiliaria da vila",
                            },
                            {
                              label: "Imobiliaria Teste",
                              value: "Imobiliaria Teste",
                            },
                          ]}
                          style={pickerSelectStyles}
                        />
                      </ContentListagem>
                      <ContentListagem>
                        <Text style={{ marginBottom: 10, marginTop: 20 }}>
                          Imóvel:{" "}
                        </Text>
                        <RNPickerSelect
                          onValueChange={(selected) => setSelected(selected)}
                          items={[
                            {
                              label: "Apartamento no centro",
                              value: "Apartamento no centro",
                            },
                            {
                              label: "Casa com piscina",
                              value: "Casa com piscina",
                            },
                            {
                              label: "Casa na praia",
                              value: "Casa na praia",
                            },
                            {
                              label: "Apartamento cobertura",
                              value: "Apartamento cobertura",
                            },
                          ]}
                          style={pickerSelectStyles}
                        />
                      </ContentListagem>
                      <ContentListagem>
                        <Text style={{ marginBottom: 10, marginTop: 20 }}>
                          Vendedor:{" "}
                        </Text>
                        <RNPickerSelect
                          onValueChange={(selected) => setSelected(selected)}
                          items={[
                            {
                              label: "Luis Bob",
                              value: "Luis Bob",
                            },
                            {
                              label: "Marcelo Owada",
                              value: "Marcelo Owada",
                            },
                            {
                              label: "Testee",
                              value: "Testee",
                            },
                          ]}
                          style={pickerSelectStyles}
                        />
                      </ContentListagem>
                    </Fields>

                    <ContentButton style={{ marginTop: 50 }}>
                      <Button
                        title="Concluir"
                        onPress={handleSubmit(handleSubmitcompras)}
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});
export default TelaCompras;
