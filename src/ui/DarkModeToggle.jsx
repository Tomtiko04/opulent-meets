import React from 'react'
import ButtonIcon from './ButtonIcon'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'
import useDarkMode from '../context/useDarkMode'


export default function DarkModeToggle() {
  const {isDarkMode, toggleDarkMode} = useDarkMode()
  return (
   <ButtonIcon onClick={toggleDarkMode}>
    {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
   </ButtonIcon>
  )
}
