import React from "react"
import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper"

import { Link } from "gatsby"

import "swiper/swiper-bundle.min.css"

SwiperCore.use([EffectCoverflow, Navigation, Pagination])

const CoverflowEffect = () => {
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const SlideBody = props => {
    if (props.to)
      return (
        <Link to={props.to}>
          <div>
            <img
              className="bg-contain"
              style={{
                borderRadius: "1rem",
              }}
              src={props.imgSrc}
              alt="img"
            />
          </div>
        </Link>
      )
    else
      return (
        <div>
          <img
            className="bg-contain"
            style={{
              borderRadius: "1rem",
            }}
            src={props.imgSrc}
            alt="img"
          />
        </div>
      )
  }
  SlideBody.propTypes = {
    to: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
  }

  return (
    <>
      <Swiper
        slidesPerView={width > 640 ? 3 : 1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={Navigation}
        className="mySwiper"
      >
          <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/jam"
            imgSrc="https://ik.imagekit.io/ieeecollege/science_week2024_lYfOB1e_T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646729012244&tr=w-1080%2Ch-1080%2Cfo-auto"
          />
          {/*New event poster link*/}
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/register"
            imgSrc="https://ik.imagekit.io/fnsxnpbnzvj/IMG_20220307_223940_296_xiVz7hfcuc8g.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646722946100"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/inceptio"
            imgSrc="https://ik.imagekit.io/ieeecollege/INCEPTIO_I-UKN89y0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646147485406&tr=w-1080%2Ch-1080%2Cfo-auto"
          />
          {/*New event poster link*/}
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/register"
            imgSrc="https://ik.imagekit.io/ieeecollege/join_ieee_web_uXzeRaHDSe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645457722728&tr=w-1080%2Ch-1080%2Cfo-auto"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/SPS-ComSoc-Inauguration"
            imgSrc="https://ik.imagekit.io/ieeeGec/sqr_IPcEy4efL?ik-sdk-version=javascript-1.4.3&updatedAt=1643813385138"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/LinkedIn101"
            imgSrc="https://ik.imagekit.io/ieeeGec/LinkedIn__1__PsDQ0m5VutC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642605392157&tr=w-1080%2Ch-1080%2Cfo-auto"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/techolympia"
            imgSrc="https://ik.imagekit.io/ieeeGec/techolympia-final_rNv1GUyvE.jpg?updatedAt=1633271236700"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/arduino-basics"
            imgSrc="https://ik.imagekit.io/ieeeGec/arduino-basic_f9BRKZGPGkC.jpeg?updatedAt=1633271617462"
          />
          {/*New event poster link*/}
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/treasure-hunt"
            imgSrc="https://ik.imagekit.io/ieeeGec/4-01_eV10TFVNH.png?updatedAt=1632986520314"
          />
          {/*New event poster link*/}
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/construe"
            imgSrc="https://ik.imagekit.io/ieeecollege/construe_Nf-Y9fRPE.jpg?updatedAt=1632838231992&tr=w-1080,h-1080,fo-auto"
          />
          {/*New event poster link*/}
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/mind-bender"
            imgSrc="https://ik.imagekit.io/ieeeGec/mind-bender_W6fXZNLPKqh?updatedAt=1632657084494"
          />
          {/*New event poster link*/}
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/esthetique"
            imgSrc="https://ik.imagekit.io/ieeeGec/esthetique_Rzw2WEQ_j.jpg?updatedAt=1632581218431"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/Level-up"
            imgSrc="https://ik.imagekit.io/ieeeGec/levelup2_D3RgmmD6IP.jpg?updatedAt=1631805477404"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        {/*<SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/know-your-society"
            imgSrc="https://ik.imagekit.io/ieeeGec/know_your_society_pvHOAZo0-.png?tr=w-1080,h-1080,fo-auto"
          />
      </SwiperSlide>*/}
      </Swiper>
    </>
  )
}

export default CoverflowEffect
