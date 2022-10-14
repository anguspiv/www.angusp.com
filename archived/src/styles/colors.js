const colors = {};

colors.white = '#fff';
colors.offWhite = '#eee';
colors.black = '#111';
colors.red = '#d9534f';
colors.orange = '#f0ad4e';
colors.yellow = '#ffd500';
colors.green = '#5cb85c';
colors.blue = '#025eae';
colors.teal = '#0283f1';
colors.pink = '#ff5b77';
colors.purple = '#613d7c';
colors.gray = '#666';

colors.background = {
  default: colors.offWhite,
  light: colors.offWhite,
  dark: colors.black,
};

colors.text = {
  default: colors.black,
  light: colors.black,
  dark: colors.offWhite,
  muted: colors.gray,
};

colors.link = {
  default: colors.blue,
  visited: colors.purple,
  hover: colors.teal,
  light: colors.blue,
  dark: colors.teal,
  visitedDark: colors.purple,
  hoverDark: colors.blue,
};

export default colors;
