import React, { useState, useEffect } from 'react'
import { PageComponent } from './types'
import { Container, Content, Title, TextareaContainer, Textarea, CommandMenuContainer } from './styles'
import { COMMAND_MENU_CHAR } from '../../utils/constants'
import { CommandMenu } from '../command-menu'
import { getTextWidth } from '../../utils/dom-calculations'

export const Page: PageComponent = ({
  title,
  isModal,
}) => {
  const [command, setCommand] = useState<string | undefined>()
  const [commandOffset, setCommandOffset] = useState<{x: number, y: number}>({x: 0, y: 0})
  const [text, setText] = useState<string>('')

  const handleTextChange = (e: any) => {
    setText(e.target.value)
  }

  useEffect(() => {
    if (!text.includes(COMMAND_MENU_CHAR)) {
      setCommand(undefined)
      return
    }
    const commandText = text.split('/').pop()
    if (commandText?.includes(' ') || commandText?.includes('\n')) {
      setCommand(undefined)
      return
    }
    setCommand(commandText)
  }, [text])

  useEffect(() => {
    const lines = text.split('\n')
    const lastLineString = lines.pop()?.split('/').slice(0, -1).join() ?? ''
    const x = getTextWidth(lastLineString, 16)
    setCommandOffset({
      x,
      y: (lines.length + 1) * 20,
    })
  }, [text])

  return (
    <Container isModal={isModal}>
      <Content isModal={isModal}>
        <Title>{title}</Title>
        <TextareaContainer>
          {command !== undefined && (
            <CommandMenuContainer offset={commandOffset}>
              <CommandMenu filter={command} />
            </CommandMenuContainer>
          )}
          <Textarea
            value={text}
            placeholder="Start typing to add content"
            onChange={handleTextChange}
          />
        </TextareaContainer>
      </Content>
    </Container>
  )
}