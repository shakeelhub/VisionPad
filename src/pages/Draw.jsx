import { TbRectangle } from "react-icons/tb";
import { IoMdDownload } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { GiArrowCursor } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa6";
import {
  Arrow,
  Circle,
  Layer,
  Line,
  Rect,
  Stage,
  Transformer,
} from "react-konva";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";


const ACTIONS = {
  SELECT: "SELECT",
  RECTANGLE: "RECTANGLE",
  CIRCLE: "CIRCLE",
  SCRIBBLE: "SCRIBBLE",
  ARROW: "ARROW",
};

import eraser from "../assets/eraser.png"
import pen from "../assets/pen.png"
import clear from "../assets/clear.svg"


export default function App() {
  const stageRef = useRef();
  const [action, setAction] = useState(ACTIONS.SELECT);
  const [fillColor, setFillColor] = useState("#ff0000");
  const [brushStroke, setBrushStroke] = useState("round"); // Default brush stroke
  const [brushSize, setBrushSize] = useState(5); // Default brush size
  const [rectangles, setRectangles] = useState([]);
  const [circles, setCircles] = useState([]);
  const [arrows, setArrows] = useState([]);
  const [scribbles, setScribbles] = useState([]);
  const [eraserSize, setEraserSize] = useState(20); // Default eraser size

  const strokeColor = "#000";
  const isPaining = useRef();
  const currentShapeId = useRef();
  const transformerRef = useRef();

  const isDraggable = action === ACTIONS.SELECT;

  function onPointerDown() {
    if (action === ACTIONS.SELECT) return;

    const stage = stageRef.current;
    const { x, y } = stage.getPointerPosition();
    const id = uuidv4();

    currentShapeId.current = id;
    isPaining.current = true;

    switch (action) {
      case ACTIONS.RECTANGLE:
        setRectangles((rectangles) => [
          ...rectangles,
          {
            id,
            x,
            y,
            height: 20,
            width: 20,
            fillColor,
          },
        ]);
        break;
      case ACTIONS.CIRCLE:
        setCircles((circles) => [
          ...circles,
          {
            id,
            x,
            y,
            radius: 20,
            fillColor,
          },
        ]);
        break;
      case ACTIONS.ARROW:
        setArrows((arrows) => [
          ...arrows,
          {
            id,
            points: [x, y, x + 20, y + 20],
            fillColor,
          },
        ]);
        break;
      case ACTIONS.SCRIBBLE:
        setScribbles((scribbles) => [
          ...scribbles,
          {
            id,
            points: [x, y],
            fillColor,
            strokeWidth: brushSize,
            lineCap: brushStroke,
            lineJoin: brushStroke,
          },
        ]);
        break;
    }
  }



  function onPointerMove() {
    if (action === ACTIONS.SELECT || !isPaining.current) return;

    const stage = stageRef.current;
    const { x, y } = stage.getPointerPosition();

    switch (action) {
      case ACTIONS.RECTANGLE:
        setRectangles((rectangles) =>
          rectangles.map((rectangle) => {
            if (rectangle.id === currentShapeId.current) {
              return {
                ...rectangle,
                width: x - rectangle.x,
                height: y - rectangle.y,
              };
            }
            return rectangle;
          })
        );
        break;
      case ACTIONS.CIRCLE:
        setCircles((circles) =>
          circles.map((circle) => {
            if (circle.id === currentShapeId.current) {
              return {
                ...circle,
                radius: ((y - circle.y) ** 2 + (x - circle.x) ** 2) ** 0.5,
              };
            }
            return circle;
          })
        );
        break;
      case ACTIONS.ARROW:
        setArrows((arrows) =>
          arrows.map((arrow) => {
            if (arrow.id === currentShapeId.current) {
              return {
                ...arrow,
                points: [arrow.points[0], arrow.points[1], x, y],
              };
            }
            return arrow;
          })
        );
        break;
      case ACTIONS.SCRIBBLE:
        setScribbles((scribbles) =>
          scribbles.map((scribble) => {
            if (scribble.id === currentShapeId.current) {
              return {
                ...scribble,
                points: [...scribble.points, x, y],
              };
            }
            return scribble;
          })
        );
        break;
      case ACTIONS.ERASER:
        const layer = stageRef.current.findOne('Layer');
        const context = layer.getCanvas().getContext('2d');
        context.globalCompositeOperation = 'destination-out';
        context.beginPath();
        context.arc(x, y, eraserSize, 0, Math.PI * 2);
        context.fill();
        context.globalCompositeOperation = 'source-over';
        break;
    }
  }

  function onPointerUp() {
    isPaining.current = false;
  }

  function handleExport() {
    const uri = stageRef.current.toDataURL();
    var link = document.createElement("a");
    link.download = "image.png";
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function onClick(e) {
    if (action !== ACTIONS.SELECT) return;
    const target = e.currentTarget;
    transformerRef.current.nodes([target]);
  }

  function clearBoard() {
    setRectangles([]);
    setCircles([]);
    setArrows([]);
    setScribbles([]);
  }

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-[#fef3c7]" >
        {/* Controls */}
        <div className="absolute top-0 z-10 w-full py-2 " >
          <div className="flex justify-center items-center gap-3 py-2 px-3 w-fit mx-auto border shadow-lg rounded-lg bg-white" >
            <button
              className={
                action === ACTIONS.SELECT
                  ? "bg-violet-300 p-1 rounded"
                  : "p-1 hover:bg-violet-100 rounded"
              }
              onClick={() => setAction(ACTIONS.SELECT)}
            >
              <GiArrowCursor size={"2rem"} color="black" />
            </button>
            <button
              className={
                action === ACTIONS.RECTANGLE
                  ? "bg-violet-300 p-1 rounded"
                  : "p-1 hover:bg-violet-100 rounded"
              }
              onClick={() => setAction(ACTIONS.RECTANGLE)}
            >
              <TbRectangle size={"2rem"} color="black"/>
            </button>
            <button
              className={
                action === ACTIONS.CIRCLE
                  ? "bg-violet-300 p-1 rounded"
                  : "p-1 hover:bg-violet-100 rounded"
              }
              onClick={() => setAction(ACTIONS.CIRCLE)}
            >
              <FaRegCircle size={"1.5rem"} color="black"/>
            </button>
            <button
              className={
                action === ACTIONS.ARROW
                  ? "bg-violet-300 p-1 rounded"
                  : "p-1 hover:bg-violet-100 rounded"
              }
              onClick={() => setAction(ACTIONS.ARROW)}
            >
              <FaLongArrowAltRight size={"2rem"} color="black" />
            </button>
            <button
              className={
                action === ACTIONS.SCRIBBLE
                  ? "bg-violet-300 p-1 rounded"
                  : "p-1 hover:bg-violet-100 rounded"
              }
              onClick={() => setAction(ACTIONS.SCRIBBLE)}
            >
              <img src={pen} alt="" width={35}/>
            </button>

            <button
              className={
                action === ACTIONS.ERASER
                  ? "bg-violet-300 p-1 rounded"
                  : "p-1 hover:bg-violet-100 rounded"
              }
              onClick={() => setAction(ACTIONS.ERASER)}
            >
              <img src={eraser} alt="" width={35}/>
            </button>

            <button>
              <input
                className="w-6 h-6"
                type="color"
                value={fillColor}
                onChange={(e) => setFillColor(e.target.value)}
              />
            </button>

            <button onClick={handleExport}>
              <IoMdDownload size={"1.5rem"} color="black"/>
            </button>

            <button onClick={clearBoard}>
              <img src={clear} alt="" width={35} />
            </button>

            <fieldset className="border border-gray-300 rounded-lg  py-1 px-2 shadow-md">
  {/* <legend className="text-lg font-semibold text-gray-700 mb-2">Brush Stroke</legend> */}
  <div className="flex flex-col space-y-2">
    <label className="flex items-center">
      <input
        type="radio"
        name="brushStroke"
        value="round"
        checked={brushStroke === "round"}
        onChange={(e) => setBrushStroke(e.target.value)}
        className="form-radio text-blue-600 h-5 w-5"
      />
      <span className="ml-2 text-gray-700">Round</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="brushStroke"
        value="square"
        checked={brushStroke === "square"}
        onChange={(e) => setBrushStroke(e.target.value)}
        className="form-radio text-blue-600 h-5 w-5"
      />
      <span className="ml-2 text-gray-700">Square</span>
    </label>
  </div>
</fieldset>


            <fieldset>
              <legend className="text-black">Brush Size</legend>
              <input
                type="range"
                min="1"
                max="50"
                value={brushSize}
                onChange={(e) => setBrushSize(e.target.value)}
              />
              <span className="text-black">{brushSize}px</span>
            </fieldset>
            
            <fieldset>
              <legend className="text-black">Eraser Size</legend>
              <input
                type="range"
                min="1"
                max="100"
                value={eraserSize}
                onChange={(e) => setEraserSize(e.target.value)}
              />
              <span className="text-black">{eraserSize}px</span>
            </fieldset>
          </div>
        </div>

        {/* Stage */}
        <Stage
          ref={stageRef}
          width={window.innerWidth}
          height={window.innerHeight}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <Layer>
            {rectangles.map((rectangle) => (
              <Rect
                key={rectangle.id}
                id={rectangle.id}
                x={rectangle.x}
                y={rectangle.y}
                width={rectangle.width}
                height={rectangle.height}
                fill={rectangle.fillColor}
                draggable={isDraggable}
                onClick={onClick}
              />
            ))}

            {circles.map((circle) => (
              <Circle
                key={circle.id}
                id={circle.id}
                x={circle.x}
                y={circle.y}
                radius={circle.radius}
                fill={circle.fillColor}
                draggable={isDraggable}
                onClick={onClick}
              />
            ))}

            {arrows.map((arrow) => (
              <Arrow
                key={arrow.id}
                id={arrow.id}
                points={arrow.points}
                fill={arrow.fillColor}
                draggable={isDraggable}
                onClick={onClick}
              />
            ))}

            {scribbles.map((scribble) => (
              <Line
                key={scribble.id}
                id={scribble.id}
                points={scribble.points}
                stroke={scribble.fillColor}
                strokeWidth={scribble.strokeWidth}
                lineCap={scribble.lineCap}
                lineJoin={scribble.lineJoin}
                draggable={isDraggable}
                onClick={onClick}
              />
            ))}
          </Layer>

          <Layer>
            <Transformer ref={transformerRef} />
          </Layer>
        </Stage>
      </div>
    </>
  );
}
