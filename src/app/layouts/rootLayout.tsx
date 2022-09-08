import React from "react"
import { Route, Switch } from "react-router-dom"
import { HomePage } from "../pages/HomePage"

const RootLayout = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/home" component={HomePage} exact={true} />
    </Switch>
  )
}

export default RootLayout
