import React from "react"
import ContentLoader from "react-content-loader"
import PizzaBlock from "."

const Skeleton = () => (
  <ContentLoader 
    className={PizzaBlock}
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="180" y="382" rx="0" ry="0" width="17" height="2" /> 
    <rect x="0" y="300" rx="10" ry="10" width="280" height="110" /> 
    <rect x="0" y="265" rx="10" ry="10" width="280" height="25" /> 
    <rect x="5" y="350" rx="10" ry="10" width="80" height="30" /> 
    <rect x="130" y="445" rx="25" ry="25" width="145" height="45" />
  </ContentLoader>
)

export default Skeleton

