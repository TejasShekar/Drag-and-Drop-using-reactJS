import {useState} from "react";
import {usePosition} from "../contexts/positionContext";

export const DraggableContainer = ({pointerFinal}) => {
  const [pointerInitial, setPointerInitial] = useState({});
  const [initialPosition, setInitialPosition] = useState({x: 0, y: 0});
  const {
    positionDispatch,
    positionState: {styles, positionName},
  } = usePosition();

  const finalPosition = {
    x: pointerFinal.x - pointerInitial.x + initialPosition.x,
    y: pointerFinal.y - pointerInitial.y + initialPosition.y,
  };
  console.log(finalPosition);
  const positionHandler = () => {
    positionDispatch({type: "DRAG_POSITIONS", payload: finalPosition});
  };
  return (
    <div
      className=" h-[200px] w-[200px] text-lg font-semibold bg-stone-400 border-[1px] border-black flex flex-col justify-between absolute"
      draggable="true"
      onDragStart={(e) => {
        setPointerInitial({x: e.clientX, y: e.clientY});
        // console.log({x: e.clientX, y: e.clientY});
        let position = e.target.getBoundingClientRect();
        setInitialPosition({x: position.x, y: position.y});
        positionHandler();
      }}
      style={styles}
      // style={
      //   isNaN(finalPosition.x) || isNaN(finalPosition.y)
      //     ? styles
      //     : {top: `${finalPosition.y}px`, left: `${finalPosition.x}px`}
      // }
    >
      <p className="p-1 ">
        {positionName !== "" ? positionName : "Floating..."}
      </p>
      <p className="p-1 text-right text-base">Drag me around !</p>
    </div>
  );
};
