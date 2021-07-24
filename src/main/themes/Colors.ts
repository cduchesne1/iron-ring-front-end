const Colors = {
  codGray: '#121212',
  white: '#FFFFFF',
  silverChalice: '#9F9F9F',
  tundora: '#434343',
  concrete: '#F2F2F2',
  mineShaft: '#202020',
  whiteTransparent: '#FFFFFF40',
  mineShaftTransparent: '#33333340',
  shipGray: '#47464A',
  black: '#000000',
  flamePea: '#DD553D',
  cerulean: '#01A8E9',
  whisper: '#F3F4F9',

  hexToRGBA: (color: string, opacity: number) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity})`;
  },
};

export default Colors;
