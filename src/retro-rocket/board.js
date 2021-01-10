import React from 'react';
import CreateBoard from './createBoard';
import UserBoards from './userBoards';

export default function Board() {
  return(
    <div style={{margin: '5% 10% 0% 10%', textAlign: 'center'}}>
          <CreateBoard/>
          <UserBoards/>
    </div>
  );
}
