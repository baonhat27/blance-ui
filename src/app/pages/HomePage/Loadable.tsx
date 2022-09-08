import React from "react"
import Loading from "app/components/Loading"
import { lazyLoad } from "utils/loadable"

export const HomePage = lazyLoad(
  () => import("./index"),
  module => module.HomePage,
  {
    fallback: <Loading />
  }
)
