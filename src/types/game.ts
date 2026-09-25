export interface GameScore {
  playerName: string;
  score: number;
  distance: number;
  bottlesCollected: number;
}

export interface GameState {
  isPlaying: boolean;
  isGameOver: boolean;
  score: number;
  distance: number;
  bottlesCollected: number;
  speed: number;
}
