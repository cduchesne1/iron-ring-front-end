import Colors from './Colors';

interface Types {
  [key: string]: string;
}

const type: Types = {
  heavy: 'Noah-Heavy',
  bold: 'Noah-Bold',
  medium: 'Noah-Medium',
};

function title(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.heavy,
    fontSize: 28,
    letterSpacing: 0.2,
  };
}

function topicTitle(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.heavy,
    fontSize: 36,
    letterSpacing: 0.2,
  };
}

function paragraph(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.medium,
    fontSize: 18,
    letterSpacing: 0.2,
  };
}

function body(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.medium,
    fontSize: 18,
    letterSpacing: 0.2,
  };
}

function comment(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.medium,
    fontSize: 18,
    letterSpacing: 0,
  };
}

function input(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.medium,
    fontSize: 18,
    letterSpacing: 0,
  };
}

function videoTimecode(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.bold,
    fontSize: 20,
    letterSpacing: 0.2,
  };
}
function audioTitle(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.bold,
    fontSize: 16,
    letterSpacing: 0,
  };
}
function audioTimecode(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.medium,
    fontSize: 14,
    letterSpacing: 0,
  };
}
function commentName(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.bold,
    fontSize: 16,
    letterSpacing: 0,
  };
}
function commentTime(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.medium,
    fontSize: 14,
    letterSpacing: 0,
  };
}
function button(color: Colors = Colors.black) {
  return {
    color: color,
    fontFamily: type.bold,
    fontSize: 18,
    letterSpacing: 0.2,
  };
}

export default {
  title,
  topicTitle,
  paragraph,
  body,
  comment,
  input,
  videoTimecode,
  audioTitle,
  audioTimecode,
  commentName,
  commentTime,
  button,
};
