import { Card, CardHeader, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardHeader fontSize={"xl"}>{game.name}</CardHeader>
    </Card>
  );
};

export default GameCard;
