import loadjs from 'loadjs';
/* eslint-disable no-undef */
export default function(cb) {
  loadjs('require.js', () => {
    requirejs(['vs/editor/editor.main'], () => {
      cb(monaco);
    });
  });
}
