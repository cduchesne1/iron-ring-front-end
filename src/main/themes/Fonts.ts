import Colors from './Colors';

interface Types {
  [key: string]: string;
}

const type: Types = {
  heavy: 'Noah-Heavy',
  bold: 'Noah-Bold',
  medium: 'Noah-Medium',
};

function xlarge(fontFamily: string = 'base') {
  return {
    color: Colors.black,
    fontFamily: type[fontFamily],
    fontSize: 36,
  };
}

function medium(fontFamily: string = 'base') {
  return {
    color: Colors.black,
    fontFamily: type[fontFamily],
    fontSize: 28,
  };
}

function secondary(fontFamily: string = 'base') {
  return {
    color: Colors.black,
    fontFamily: type[fontFamily],
    fontSize: 20,
  };
}

function main(fontFamily: string = 'base') {
  return {
    color: Colors.black,
    fontFamily: type[fontFamily],
    fontSize: 18,
  };
}

function sub(fontFamily: string = 'base') {
  return {
    color: Colors.black,
    fontFamily: type[fontFamily],
    fontSize: 16,
  };
}

function small(fontFamily: string = 'base') {
  return {
    color: Colors.black,
    fontFamily: type[fontFamily],
    fontSize: 14,
  };
}

export default {
  small,
  sub,
  secondary,
  main,
  medium,
  xlarge,
};
