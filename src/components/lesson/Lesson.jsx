import React, { useState } from "react"
import "./lesson.css"
import ResponsivePlayer from "../video/ResponsivePlayer"

const Lesson = () => {
  const [watchComplete, setWatchComplete] = useState(false)

  const handleWatchComplete = ({ played }) => {
    console.log(played)
  }

  return (
    <div>
      <ResponsivePlayer
        url="https://www.youtube.com/watch?v=ovJcsL7vyrk"
        onProgress={handleWatchComplete}
      />
      <div
        className={
          watchComplete
            ? "marker marker-is-complete"
            : "marker marker-not-complete"
        }
      >
        Completed
      </div>
    </div>
  )
}

export default Lesson
