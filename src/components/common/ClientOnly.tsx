import dynamic from 'next/dynamic'
import React from 'react'

interface NoSsrProps {
  children: React.ReactNode
}

const ClientOnly = (props: NoSsrProps) => <>{props.children}</>

export default dynamic(() => Promise.resolve(ClientOnly), {
  ssr: false,
})
