import React from 'react'
import { CommandMenyComponent } from './types'
import { Container } from './styles'

const commands = [
  'Text',
  'Page',
  'To-do',
  'Heading 1',
  'Heading 2',
]

export const CommandMenu: CommandMenyComponent = ({
  filter,
}) => {
  const filterLowerCase = filter?.toLowerCase() ?? ''
  const filteredCommands = commands.filter(command => command.toLowerCase().includes(filterLowerCase)).map(command => <p>{command}</p>)

  if (filteredCommands.length > 0) {
    return (
      <Container>
        {commands.filter(command => command.toLowerCase().includes(filterLowerCase)).map(command => <p>{command}</p>)}
      </Container>
    )
  }

  return null
}