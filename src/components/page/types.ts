import React from 'react'

export interface PageProps {
  title: string
  isModal?: boolean
}

export type PageComponent = React.FC<PageProps>