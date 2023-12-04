import { Form } from 'react-router-dom'
import { useCanvas } from './CanvasContext'
import { useEffect, useState } from 'react'

function SubmitMonsterForm() {
  const { formData } = useCanvas()

  // useEffect(() => {
  //   saveCanvasToGallery()
  // }, [saveCanvasToGallery])

  console.log('formComponent Formdata', formData)
}

export default SubmitMonsterForm
