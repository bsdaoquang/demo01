import React from 'react'
import { colors } from '../constansts/appColor';

function TextComponent({text, color, size, font}) {
  return (
    <p style={{
      color: color ?? colors.textColor,
      size: size ?? 14
    }}>{text}</p>
  )
}

export default TextComponent