import React, { memo } from "react"
import CircularProgress from "@mui/material/CircularProgress"
import useStyles from "./styles"

const Loading = () => {
  const classes = useStyles()
  return (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  )
}

export default memo(Loading)
