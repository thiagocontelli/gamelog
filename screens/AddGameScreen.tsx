import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { RootStackParamList } from "../App";
import { supabase } from "../config/database";

type Props = NativeStackScreenProps<RootStackParamList, 'AddGame'>;

export function AddGameScreen({ navigation, route }: Props) {
  const [name, setName] = useState('')
  const [rating, setRating] = useState('')
  const [posterUrl, setPosterUrl] = useState('')
  const [finishedAt, setFinishedAt] = useState('')
  const [platform, setPlatform] = useState('')

  async function addGame() {
    const { error } = await supabase
      .from('games')
      .insert([
        {
          name,
          rating: parseInt(rating),
          poster_url: posterUrl,
          finished_at: finishedAt,
          platform,
        },
      ])

    if (error) {
      Alert.alert('Erro', error.message)
    } else {
      route.params.onGoBack()
      navigation.goBack()
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white', padding: 10, gap: 16 }}>

        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Nome do jogo"
        />

        <TextInput
          value={rating}
          onChangeText={setRating}
          style={styles.input}
          placeholder="Nota"
          keyboardType="numeric"
        />

        <TextInput
          value={posterUrl}
          onChangeText={setPosterUrl}
          style={styles.input}
          placeholder="URL da capa"
        />

        <TextInput
          value={finishedAt}
          onChangeText={setFinishedAt}
          style={styles.input}
          placeholder="Finalizado em (yyyy-MM-dd)"
          keyboardType="numbers-and-punctuation"
        />

        <TextInput
          value={platform}
          onChangeText={setPlatform}
          style={styles.input}
          placeholder="Plataforma"
        />

        <Button title="Salvar" onPress={addGame} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 10,
  }
});