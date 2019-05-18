import importMonaco from './importMonaco';

export default function() {
  importMonaco(monaco => {
    monaco.languages.registerCompletionItemProvider('javascript', {
      provideCompletionItems() {
        // find out if we are completing a property in the 'dependencies' object.
        return {
          suggestions: [
            {
              label: '"lodash"',
              kind: monaco.languages.CompletionItemKind.Function,
              documentation: 'The Lodash library exported as Node.js modules.',
              insertText: '"lodash": "*"',
            },
            {
              label: '"express"',
              kind: monaco.languages.CompletionItemKind.Function,
              documentation: 'Fast, unopinionated, minimalist web framework',
              insertText: '"express": "*"',
            },
            {
              label: '"mkdirp"',
              kind: monaco.languages.CompletionItemKind.Function,
              documentation: 'Recursively mkdir, like <code>mkdir -p</code>',
              insertText: '"mkdirp": "*"',
            },
          ],
        };
      },
    });
  });
}
