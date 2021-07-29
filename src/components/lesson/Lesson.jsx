import React, { useState } from "react"
import "./lesson.css"
import ResponsivePlayer from "../video/ResponsivePlayer"

const Lesson = () => {
  const [
    watchComplete,
    setWatchComplete,
    setpauseComplete,
    setEndedComplete
  ] = useState(false)

  const handleWatchComplete = state => {
    if (state.played >= 0.7 && !watchComplete) {
      setWatchComplete(true)
      console.log(state)
    }
  }
  const handleWatchPause = state => {
    if (!watchComplete) {
      setpauseComplete(true)
      console.log(state)
    }
  }

  const handleWatchEnded = state => {
    if (!watchComplete) {
      setEndedComplete(true)
      console.log(state)
    }
  }

  return (
    <div>
      <ResponsivePlayer
        url="https://www.youtube.com/watch?v=ovJcsL7vyrk"
        onProgress={handleWatchComplete}
        onPause={handleWatchPause}
        onEnded={handleWatchEnded}
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
