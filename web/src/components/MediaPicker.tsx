'use client'
import { ChangeEvent, useState } from "react"

 //will use javascript in the frontend

function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>){
    const {files} = event.target

    if(!files){
      return
    }

    const previewUrl = URL.createObjectURL(files[0])

    setPreview(previewUrl)
  }

  return (
    <>

      <input 
        onChange={onFileSelected} 
        type="file" 
        id="media" 
        accept="image/*"
        name="coverUrl"
        className="invisible h-0 w-0"
      />

      {preview && <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover" />}
    </>
  )
}

export default MediaPicker