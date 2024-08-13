import { Image, Text, View } from "react-native"
import { Game } from "../screens/HomeScreen"

type Props = {
  game: Game
}

export function GameCard({ game }: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 8,
        borderColor: 'black',
        borderWidth: 1,
        gap: 8,
        backgroundColor: 'white'
      }}
    >
      <Image style={{ backgroundColor: 'lightgray', minHeight: 150 }} source={{ uri: game.poster_url }} width={100} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>{game.name}</Text>
        <Text style={{ fontSize: 16 }}>
          Finalizado em {new Date(game.finished_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 'auto' }}>
          <Text style={{ fontSize: 20, textTransform: 'uppercase' }}>{game.platform}</Text>
          <Text style={{ fontSize: 20 }}>Nota {game.rating}</Text>
        </View>
      </View>
    </View>
  )
}