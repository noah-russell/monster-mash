// CanvasProvider.js
import { useContext, useRef, useState, createContext} from 'react'
import { CanvasContextProps, CanvasProviderProps } from '../../models/monster-models'

// initates the context hook
const CanvasContext = createContext<CanvasContextProps | null>(null)

export function CanvasProvider({ children }: CanvasProviderProps): JSX.Element {
  const [isDrawing, setIsDrawing] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  function prepareCanvas():void{
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d');
      const canvasWidth = 500
      canvas.width = canvasWidth
      canvas.height = canvasWidth
      canvas.style.width = `${canvasWidth}px`
      canvas.style.height = `${canvasWidth}px`
      if (context) {
        context.lineCap = 'round'
        context.lineJoin = 'round'
        context.strokeStyle = 'black'
        context.lineWidth = 5
        contextRef.current = context
        context.fillStyle = 'white'
        context.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
  }
  
  const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>): void => {
    const { offsetX, offsetY } = nativeEvent;
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  const finishDrawing = (): void => {
    if (contextRef.current) {
      contextRef.current.closePath();
      setIsDrawing(false);
    }
  };

  const handleMouseLeave = (): void => {
    if (isDrawing && contextRef.current) {
      finishDrawing();
    }
  };

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>): void => {
    if (!isDrawing || !contextRef.current) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const changeBrushColour = (colour: string): void => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = colour;
    }
  };


  const changeBrushSize = (size: number): void => {
    if (contextRef.current) {
      contextRef.current.lineWidth = size;
    }
  };

  const saveCanvasAsImage = (): void => {
    if (canvasRef.current) {
      const dataURL = canvasRef.current.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'canvas_image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        draw,
        changeBrushColour,
        changeBrushSize,
        handleMouseLeave,
        saveCanvasAsImage,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
}

export const useCanvas = (): CanvasContextProps => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error('useCanvas must be used within a CanvasProvider');
  }
  return context;
};