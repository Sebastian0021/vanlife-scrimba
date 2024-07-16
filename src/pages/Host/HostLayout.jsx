import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HostLayout () {
  return (
    <>
      <h1>HOST LAYOUT</h1>
      <Outlet />
    </>
  )
}
