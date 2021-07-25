import React, { useState } from 'react'
import reactStringReplace from 'react-string-replace'
import { MarkupAreaComponent } from './types'
import { Container } from './styles'

const H1: React.FC = ({ children }) => (
    <h1>{children}</h1>
)

export const MarkupArea: MarkupAreaComponent = () => {
    const [text, setText] = useState<string>('Text')

    const components = reactStringReplace(text, '# ', (match) => (
        <H1>{match}</H1>
    ))

    const handleOnInput = (e: any) => {
        e.preventDefault()
        setText(e.target.innerText)
    }

    return (
        <Container contentEditable onInput={handleOnInput}>
            {components}
        </Container>
    )
}