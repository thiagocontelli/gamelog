import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Button, FlatList, View } from "react-native";
import { RootStackParamList } from "../App";
import { GameCard } from "../components/GameCard";
import { supabase } from "../config/database";

export type Game = {
  id: string
  name: string
  rating: number
  poster_url: string
  finished_at: string
  created_at: string
  platform: string
}

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const [games, setGames] = useState<Game[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function getGames() {
    setIsLoading(true)
    const { data } = await supabase.from("games").select().returns<Game[]>().order('finished_at', { ascending: false });
    setGames(data ?? [])
    setIsLoading(false)
  }

  function goToAddGame() {
    navigation.navigate(
      'AddGame',
      {
        onGoBack: getGames
      }
    )
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <View
      style={{
        backgroundColor: '#604CC3',
        flex: 1
      }}
    >
      <FlatList
        data={games}
        renderItem={({ item }) => <GameCard game={item} />}
        ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        onRefresh={getGames}
        refreshing={isLoading}
      />

      <View style={{ backgroundColor: '#FF7F3E', paddingHorizontal: 16, paddingVertical: 16 }}>
        <Button title='Adicionar jogo' onPress={goToAddGame} />
      </View>
    </View>
  )
}