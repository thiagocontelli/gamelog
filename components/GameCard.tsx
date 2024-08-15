import { Image, Text, View } from "react-native"
import { Game } from "../screens/HomeScreen"

type Props = {
  game: Game
}

export function GameCard({ game }: Props) {
  return (
    <View
      style={{
        borderRadius: 4,
        backgroundColor: 'white',
        overflow: 'hidden',
        borderColor: 'lightgray',
        borderWidth: 1
      }}
    >
      <Image style={{ backgroundColor: 'lightgray', minHeight: 150, flex: 1 }} source={{ uri: game.poster_url }} />
      <View style={{ flex: 1, padding: 8, borderTopWidth: 1, borderColor: 'lightgray' }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>{game.name}</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>
          Finalizado em {new Date(game.finished_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
          <Text style={{ fontSize: 18, textTransform: 'uppercase' }}>{game.platform}</Text>
          <Text style={{ fontSize: 18 }}>Nota {game.rating}</Text>
        </View>
      </View>
    </View>
  )
}