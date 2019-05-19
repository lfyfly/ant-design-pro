import React, { Component } from 'react';
import Editor from '@/components/MonacoEditor/EditorWithLanguageSelect';

class Test1 extends Component {
  state = {
    language: 'javascript',
    code: '',
  };

  changeLangugae = () => {
    this.setState({ language: 'css' });
  };

  changeValue = () => {
    this.setState({ code: 'var a = 22222222222222222;' });
  };

  render() {
    const { code, language } = this.state;

    return (
      <div>
        <h1>Test1</h1>
        <button type="button" onClick={this.changeLangugae}>
          change language
        </button>
        <button type="button" onClick={this.changeValue}>
          change value
        </button>
        <Editor value={code} height="500px" language={language} />
        <Editor value={code} height="500px" language={language} />
      </div>
    );
  }
}

export default Test1;
