import React, { Component } from 'react';
import PropTypes from 'prop-types';
import importMonaco from './importMonaco';

class Editor extends Component {
  static defaultProps = {
    onChange: () => {},
    defaultValue: '',
    value: '',
    language: 'javascript',
    theme: '',
    width: '100%',
    height: '100%',
    options: {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    importMonaco(monaco => {
      this.el.innerHTML = '';
      this.monaco = monaco;
      this.init();
    });
  }

  componentWillReceiveProps(nextProps) {
    const { value, language, theme, width, height, options } = this.props;
    if (value !== nextProps.value) {
      this.editor.setValue(nextProps.value);
    }
    if (language !== nextProps.language) {
      this.monaco.editor.setModelLanguage(this.editor.getModel(), nextProps.language);
    }
    if (theme !== nextProps.theme) {
      this.monaco.editor.setTheme(nextProps.theme);
    }
    if (this.editor && (width !== nextProps.width || height !== nextProps.height)) {
      this.editor.layout();
    }
    if (options !== nextProps.options) {
      this.editor.updateOptions(nextProps.options);
    }
  }

  init() {
    const { onChange, value, defaultValue, language, theme, options } = this.props;
    this.editor = this.monaco.editor.create(this.el, {
      value: value || defaultValue,
      language,
      theme,
      ...options,
    });

    this.editor.onDidChangeModelContent(event => {
      const editorValue = this.editor.getValue();

      // Always refer to the latest value
      console.log(editorValue, event);
      onChange(editorValue, event);
    });
  }

  render() {
    const { width, height } = this.props;
    return (
      <div
        style={{ width, height }}
        ref={el => {
          this.el = el;
        }}
      >
        编辑器加载中
      </div>
    );
  }
}

Editor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  language: PropTypes.string,
  theme: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  options: PropTypes.object,
};
export default Editor;
