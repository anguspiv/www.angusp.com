const theme = {
  global: {
    colors: {
      icon: {
        dark: '#f8f8f8',
        light: '#666666',
      },
      active: {
        light: '#57b457',
        dark: '#52b7f9',
      },
      black: '#000000',
      border: {
        dark: 'rgba(255,255,255,0.33)',
        light: 'rgba(0,0,0,0.33)',
      },
      brand: '#ffffff',
      control: {
        dark: '#52b7f9',
        light: '#4a984a',
      },
      focus: '#5ec660',
      placeholder: '#AAAAAA',
      selected: 'brand',
      text: {
        dark: '#f8f8f8',
        light: '#444444',
      },
      white: '#FFFFFF',
      'accent-1': '#2C64AE',
      'accent-2': '#5ec660',
      'accent-3': '#d4293d',
      'accent-4': '#9C27B0',
      'dark-1': '#333333',
      'dark-2': '#555555',
      'dark-3': '#777777',
      'dark-4': '#999999',
      'dark-5': '#999999',
      'dark-6': '#999999',
      'light-1': '#F8F8F8',
      'light-2': '#F2F2F2',
      'light-3': '#EDEDED',
      'light-4': '#DADADA',
      'light-5': '#DADADA',
      'light-6': '#DADADA',
      'neutral-1': '#795548',
      'neutral-2': '#CDDC39',
      'neutral-3': '#607D8B',
      'neutral-4': '#9cb6d7',
      'status-critical': '#FF4040',
      'status-error': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': '#00C781',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'neutral-5': '#FF9800',
    },
    drop: {
      background: '#ffffff',
    },
    elevation: {
      light: {
        none: 'none',
        xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
        small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
        medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
        large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
        xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)',
      },
      dark: {
        none: 'none',
        xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
        small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
        medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
        large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
        xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)',
      },
    },
    focus: {
      border: {
        color: 'focus',
      },
    },
    hover: {
      background: {
        dark: '#52b7f9',
        light: '#52b7f9',
      },
      color: {
        dark: '#333333',
        light: '#333333',
      },
    },
    input: {
      padding: '12px',
      weight: 600,
    },
    opacity: {
      strong: 0.8,
      medium: 0.4,
      weak: 0.1,
    },
    selected: {
      background: 'selected',
      color: 'white',
    },
  },
  anchor: {
    color: {
      dark: '#f7efff',
      light: '#275596',
    },
  },
  button: {
    border: {
      color: {
        dark: '#fbf9ff',
        light: '#28599e',
      },
    },
    primary: {
      color: {
        dark: '#0093ff',
        light: '#316cbe',
      },
    },
    disabled: {
      opacity: 0.3,
    },
  },
  checkBox: {
    border: {
      color: {
        dark: 'rgba(255, 255, 255, 0.5)',
        light: 'rgba(0, 0, 0, 0.15)',
      },
    },
    hover: {
      border: {
        color: {
          dark: 'white',
          light: 'black',
        },
      },
    },
    toggle: {
      color: {
        dark: '#d9d9d9',
        light: '#d9d9d9',
      },
    },
  },
  clock: {
    analog: {
      hour: {
        color: {
          dark: 'light-2',
          light: 'dark-3',
        },
      },
      minute: {
        color: {
          dark: 'light-4',
          light: 'dark-3',
        },
      },
      second: {
        color: {
          dark: 'accent-1',
          light: 'accent-1',
        },
      },
    },
  },
  dataTable: {
    header: {},
    groupHeader: {
      background: {
        dark: 'dark-2',
        light: 'light-2',
      },
    },
    resize: {
      border: {
        color: 'border',
      },
    },
  },
  diagram: {
    line: {
      color: 'accent-1',
    },
  },
  formField: {
    border: {
      color: 'border',
      error: {
        color: {
          dark: 'white',
          light: 'status-critical',
        },
      },
    },
    error: {
      color: {
        dark: 'status-critical',
        light: 'status-critical',
      },
    },
    help: {
      color: {
        dark: 'dark-3',
        light: 'dark-3',
      },
    },
  },
  grommet: {},
  heading: {},
  layer: {
    background: 'white',
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)',
    },
  },
  menu: {
    icons: {},
  },
  meter: {
    color: 'accent-1',
  },
  paragraph: {},
  radioButton: {
    border: {
      color: {
        dark: 'rgba(255, 255, 255, 0.5)',
        light: 'rgba(0, 0, 0, 0.15)',
      },
    },
    hover: {
      border: {
        color: {
          dark: 'white',
          light: 'black',
        },
      },
    },
    icon: {},
    icons: {},
  },
  rangeInput: {
    track: {
      color: {
        dark: '#3a82b1',
        light: '#52b7f9',
      },
    },
    thumb: {},
  },
  rangeSelector: {
    background: {
      invert: {
        color: 'light-4',
      },
    },
  },
  select: {
    container: {},
    control: {},
    icons: {},
    options: {},
  },
  tab: {
    active: {
      color: 'text',
    },
    border: {
      color: {
        dark: 'accent-1',
        light: 'brand',
      },
      active: {
        color: {
          dark: 'white',
          light: 'black',
        },
      },
      hover: {
        color: {
          dark: 'white',
          light: 'black',
        },
      },
    },
    color: 'control',
    hover: {
      color: {
        dark: 'white',
        light: 'black',
      },
    },
    margin: {},
    pad: {},
  },
  tabs: {
    header: {},
    panel: {},
  },
  table: {
    header: {},
    body: {},
    footer: {},
  },
  text: {},
  video: {
    captions: {
      background: 'rgba(0, 0, 0, 0.7)',
    },
    icons: {},
    scrubber: {
      color: 'light-4',
    },
  },
  worldMap: {
    color: 'light-3',
    continent: {},
    hover: {
      color: 'light-4',
    },
    place: {},
  },
};

export default theme;
