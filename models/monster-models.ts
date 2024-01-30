import {ReactNode} from 'react'

export interface NewMonster {
  monster_name: string
  top_artist: string
  bottom_artist: string
  image_url: string
}

export interface Monster {
  monster_name: string
  top_artist: string
  bottom_artist: string
  image_url: string
  id: number
  date_created: Date
}

export interface newMonsterName {
  monster_name: string
}

export interface BrushDivBackground{
    background: string
}

export interface WelcomeProps {
    setIsWelcome: React.Dispatch<React.SetStateAction<boolean>>;
    setTopArtist: React.Dispatch<React.SetStateAction<string>>;
    setBottomArtist: React.Dispatch<React.SetStateAction<string>>;
  }

export interface MonsterCanvasInfo {

}

export interface CanvasContextProps{
canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
prepareCanvas: () => void;
startDrawing: (event: React.MouseEvent<HTMLCanvasElement>) => void;
finishDrawing: () => void;
draw: (event: React.MouseEvent<HTMLCanvasElement>) => void;
changeBrushColour: (colour: string) => void;
changeBrushSize: (size: number) => void;
handleMouseLeave: () => void;
saveCanvasAsImage: () => void;
}

export interface CanvasProviderProps {
  children: ReactNode
}