import React from "react"
import { StaticImage } from "gatsby-plugin-image"




import * as S from "./styled"

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../images/logo_blog 1.png"
        alt="John Doe Avatar"
        placeholder="blurred"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar //