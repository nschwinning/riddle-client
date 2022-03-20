import React from "react";
import { Subpage, Title, Card, WordleGrid } from "../../components";
import { useWordleContext } from "../../context/wordle";
import Hotkeys from "react-hot-keys";
import { CHAR } from "../../typings";

interface Props {
    
}

const Wordle = (props: Props) => {
  const { selectedBlock, fillBlock } = useWordleContext();

  function onKeyDown(keyName: any, e: KeyboardEvent) {
    switch (e.key) {
      case "a":
      case "A":
        return fill("A");
      case "b":
      case "B":
        return fill("B");
      default:
        console.log(e.key);
    }
  }

  function fill(c: CHAR) {
    console.log("Filling " + c + ', selected Block: ' + selectedBlock);
    fillBlock(c);
  }

  return (
    <Subpage>
      <Title>Wordle</Title>
      <Hotkeys keyName="*" onKeyDown={onKeyDown} filter={(event) => true}>
        <Card>
          <WordleGrid />
        </Card>
      </Hotkeys>
    </Subpage>
  );
};

export default Wordle;
