import React, { PureComponent } from 'react';
import Editor from './index';

class EditorWithLanguageSelect extends PureComponent {
  static defaultProps = {
    languages: ['javascript', 'python', 'java'],
  };

  constructor(props) {
    super();
    const languages = { props };
    this.state = {
      lan: languages[0],
    };
  }

  onLanChange = e => {
    this.setState({ lan: e.target.value });
  };

  render() {
    const { languages } = this.props;
    const { lan } = this.state;
    return (
      <div>
        <div>
          <select onChange={this.onLanChange}>
            {languages.map(lanItem => {
              return (
                <option key={lanItem} value={lanItem}>
                  {lanItem}
                </option>
              );
            })}
          </select>
        </div>
        <Editor {...this.props} language={lan} />
      </div>
    );
  }
}

export default EditorWithLanguageSelect;
