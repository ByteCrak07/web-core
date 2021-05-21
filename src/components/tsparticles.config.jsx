const tsParticlesConfig = {
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "attract",
      },
      onDiv: {
        elementId: "repulse-div",
        enable: false,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        parallax: {
          enable: false,
          force: 60,
          smooth: 80,
        },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 1,
        size: 40,
        speed: 3,
      },
      connect: {
        distance: 80,
        lineLinked: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    lineLinked: {
      blink: false,
      color: "#0a70a3",
      consent: false,
      distance: 300,
      enable: true,
      opacity: 0.7,
      width: 0.5,
    },
    rotate: {
      value: 0,
      random: true,
      direction: "clockwise",
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
    },
    move: {
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
      bounce: true,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 600,
      },
      limit: 0,
      value: 20,
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 1,
        sync: false,
      },
      random: false,
      value: 0.8,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: [
        {
          src: "/CS.png",
          width: 150,
          height: 46,
        },
        {
          src: "/IAS.png",
          width: 150,
          height: 94,
        },
        {
          src: "/PELS.png",
          width: 150,
          height: 60,
        },
        {
          src: "/PES.png",
          width: 150,
          height: 104,
        },
        {
          src: "/RAS.png",
          width: 150,
          height: 55,
        },
        {
          src: "/SIGHT.png",
          width: 150,
          height: 67,
        },
        {
          src: "/TEMS.png",
          width: 150,
          height: 46,
        },
        {
          src: "/WIE.png",
          width: 150,
          height: 116,
        },
      ],
      polygon: {
        nb_sides: 5,
      },
      stroke: {
        color: "#000000",
        width: 0,
      },
      type: "image",
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: false,
      value: 35,
    },
  },
  polygon: {
    draw: {
      enable: false,
      lineColor: "#ffffff",
      lineWidth: 0.5,
    },
    move: {
      radius: 10,
    },
    scale: 1,
    type: "none",
    url: "",
  },
}

export default tsParticlesConfig
