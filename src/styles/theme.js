const theme = {
  global: {
    button: {
      border: {
        radius: '4px',
      },
    },
    checkBox: {
      border: {
        radius: '4px',
      },
    },
    layer: {
      border: {
        radius: '4px',
      },
    },
    animation: {
      duration: '1s',
      jiggle: {
        duration: '0.1s',
      },
    },
    borderSize: {
      xsmall: '1px',
      small: '2px',
      medium: '4px',
      large: '12px',
      xlarge: '24px',
    },
    breakpoints: {
      small: {
        value: 768,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '4px',
          large: '6px',
          xlarge: '12px',
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '3px',
          small: '6px',
          medium: '12px',
          large: '24px',
          xlarge: '48px',
        },
        size: {
          xxsmall: '2px',
          xsmall: '2px',
          small: '4px',
          medium: '8px',
          large: '16px',
          xlarge: '32px',
          full: '100%',
          none: '0',
          hair: '1px',
        },
      },
      medium: {
        value: 1536,
      },
      large: {},
    },
    deviceBreakpoints: {
      phone: 'small',
      tablet: 'medium',
      computer: 'large',
    },
    control: {
      border: {
        width: '1px',
        radius: '4px',
      },
    },
    debounceDelay: 300,
    drop: {
      border: {
        width: '0px',
        radius: '4px',
      },
      shadowSize: 'small',
      zIndex: '20',
    },
    edgeSize: {
      none: '0',
      hair: '1px',
      xxsmall: '2px',
      xsmall: '4px',
      small: '8px',
      medium: '16px',
      large: '32px',
      xlarge: '64px',
      responsiveBreakpoint: 'small',
    },
    focus: {},
    font: {
      size: '14px',
      height: '24px',
      maxWidth: '432px',
      family: "'Montserrat', sans-serif;",
    },
    hover: {
      background: {},
      color: {},
    },
    input: {
      padding: '12px',
      weight: 600,
      border: {
        radius: '4px',
      },
    },
    selected: {},
    spacing: '24px',
    size: {
      xxsmall: '48px',
      xsmall: '96px',
      small: '192px',
      medium: '384px',
      large: '768px',
      xlarge: '1152px',
      xxlarge: '1536px',
      full: '100%',
    },
  },
  icon: {
    size: {
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px',
      xsmall: '14px',
    },
  },
  accordion: {
    icons: {},
  },
  anchor: {
    textDecoration: 'none',
    fontWeight: 600,
    hover: {
      textDecoration: 'underline',
    },
  },
  box: {
    responsiveBreakpoint: 'small',
  },
  button: {
    border: {
      width: '2px',
      radius: '1px',
    },
    disabled: {
      opacity: 0.3,
    },
    minWidth: '96px',
    maxWidth: '384px',
    padding: {
      vertical: '4px',
      horizontal: '22px',
    },
  },
  calendar: {
    small: {
      fontSize: '14px',
      lineHeight: 1.375,
      daySize: '27.428571428571427px',
      slideDuration: '0.2s',
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.857142857142854px',
      slideDuration: '0.5s',
    },
    large: {
      fontSize: '30px',
      lineHeight: 1.11,
      daySize: '109.71428571428571px',
      slideDuration: '0.8s',
    },
    icons: {
      small: {},
    },
  },
  carousel: {
    icons: {},
  },
  chart: {},
  checkBox: {
    border: {
      width: '2px',
    },
    check: {
      radius: '4px',
      thickness: '4px',
    },
    icon: {},
    icons: {},
    hover: {
      border: {},
    },
    size: '24px',
    toggle: {
      radius: '24px',
      size: '48px',
      knob: {},
    },
  },
  clock: {
    analog: {
      hour: {
        width: '8px',
        size: '24px',
        shape: 'round',
      },
      minute: {
        width: '4px',
        size: '12px',
        shape: 'round',
      },
      second: {
        width: '3px',
        size: '9px',
        shape: 'round',
      },
      size: {
        small: '72px',
        medium: '96px',
        large: '144px',
        xlarge: '216px',
        huge: '288px',
      },
    },
    digital: {
      text: {
        xsmall: {
          size: '10px',
          height: 1.5,
        },
        small: {
          size: '14px',
          height: 1.43,
        },
        medium: {
          size: '18px',
          height: 1.375,
        },
        large: {
          size: '22px',
          height: 1.167,
        },
        xlarge: {
          size: '26px',
          height: 1.1875,
        },
        xxlarge: {
          size: '34px',
          height: 1.125,
        },
      },
    },
  },
  collapsible: {
    minSpeed: 200,
    baseline: 500,
  },
  dataTable: {
    header: {},
    groupHeader: {
      border: {
        side: 'bottom',
        size: 'xsmall',
      },
      fill: 'vertical',
      pad: {
        horizontal: 'small',
        vertical: 'xsmall',
      },
    },
    icons: {},
    resize: {
      border: {
        side: 'right',
      },
    },
    primary: {
      weight: 'bold',
    },
  },
  diagram: {
    line: {},
  },
  formField: {
    border: {
      position: 'inner',
      side: 'bottom',
      error: {},
    },
    content: {
      pad: {
        horizontal: 'small',
        bottom: 'small',
      },
    },
    error: {
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    help: {
      margin: {
        left: 'small',
      },
    },
    label: {
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    margin: {
      bottom: 'small',
    },
  },
  grommet: {},
  heading: {
    font: false,
    level: {
      '1': {
        font: {},
        small: {
          size: '34px',
          height: '40px',
          maxWidth: '816px',
        },
        medium: {
          size: '50px',
          height: '56px',
          maxWidth: '1200px',
        },
        large: {
          size: '82px',
          height: '88px',
          maxWidth: '1968px',
        },
        xlarge: {
          size: '114px',
          height: '120px',
          maxWidth: '2736px',
        },
      },
      '2': {
        font: {},
        small: {
          size: '26px',
          height: '32px',
          maxWidth: '624px',
        },
        medium: {
          size: '34px',
          height: '40px',
          maxWidth: '816px',
        },
        large: {
          size: '50px',
          height: '56px',
          maxWidth: '1200px',
        },
        xlarge: {
          size: '66px',
          height: '72px',
          maxWidth: '1584px',
        },
      },
      '3': {
        font: {},
        small: {
          size: '22px',
          height: '28px',
          maxWidth: '528px',
        },
        medium: {
          size: '26px',
          height: '32px',
          maxWidth: '624px',
        },
        large: {
          size: '34px',
          height: '40px',
          maxWidth: '816px',
        },
        xlarge: {
          size: '42px',
          height: '48px',
          maxWidth: '1008px',
        },
      },
      '4': {
        font: {},
        small: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
        medium: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
        large: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
        xlarge: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
      },
      '5': {
        font: {},
        small: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
        medium: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
        large: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
        xlarge: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
      },
      '6': {
        font: {},
        small: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
        medium: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
        large: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
        xlarge: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
      },
    },
    responsiveBreakpoint: 'small',
    weight: 500,
  },
  layer: {
    border: {
      radius: '4px',
    },
    container: {
      zIndex: '15',
    },
    responsiveBreakpoint: 'small',
    zIndex: '10',
  },
  menu: {
    icons: {},
  },
  paragraph: {
    small: {
      size: '14px',
      height: '20px',
      maxWidth: '336px',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '22px',
      height: '28px',
      maxWidth: '528px',
    },
    xlarge: {
      size: '26px',
      height: '32px',
      maxWidth: '624px',
    },
    xxlarge: {
      size: '34px',
      height: '40px',
      maxWidth: '816px',
    },
  },
  radioButton: {
    border: {
      width: '2px',
    },
    check: {
      radius: '100%',
    },
    hover: {
      border: {},
    },
    icon: {},
    icons: {},
    gap: 'small',
    size: '24px',
  },
  rangeInput: {
    track: {
      height: '4px',
    },
    thumb: {},
  },
  rangeSelector: {},
  select: {
    container: {},
    control: {},
    icons: {},
    options: {
      box: {
        align: 'start',
        pad: 'small',
      },
      text: {
        margin: 'none',
      },
    },
    step: 20,
  },
  tab: {
    border: {
      side: 'bottom',
      size: 'small',
      active: {},
      hover: {},
    },
    hover: {},
    margin: {
      vertical: 'xxsmall',
      horizontal: 'small',
    },
    pad: {
      bottom: 'xsmall',
    },
  },
  tabs: {
    header: {},
    panel: {},
  },
  table: {
    header: {
      align: 'start',
      pad: {
        horizontal: 'small',
        vertical: 'xsmall',
      },
      border: 'bottom',
      verticalAlign: 'bottom',
      fill: 'vertical',
    },
    body: {
      align: 'start',
      pad: {
        horizontal: 'small',
        vertical: 'xsmall',
      },
    },
    footer: {
      align: 'start',
      pad: {
        horizontal: 'small',
        vertical: 'xsmall',
      },
      border: 'top',
      verticalAlign: 'top',
      fill: 'vertical',
    },
  },
  text: {
    xsmall: {
      size: '10px',
      height: 1.5,
      maxWidth: '288px',
    },
    small: {
      size: '12px',
      height: 1.43,
      maxWidth: '336px',
    },
    medium: {
      size: '14px',
      height: 1.375,
      maxWidth: '432px',
    },
    large: {
      size: '20px',
      height: 1.167,
      maxWidth: '528px',
    },
    xlarge: {
      size: '28px',
      height: 1.1875,
      maxWidth: '624px',
    },
    xxlarge: {
      size: '26px',
      height: 1.125,
      maxWidth: '816px',
    },
  },
  video: {
    icons: {},
  },
  worldMap: {
    continent: {
      active: '8px',
      base: '6px',
    },
    hover: {},
    place: {
      active: '20px',
      base: '8px',
    },
  },
};

export default theme;
