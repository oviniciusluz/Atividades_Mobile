import { useState } from "react";
import { Alert, Button, Text, TextInput, View, ToastAndroid } from "react-native";

export default () => {
  const [firstText, setFirstText] = useState("");
  const [secundText, setSecondText] = useState("");
  const [result, setResult] = useState<number>();

  const handleCalc = () => {
    if (parseFloat(firstText) > parseFloat(secundText)) {
      const result =
        Math.floor(Math.random() * (parseFloat(firstText) - parseFloat(secundText) + 1)) +
        parseFloat(secundText);
      setResult(result);
    } else {
      Alert.alert("Erro", "Não foi possivel realizar a soma");
    }
  };

  return (
    <View className="flex-1 items-center justify-center gap-5">
      <Text>Resultado: {result}</Text>

      <TextInput
        className="w-80 h-10 border rounded-lg pl-2"
        value={firstText}
        keyboardType="number-pad"
        placeholder="Deve ser o maior numero"
        onChangeText={(text) => setFirstText(text)}
      />
      <TextInput
        className="w-80 h-10 border rounded-lg pl-2"
        value={secundText}
        keyboardType="number-pad"
        placeholder="Deve ser o menor numero"
        onChangeText={(text) => setSecondText(text)}
      />

      <View className="w-60">
        <Button title="Calcular resultado" onPress={handleCalc} />
      </View>
    </View>
  );
};
