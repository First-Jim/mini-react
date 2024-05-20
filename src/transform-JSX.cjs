const babel = require('@babel/core');
const optionsObject = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-react-jsx'],
};

const code = babel.transformSync(
  'const ele = <div id="test"><h1>Hello JSX</h1></div>',
  optionsObject,
);

console.log(code);

// 'var ele = /*#__PURE__*/React.createElement("div", {\n' +
// '  id: "test"\n' +
// '}, /*#__PURE__*/React.createElement("h1", null, "Hello JSX"));'
