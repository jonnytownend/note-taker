import styled from "styled-components"
import { GLOBAL_FONT } from "../../utils/constants"

export const Container = styled.div<{ isModal?: boolean }>`
  display: flex;
  justify-content: center;
  height: 100vh;
  ${p => p.isModal ? 'background-color: lightgray;' : ''}
`

export const Content = styled.div<{ isModal?: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  flex-grow: 1;
  ${p => p.isModal ? 'border: 1px solid gray;' : ''}
  ${p => p.isModal ? 'margin-top: 64px;' : ''}
  ${p => p.isModal ? 'margin-bottom: 64px;' : ''}
  // ${p => p.isModal ? 'margin-bottom: 64px;' : ''}
  border-radius: 15px;
  padding: 48px;
  background-color: white;
`

export const Title = styled.h1`
  font-size: 32px;
`

export const TextareaContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const Textarea = styled.textarea`
  border: none;
  outline: none;
  flex-grow: 1;
  font-family: ${GLOBAL_FONT};
  font-size: 16px;
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  line-height: 20px;
`

export const CommandMenuContainer = styled.div<{offset: {x: number, y: number}}>`
  position: relative;
  top: ${p => p.offset.y + 8}px;
  left: ${p => p.offset.x + 8}px;
`