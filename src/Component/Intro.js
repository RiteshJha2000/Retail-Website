import React from 'react'
import "./Intro.css"
import { bounce } from 'react-animations'
import styled , { keyframes } from 'styled-components'
import { motion } from 'framer-motion'


export default function Intro() {
  return (
    <div className='intro'>
        <div className="box">
            <h2>Providing Finest Traditional</h2>
            <h4>Indian Cereals and Spices</h4>
        </div>
    </div>
  )
}
