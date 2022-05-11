// @ts-nocheck
import Button from '@mui/material/Button';
import React from 'react';
import { useUndoRedo } from '../Providers/UndoRedoProvider';

function UndoRedo() {
  //TODO stackerino every state
  const { undo, redo } = useUndoRedo();

  return (
    <div>
      <Button onClick={() => undo()}>Undo</Button>
      <Button onClick={() => redo()}>Redo</Button>
    </div>
  );
}

export default UndoRedo;
