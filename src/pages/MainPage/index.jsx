import React from 'react'
import Board, { moveCard, moveColumn } from '@lourenci/react-kanban'
import { useSelector, useDispatch } from 'react-redux'

import { setBoard } from 'store/board/actions'

import { MainPageContainer } from './styles'

export const MainPage = () => {
  const dispatch = useDispatch()
  const boardState = useSelector(store => store.board)

  const handleCardMove = (card, source, destination) => {
    const updatedBoard = moveCard(boardState, source, destination);
    dispatch(setBoard(updatedBoard));
  }

  const handleColumnMove = (column, source, destination) => {
    const updatedBoard = moveColumn(boardState, source, destination);
    dispatch(setBoard(updatedBoard));
  }

  return (
    <MainPageContainer>
      <Board
        onColumnDragEnd={handleColumnMove}
        onCardDragEnd={handleCardMove}
      >
        {boardState}
      </Board>
    </MainPageContainer>
  )
}
