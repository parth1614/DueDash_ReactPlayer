import React, { useState } from "react"
import "./lesson.css"
import ResponsivePlayer from "../video/ResponsivePlayer"

const Lesson = () => {
  const [watchComplete, setWatchComplete] = useState(false)

  const handleWatchComplete = state => {
    console.log(state)
  }

  return (
    <div>
      <ResponsivePlayer
        url="https://www.youtube.com/watch?v=ovJcsL7vyrk"
        onProgress={handleWatchComplete}
      />
    </div>
  )
}

export default Lesson
