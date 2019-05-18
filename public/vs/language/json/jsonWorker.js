/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-json version: 2.5.1(b4d1a1e6b28e15a0f913a6ed6f733af32cd67470)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-json/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
!(function(e) {
  if ('object' == typeof module && 'object' == typeof module.exports) {
    var t = e(require, exports);
    void 0 !== t && (module.exports = t);
  } else
    'function' == typeof define &&
      define.amd &&
      define('vscode-languageserver-types/main', ['require', 'exports'], e);
})(function(e, t) {
  'use strict';
  var a, r, n, o, i, s, c, u, f, l, d, p, h, m, g, v, y, b, x, S, C, j, k, T, O, A, E, I, P, w, N;
  Object.defineProperty(t, '__esModule', { value: !0 }),
    ((r = a = t.Position || (t.Position = {})).create = function(e, t) {
      return { line: e, character: t };
    }),
    (r.is = function(e) {
      var t = e;
      return ae.objectLiteral(t) && ae.number(t.line) && ae.number(t.character);
    }),
    ((o = n = t.Range || (t.Range = {})).create = function(e, t, r, n) {
      if (ae.number(e) && ae.number(t) && ae.number(r) && ae.number(n))
        return { start: a.create(e, t), end: a.create(r, n) };
      if (a.is(e) && a.is(t)) return { start: e, end: t };
      throw new Error(
        'Range#create called with invalid arguments[' + e + ', ' + t + ', ' + r + ', ' + n + ']'
      );
    }),
    (o.is = function(e) {
      var t = e;
      return ae.objectLiteral(t) && a.is(t.start) && a.is(t.end);
    }),
    ((s = i = t.Location || (t.Location = {})).create = function(e, t) {
      return { uri: e, range: t };
    }),
    (s.is = function(e) {
      var t = e;
      return ae.defined(t) && n.is(t.range) && (ae.string(t.uri) || ae.undefined(t.uri));
    }),
    ((c = t.LocationLink || (t.LocationLink = {})).create = function(e, t, r, n) {
      return { targetUri: e, targetRange: t, targetSelectionRange: r, originSelectionRange: n };
    }),
    (c.is = function(e) {
      var t = e;
      return (
        ae.defined(t) &&
        n.is(t.targetRange) &&
        ae.string(t.targetUri) &&
        (n.is(t.targetSelectionRange) || ae.undefined(t.targetSelectionRange)) &&
        (n.is(t.originSelectionRange) || ae.undefined(t.originSelectionRange))
      );
    }),
    ((f = u = t.Color || (t.Color = {})).create = function(e, t, r, n) {
      return { red: e, green: t, blue: r, alpha: n };
    }),
    (f.is = function(e) {
      var t = e;
      return ae.number(t.red) && ae.number(t.green) && ae.number(t.blue) && ae.number(t.alpha);
    }),
    ((l = t.ColorInformation || (t.ColorInformation = {})).create = function(e, t) {
      return { range: e, color: t };
    }),
    (l.is = function(e) {
      var t = e;
      return n.is(t.range) && u.is(t.color);
    }),
    ((d = t.ColorPresentation || (t.ColorPresentation = {})).create = function(e, t, r) {
      return { label: e, textEdit: t, additionalTextEdits: r };
    }),
    (d.is = function(e) {
      var t = e;
      return (
        ae.string(t.label) &&
        (ae.undefined(t.textEdit) || C.is(t)) &&
        (ae.undefined(t.additionalTextEdits) || ae.typedArray(t.additionalTextEdits, C.is))
      );
    }),
    ((p = t.FoldingRangeKind || (t.FoldingRangeKind = {})).Comment = 'comment'),
    (p.Imports = 'imports'),
    (p.Region = 'region'),
    ((h = t.FoldingRange || (t.FoldingRange = {})).create = function(e, t, r, n, o) {
      var i = { startLine: e, endLine: t };
      return (
        ae.defined(r) && (i.startCharacter = r),
        ae.defined(n) && (i.endCharacter = n),
        ae.defined(o) && (i.kind = o),
        i
      );
    }),
    (h.is = function(e) {
      var t = e;
      return (
        ae.number(t.startLine) &&
        ae.number(t.startLine) &&
        (ae.undefined(t.startCharacter) || ae.number(t.startCharacter)) &&
        (ae.undefined(t.endCharacter) || ae.number(t.endCharacter)) &&
        (ae.undefined(t.kind) || ae.string(t.kind))
      );
    }),
    ((g = m =
      t.DiagnosticRelatedInformation || (t.DiagnosticRelatedInformation = {})).create = function(
      e,
      t
    ) {
      return { location: e, message: t };
    }),
    (g.is = function(e) {
      var t = e;
      return ae.defined(t) && i.is(t.location) && ae.string(t.message);
    }),
    ((v = t.DiagnosticSeverity || (t.DiagnosticSeverity = {})).Error = 1),
    (v.Warning = 2),
    (v.Information = 3),
    (v.Hint = 4),
    ((b = y = t.Diagnostic || (t.Diagnostic = {})).create = function(e, t, r, n, o, i) {
      var a = { range: e, message: t };
      return (
        ae.defined(r) && (a.severity = r),
        ae.defined(n) && (a.code = n),
        ae.defined(o) && (a.source = o),
        ae.defined(i) && (a.relatedInformation = i),
        a
      );
    }),
    (b.is = function(e) {
      var t = e;
      return (
        ae.defined(t) &&
        n.is(t.range) &&
        ae.string(t.message) &&
        (ae.number(t.severity) || ae.undefined(t.severity)) &&
        (ae.number(t.code) || ae.string(t.code) || ae.undefined(t.code)) &&
        (ae.string(t.source) || ae.undefined(t.source)) &&
        (ae.undefined(t.relatedInformation) || ae.typedArray(t.relatedInformation, m.is))
      );
    }),
    ((S = x = t.Command || (t.Command = {})).create = function(e, t) {
      for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
      var o = { title: e, command: t };
      return ae.defined(r) && 0 < r.length && (o.arguments = r), o;
    }),
    (S.is = function(e) {
      var t = e;
      return ae.defined(t) && ae.string(t.title) && ae.string(t.command);
    }),
    ((j = C = t.TextEdit || (t.TextEdit = {})).replace = function(e, t) {
      return { range: e, newText: t };
    }),
    (j.insert = function(e, t) {
      return { range: { start: e, end: e }, newText: t };
    }),
    (j.del = function(e) {
      return { range: e, newText: '' };
    }),
    (j.is = function(e) {
      var t = e;
      return ae.objectLiteral(t) && ae.string(t.newText) && n.is(t.range);
    }),
    ((T = k = t.TextDocumentEdit || (t.TextDocumentEdit = {})).create = function(e, t) {
      return { textDocument: e, edits: t };
    }),
    (T.is = function(e) {
      var t = e;
      return ae.defined(t) && D.is(t.textDocument) && Array.isArray(t.edits);
    }),
    ((A = O = t.CreateFile || (t.CreateFile = {})).create = function(e, t) {
      var r = { kind: 'create', uri: e };
      return (
        void 0 === t || (void 0 === t.overwrite && void 0 === t.ignoreIfExists) || (r.options = t),
        r
      );
    }),
    (A.is = function(e) {
      var t = e;
      return (
        t &&
        'create' === t.kind &&
        ae.string(t.uri) &&
        (void 0 === t.options ||
          ((void 0 === t.options.overwrite || ae.boolean(t.options.overwrite)) &&
            (void 0 === t.options.ignoreIfExists || ae.boolean(t.options.ignoreIfExists))))
      );
    }),
    ((I = E = t.RenameFile || (t.RenameFile = {})).create = function(e, t, r) {
      var n = { kind: 'rename', oldUri: e, newUri: t };
      return (
        void 0 === r || (void 0 === r.overwrite && void 0 === r.ignoreIfExists) || (n.options = r),
        n
      );
    }),
    (I.is = function(e) {
      var t = e;
      return (
        t &&
        'rename' === t.kind &&
        ae.string(t.oldUri) &&
        ae.string(t.newUri) &&
        (void 0 === t.options ||
          ((void 0 === t.options.overwrite || ae.boolean(t.options.overwrite)) &&
            (void 0 === t.options.ignoreIfExists || ae.boolean(t.options.ignoreIfExists))))
      );
    }),
    ((w = P = t.DeleteFile || (t.DeleteFile = {})).create = function(e, t) {
      var r = { kind: 'delete', uri: e };
      return (
        void 0 === t ||
          (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
          (r.options = t),
        r
      );
    }),
    (w.is = function(e) {
      var t = e;
      return (
        t &&
        'delete' === t.kind &&
        ae.string(t.uri) &&
        (void 0 === t.options ||
          ((void 0 === t.options.recursive || ae.boolean(t.options.recursive)) &&
            (void 0 === t.options.ignoreIfNotExists || ae.boolean(t.options.ignoreIfNotExists))))
      );
    }),
    ((N = t.WorkspaceEdit || (t.WorkspaceEdit = {})).is = function(e) {
      var t = e;
      return (
        t &&
        (void 0 !== t.changes || void 0 !== t.documentChanges) &&
        (void 0 === t.documentChanges ||
          t.documentChanges.every(function(e) {
            return ae.string(e.kind) ? O.is(e) || E.is(e) || P.is(e) : k.is(e);
          }))
      );
    });
  var M,
    D,
    V,
    _,
    F,
    R,
    L,
    $,
    q,
    W,
    K,
    U,
    B,
    J,
    H = (function() {
      function e(e) {
        this.edits = e;
      }
      return (
        (e.prototype.insert = function(e, t) {
          this.edits.push(C.insert(e, t));
        }),
        (e.prototype.replace = function(e, t) {
          this.edits.push(C.replace(e, t));
        }),
        (e.prototype.delete = function(e) {
          this.edits.push(C.del(e));
        }),
        (e.prototype.add = function(e) {
          this.edits.push(e);
        }),
        (e.prototype.all = function() {
          return this.edits;
        }),
        (e.prototype.clear = function() {
          this.edits.splice(0, this.edits.length);
        }),
        e
      );
    })(),
    z = (function() {
      function e(r) {
        var n = this;
        (this._textEditChanges = Object.create(null)),
          r &&
            ((this._workspaceEdit = r).documentChanges
              ? r.documentChanges.forEach(function(e) {
                  if (k.is(e)) {
                    var t = new H(e.edits);
                    n._textEditChanges[e.textDocument.uri] = t;
                  }
                })
              : r.changes &&
                Object.keys(r.changes).forEach(function(e) {
                  var t = new H(r.changes[e]);
                  n._textEditChanges[e] = t;
                }));
      }
      return (
        Object.defineProperty(e.prototype, 'edit', {
          get: function() {
            return this._workspaceEdit;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.getTextEditChange = function(e) {
          if (D.is(e)) {
            if (
              (this._workspaceEdit || (this._workspaceEdit = { documentChanges: [] }),
              !this._workspaceEdit.documentChanges)
            )
              throw new Error('Workspace edit is not configured for document changes.');
            var t = e;
            if (!(n = this._textEditChanges[t.uri])) {
              var r = { textDocument: t, edits: (o = []) };
              this._workspaceEdit.documentChanges.push(r),
                (n = new H(o)),
                (this._textEditChanges[t.uri] = n);
            }
            return n;
          }
          if (
            (this._workspaceEdit || (this._workspaceEdit = { changes: Object.create(null) }),
            !this._workspaceEdit.changes)
          )
            throw new Error('Workspace edit is not configured for normal text edit changes.');
          var n;
          if (!(n = this._textEditChanges[e])) {
            var o = [];
            (this._workspaceEdit.changes[e] = o), (n = new H(o)), (this._textEditChanges[e] = n);
          }
          return n;
        }),
        (e.prototype.createFile = function(e, t) {
          this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(O.create(e, t));
        }),
        (e.prototype.renameFile = function(e, t, r) {
          this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(E.create(e, t, r));
        }),
        (e.prototype.deleteFile = function(e, t) {
          this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(P.create(e, t));
        }),
        (e.prototype.checkDocumentChanges = function() {
          if (!this._workspaceEdit || !this._workspaceEdit.documentChanges)
            throw new Error('Workspace edit is not configured for document changes.');
        }),
        e
      );
    })();
  (t.WorkspaceChange = z),
    ((M = t.TextDocumentIdentifier || (t.TextDocumentIdentifier = {})).create = function(e) {
      return { uri: e };
    }),
    (M.is = function(e) {
      var t = e;
      return ae.defined(t) && ae.string(t.uri);
    }),
    ((V = D =
      t.VersionedTextDocumentIdentifier ||
      (t.VersionedTextDocumentIdentifier = {})).create = function(e, t) {
      return { uri: e, version: t };
    }),
    (V.is = function(e) {
      var t = e;
      return ae.defined(t) && ae.string(t.uri) && (null === t.version || ae.number(t.version));
    }),
    ((_ = t.TextDocumentItem || (t.TextDocumentItem = {})).create = function(e, t, r, n) {
      return { uri: e, languageId: t, version: r, text: n };
    }),
    (_.is = function(e) {
      var t = e;
      return (
        ae.defined(t) &&
        ae.string(t.uri) &&
        ae.string(t.languageId) &&
        ae.number(t.version) &&
        ae.string(t.text)
      );
    }),
    ((R = F = t.MarkupKind || (t.MarkupKind = {})).PlainText = 'plaintext'),
    (R.Markdown = 'markdown'),
    ((L = F = t.MarkupKind || (t.MarkupKind = {})).is = function(e) {
      var t = e;
      return t === L.PlainText || t === L.Markdown;
    }),
    (($ = t.MarkupContent || (t.MarkupContent = {})).is = function(e) {
      var t = e;
      return ae.objectLiteral(e) && F.is(t.kind) && ae.string(t.value);
    }),
    ((q = t.CompletionItemKind || (t.CompletionItemKind = {})).Text = 1),
    (q.Method = 2),
    (q.Function = 3),
    (q.Constructor = 4),
    (q.Field = 5),
    (q.Variable = 6),
    (q.Class = 7),
    (q.Interface = 8),
    (q.Module = 9),
    (q.Property = 10),
    (q.Unit = 11),
    (q.Value = 12),
    (q.Enum = 13),
    (q.Keyword = 14),
    (q.Snippet = 15),
    (q.Color = 16),
    (q.File = 17),
    (q.Reference = 18),
    (q.Folder = 19),
    (q.EnumMember = 20),
    (q.Constant = 21),
    (q.Struct = 22),
    (q.Event = 23),
    (q.Operator = 24),
    (q.TypeParameter = 25),
    ((W = t.InsertTextFormat || (t.InsertTextFormat = {})).PlainText = 1),
    (W.Snippet = 2),
    ((t.CompletionItem || (t.CompletionItem = {})).create = function(e) {
      return { label: e };
    }),
    ((t.CompletionList || (t.CompletionList = {})).create = function(e, t) {
      return { items: e || [], isIncomplete: !!t };
    }),
    ((U = K = t.MarkedString || (t.MarkedString = {})).fromPlainText = function(e) {
      return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
    }),
    (U.is = function(e) {
      var t = e;
      return ae.string(t) || (ae.objectLiteral(t) && ae.string(t.language) && ae.string(t.value));
    }),
    ((t.Hover || (t.Hover = {})).is = function(e) {
      var t = e;
      return (
        !!t &&
        ae.objectLiteral(t) &&
        ($.is(t.contents) || K.is(t.contents) || ae.typedArray(t.contents, K.is)) &&
        (void 0 === e.range || n.is(e.range))
      );
    }),
    ((t.ParameterInformation || (t.ParameterInformation = {})).create = function(e, t) {
      return t ? { label: e, documentation: t } : { label: e };
    }),
    ((t.SignatureInformation || (t.SignatureInformation = {})).create = function(e, t) {
      for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
      var o = { label: e };
      return (
        ae.defined(t) && (o.documentation = t),
        ae.defined(r) ? (o.parameters = r) : (o.parameters = []),
        o
      );
    }),
    ((B = t.DocumentHighlightKind || (t.DocumentHighlightKind = {})).Text = 1),
    (B.Read = 2),
    (B.Write = 3),
    ((t.DocumentHighlight || (t.DocumentHighlight = {})).create = function(e, t) {
      var r = { range: e };
      return ae.number(t) && (r.kind = t), r;
    }),
    ((J = t.SymbolKind || (t.SymbolKind = {})).File = 1),
    (J.Module = 2),
    (J.Namespace = 3),
    (J.Package = 4),
    (J.Class = 5),
    (J.Method = 6),
    (J.Property = 7),
    (J.Field = 8),
    (J.Constructor = 9),
    (J.Enum = 10),
    (J.Interface = 11),
    (J.Function = 12),
    (J.Variable = 13),
    (J.Constant = 14),
    (J.String = 15),
    (J.Number = 16),
    (J.Boolean = 17),
    (J.Array = 18),
    (J.Object = 19),
    (J.Key = 20),
    (J.Null = 21),
    (J.EnumMember = 22),
    (J.Struct = 23),
    (J.Event = 24),
    (J.Operator = 25),
    (J.TypeParameter = 26),
    ((t.SymbolInformation || (t.SymbolInformation = {})).create = function(e, t, r, n, o) {
      var i = { name: e, kind: t, location: { uri: n, range: r } };
      return o && (i.containerName = o), i;
    });
  var G,
    Q,
    Z,
    X,
    Y,
    ee,
    te = function() {};
  (t.DocumentSymbol = te),
    ((G = te = t.DocumentSymbol || (t.DocumentSymbol = {})).create = function(e, t, r, n, o, i) {
      var a = { name: e, detail: t, kind: r, range: n, selectionRange: o };
      return void 0 !== i && (a.children = i), a;
    }),
    (G.is = function(e) {
      var t = e;
      return (
        t &&
        ae.string(t.name) &&
        ae.number(t.kind) &&
        n.is(t.range) &&
        n.is(t.selectionRange) &&
        (void 0 === t.detail || ae.string(t.detail)) &&
        (void 0 === t.deprecated || ae.boolean(t.deprecated)) &&
        (void 0 === t.children || Array.isArray(t.children))
      );
    }),
    (t.DocumentSymbol = te),
    ((Q = t.CodeActionKind || (t.CodeActionKind = {})).QuickFix = 'quickfix'),
    (Q.Refactor = 'refactor'),
    (Q.RefactorExtract = 'refactor.extract'),
    (Q.RefactorInline = 'refactor.inline'),
    (Q.RefactorRewrite = 'refactor.rewrite'),
    (Q.Source = 'source'),
    (Q.SourceOrganizeImports = 'source.organizeImports'),
    ((Z = t.CodeActionContext || (t.CodeActionContext = {})).create = function(e, t) {
      var r = { diagnostics: e };
      return null != t && (r.only = t), r;
    }),
    (Z.is = function(e) {
      var t = e;
      return (
        ae.defined(t) &&
        ae.typedArray(t.diagnostics, y.is) &&
        (void 0 === t.only || ae.typedArray(t.only, ae.string))
      );
    }),
    ((X = t.CodeAction || (t.CodeAction = {})).create = function(e, t, r) {
      var n = { title: e };
      return x.is(t) ? (n.command = t) : (n.edit = t), void 0 !== r && (n.kind = r), n;
    }),
    (X.is = function(e) {
      var t = e;
      return (
        t &&
        ae.string(t.title) &&
        (void 0 === t.diagnostics || ae.typedArray(t.diagnostics, y.is)) &&
        (void 0 === t.kind || ae.string(t.kind)) &&
        (void 0 !== t.edit || void 0 !== t.command) &&
        (void 0 === t.command || x.is(t.command)) &&
        (void 0 === t.edit || N.is(t.edit))
      );
    }),
    ((Y = t.CodeLens || (t.CodeLens = {})).create = function(e, t) {
      var r = { range: e };
      return ae.defined(t) && (r.data = t), r;
    }),
    (Y.is = function(e) {
      var t = e;
      return ae.defined(t) && n.is(t.range) && (ae.undefined(t.command) || x.is(t.command));
    }),
    ((ee = t.FormattingOptions || (t.FormattingOptions = {})).create = function(e, t) {
      return { tabSize: e, insertSpaces: t };
    }),
    (ee.is = function(e) {
      var t = e;
      return ae.defined(t) && ae.number(t.tabSize) && ae.boolean(t.insertSpaces);
    });
  var re,
    ne,
    oe,
    ie = function() {};
  (t.DocumentLink = ie),
    ((re = ie = t.DocumentLink || (t.DocumentLink = {})).create = function(e, t, r) {
      return { range: e, target: t, data: r };
    }),
    (re.is = function(e) {
      var t = e;
      return ae.defined(t) && n.is(t.range) && (ae.undefined(t.target) || ae.string(t.target));
    }),
    (t.DocumentLink = ie),
    (t.EOL = ['\n', '\r\n', '\r']),
    ((ne = t.TextDocument || (t.TextDocument = {})).create = function(e, t, r, n) {
      return new ue(e, t, r, n);
    }),
    (ne.is = function(e) {
      var t = e;
      return !!(
        ae.defined(t) &&
        ae.string(t.uri) &&
        (ae.undefined(t.languageId) || ae.string(t.languageId)) &&
        ae.number(t.lineCount) &&
        ae.func(t.getText) &&
        ae.func(t.positionAt) &&
        ae.func(t.offsetAt)
      );
    }),
    (ne.applyEdits = function(e, t) {
      for (
        var r = e.getText(),
          n = (function e(t, r) {
            if (t.length <= 1) return t;
            var n = (t.length / 2) | 0,
              o = t.slice(0, n),
              i = t.slice(n);
            e(o, r), e(i, r);
            for (var a = 0, s = 0, c = 0; a < o.length && s < i.length; ) {
              var u = r(o[a], i[s]);
              t[c++] = u <= 0 ? o[a++] : i[s++];
            }
            for (; a < o.length; ) t[c++] = o[a++];
            for (; s < i.length; ) t[c++] = i[s++];
            return t;
          })(t, function(e, t) {
            var r = e.range.start.line - t.range.start.line;
            return 0 === r ? e.range.start.character - t.range.start.character : r;
          }),
          o = r.length,
          i = n.length - 1;
        0 <= i;
        i--
      ) {
        var a = n[i],
          s = e.offsetAt(a.range.start),
          c = e.offsetAt(a.range.end);
        if (!(c <= o)) throw new Error('Overlapping edit');
        (r = r.substring(0, s) + a.newText + r.substring(c, r.length)), (o = s);
      }
      return r;
    }),
    ((oe = t.TextDocumentSaveReason || (t.TextDocumentSaveReason = {})).Manual = 1),
    (oe.AfterDelay = 2),
    (oe.FocusOut = 3);
  var ae,
    se,
    ce,
    ue = (function() {
      function e(e, t, r, n) {
        (this._uri = e),
          (this._languageId = t),
          (this._version = r),
          (this._content = n),
          (this._lineOffsets = null);
      }
      return (
        Object.defineProperty(e.prototype, 'uri', {
          get: function() {
            return this._uri;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'languageId', {
          get: function() {
            return this._languageId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'version', {
          get: function() {
            return this._version;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.getText = function(e) {
          if (e) {
            var t = this.offsetAt(e.start),
              r = this.offsetAt(e.end);
            return this._content.substring(t, r);
          }
          return this._content;
        }),
        (e.prototype.update = function(e, t) {
          (this._content = e.text), (this._version = t), (this._lineOffsets = null);
        }),
        (e.prototype.getLineOffsets = function() {
          if (null === this._lineOffsets) {
            for (var e = [], t = this._content, r = !0, n = 0; n < t.length; n++) {
              r && (e.push(n), (r = !1));
              var o = t.charAt(n);
              (r = '\r' === o || '\n' === o),
                '\r' === o && n + 1 < t.length && '\n' === t.charAt(n + 1) && n++;
            }
            r && 0 < t.length && e.push(t.length), (this._lineOffsets = e);
          }
          return this._lineOffsets;
        }),
        (e.prototype.positionAt = function(e) {
          e = Math.max(Math.min(e, this._content.length), 0);
          var t = this.getLineOffsets(),
            r = 0,
            n = t.length;
          if (0 === n) return a.create(0, e);
          for (; r < n; ) {
            var o = Math.floor((r + n) / 2);
            t[o] > e ? (n = o) : (r = o + 1);
          }
          var i = r - 1;
          return a.create(i, e - t[i]);
        }),
        (e.prototype.offsetAt = function(e) {
          var t = this.getLineOffsets();
          if (e.line >= t.length) return this._content.length;
          if (e.line < 0) return 0;
          var r = t[e.line],
            n = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
          return Math.max(Math.min(r + e.character, n), r);
        }),
        Object.defineProperty(e.prototype, 'lineCount', {
          get: function() {
            return this.getLineOffsets().length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
  (se = ae || (ae = {})),
    (ce = Object.prototype.toString),
    (se.defined = function(e) {
      return void 0 !== e;
    }),
    (se.undefined = function(e) {
      return void 0 === e;
    }),
    (se.boolean = function(e) {
      return !0 === e || !1 === e;
    }),
    (se.string = function(e) {
      return '[object String]' === ce.call(e);
    }),
    (se.number = function(e) {
      return '[object Number]' === ce.call(e);
    }),
    (se.func = function(e) {
      return '[object Function]' === ce.call(e);
    }),
    (se.objectLiteral = function(e) {
      return null !== e && 'object' == typeof e;
    }),
    (se.typedArray = function(e, t) {
      return Array.isArray(e) && e.every(t);
    });
}),
  define('vscode-languageserver-types', ['vscode-languageserver-types/main'], function(e) {
    return e;
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('jsonc-parser/impl/scanner', ['require', 'exports'], e);
  })(function(e, t) {
    'use strict';
    function p(e) {
      return (
        32 === e ||
        9 === e ||
        11 === e ||
        12 === e ||
        160 === e ||
        5760 === e ||
        (8192 <= e && e <= 8203) ||
        8239 === e ||
        8287 === e ||
        12288 === e ||
        65279 === e
      );
    }
    function h(e) {
      return 10 === e || 13 === e || 8232 === e || 8233 === e;
    }
    function m(e) {
      return 48 <= e && e <= 57;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.createScanner = function(i, e) {
        void 0 === e && (e = !1);
        var a = 0,
          o = i.length,
          s = '',
          c = 0,
          u = 16,
          f = 0;
        function l(e, t) {
          for (var r = 0, n = 0; r < e || !t; ) {
            var o = i.charCodeAt(a);
            if (48 <= o && o <= 57) n = 16 * n + o - 48;
            else if (65 <= o && o <= 70) n = 16 * n + o - 65 + 10;
            else {
              if (!(97 <= o && o <= 102)) break;
              n = 16 * n + o - 97 + 10;
            }
            a++, r++;
          }
          return r < e && (n = -1), n;
        }
        function t() {
          if (((s = ''), (f = 0), o <= (c = a))) return (c = o), (u = 17);
          var e = i.charCodeAt(a);
          if (p(e)) {
            for (; a++, (s += String.fromCharCode(e)), p((e = i.charCodeAt(a))); );
            return (u = 15);
          }
          if (h(e))
            return (
              a++,
              (s += String.fromCharCode(e)),
              13 === e && 10 === i.charCodeAt(a) && (a++, (s += '\n')),
              (u = 14)
            );
          switch (e) {
            case 123:
              return a++, (u = 1);
            case 125:
              return a++, (u = 2);
            case 91:
              return a++, (u = 3);
            case 93:
              return a++, (u = 4);
            case 58:
              return a++, (u = 6);
            case 44:
              return a++, (u = 5);
            case 34:
              return (
                a++,
                (s = (function() {
                  for (var e = '', t = a; ; ) {
                    if (o <= a) {
                      (e += i.substring(t, a)), (f = 2);
                      break;
                    }
                    var r = i.charCodeAt(a);
                    if (34 === r) {
                      (e += i.substring(t, a)), a++;
                      break;
                    }
                    if (92 !== r) {
                      if (0 <= r && r <= 31) {
                        if (h(r)) {
                          (e += i.substring(t, a)), (f = 2);
                          break;
                        }
                        f = 6;
                      }
                      a++;
                    } else {
                      if (((e += i.substring(t, a)), o <= ++a)) {
                        f = 2;
                        break;
                      }
                      switch ((r = i.charCodeAt(a++))) {
                        case 34:
                          e += '"';
                          break;
                        case 92:
                          e += '\\';
                          break;
                        case 47:
                          e += '/';
                          break;
                        case 98:
                          e += '\b';
                          break;
                        case 102:
                          e += '\f';
                          break;
                        case 110:
                          e += '\n';
                          break;
                        case 114:
                          e += '\r';
                          break;
                        case 116:
                          e += '\t';
                          break;
                        case 117:
                          var n = l(4, !0);
                          0 <= n ? (e += String.fromCharCode(n)) : (f = 4);
                          break;
                        default:
                          f = 5;
                      }
                      t = a;
                    }
                  }
                  return e;
                })()),
                (u = 10)
              );
            case 47:
              var t = a - 1;
              if (47 === i.charCodeAt(a + 1)) {
                for (a += 2; a < o && !h(i.charCodeAt(a)); ) a++;
                return (s = i.substring(t, a)), (u = 12);
              }
              if (42 !== i.charCodeAt(a + 1)) return (s += String.fromCharCode(e)), a++, (u = 16);
              a += 2;
              for (var r = o - 1, n = !1; a < r; ) {
                if (42 === i.charCodeAt(a) && 47 === i.charCodeAt(a + 1)) {
                  (a += 2), (n = !0);
                  break;
                }
                a++;
              }
              return n || (a++, (f = 1)), (s = i.substring(t, a)), (u = 13);
            case 45:
              if (((s += String.fromCharCode(e)), ++a === o || !m(i.charCodeAt(a))))
                return (u = 16);
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return (
                (s += (function() {
                  var e = a;
                  if (48 === i.charCodeAt(a)) a++;
                  else for (a++; a < i.length && m(i.charCodeAt(a)); ) a++;
                  if (a < i.length && 46 === i.charCodeAt(a)) {
                    if (!(++a < i.length && m(i.charCodeAt(a)))) return (f = 3), i.substring(e, a);
                    for (a++; a < i.length && m(i.charCodeAt(a)); ) a++;
                  }
                  var t = a;
                  if (a < i.length && (69 === i.charCodeAt(a) || 101 === i.charCodeAt(a)))
                    if (
                      (((++a < i.length && 43 === i.charCodeAt(a)) || 45 === i.charCodeAt(a)) &&
                        a++,
                      a < i.length && m(i.charCodeAt(a)))
                    ) {
                      for (a++; a < i.length && m(i.charCodeAt(a)); ) a++;
                      t = a;
                    } else f = 3;
                  return i.substring(e, t);
                })()),
                (u = 11)
              );
            default:
              for (; a < o && d(e); ) a++, (e = i.charCodeAt(a));
              if (c === a) return (s += String.fromCharCode(e)), a++, (u = 16);
              switch ((s = i.substring(c, a))) {
                case 'true':
                  return (u = 8);
                case 'false':
                  return (u = 9);
                case 'null':
                  return (u = 7);
              }
              return (u = 16);
          }
        }
        function d(e) {
          if (p(e) || h(e)) return !1;
          switch (e) {
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
              return !1;
          }
          return !0;
        }
        return {
          setPosition: function(e) {
            (a = e), (s = ''), (u = 16), (f = c = 0);
          },
          getPosition: function() {
            return a;
          },
          scan: e
            ? function() {
                for (var e; 12 <= (e = t()) && e <= 15; );
                return e;
              }
            : t,
          getToken: function() {
            return u;
          },
          getTokenValue: function() {
            return s;
          },
          getTokenOffset: function() {
            return c;
          },
          getTokenLength: function() {
            return a - c;
          },
          getTokenError: function() {
            return f;
          },
        };
      });
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('jsonc-parser/impl/format', ['require', 'exports', './scanner'], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var k = e('./scanner');
    function T(e, t) {
      for (var r = '', n = 0; n < t; n++) r += e;
      return r;
    }
    function O(e, t) {
      return -1 !== '\r\n'.indexOf(e.charAt(t));
    }
    (t.format = function(n, e, t) {
      var r, o, i, a, s;
      if (e) {
        for (a = e.offset, s = a + e.length, i = a; 0 < i && !O(n, i - 1); ) i--;
        for (var c = s; c < n.length && !O(n, c); ) c++;
        (o = n.substring(i, c)),
          (r = (function(e, t) {
            for (var r = 0, n = 0, o = t.tabSize || 4; r < e.length; ) {
              var i = e.charAt(r);
              if (' ' === i) n++;
              else {
                if ('\t' !== i) break;
                n += o;
              }
              r++;
            }
            return Math.floor(n / o);
          })(o, t));
      } else (a = i = r = 0), (s = (o = n).length);
      var u,
        f = (function(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t.charAt(r);
            if ('\r' === n) return r + 1 < t.length && '\n' === t.charAt(r + 1) ? '\r\n' : '\r';
            if ('\n' === n) return '\n';
          }
          return (e && e.eol) || '\n';
        })(t, n),
        l = !1,
        d = 0;
      u = t.insertSpaces ? T(' ', t.tabSize || 4) : '\t';
      var p = k.createScanner(o, !1),
        h = !1;
      function m() {
        return f + T(u, r + d);
      }
      function g() {
        var e = p.scan();
        for (l = !1; 15 === e || 14 === e; ) (l = l || 14 === e), (e = p.scan());
        return (h = 16 === e || 0 !== p.getTokenError()), e;
      }
      var v = [];
      function y(e, t, r) {
        !h &&
          t < s &&
          a < r &&
          n.substring(t, r) !== e &&
          v.push({ offset: t, length: r - t, content: e });
      }
      var b = g();
      if (17 !== b) {
        var x = p.getTokenOffset() + i;
        y(T(u, r), i, x);
      }
      for (; 17 !== b; ) {
        for (
          var S = p.getTokenOffset() + p.getTokenLength() + i, C = g(), j = '';
          !l && (12 === C || 13 === C);

        )
          y(' ', S, p.getTokenOffset() + i),
            (S = p.getTokenOffset() + p.getTokenLength() + i),
            (j = 12 === C ? m() : ''),
            (C = g());
        if (2 === C) 1 !== b && (d--, (j = m()));
        else if (4 === C) 3 !== b && (d--, (j = m()));
        else {
          switch (b) {
            case 3:
            case 1:
              d++, (j = m());
              break;
            case 5:
            case 12:
              j = m();
              break;
            case 13:
              j = l ? m() : ' ';
              break;
            case 6:
              j = ' ';
              break;
            case 10:
              if (6 === C) {
                j = '';
                break;
              }
            case 7:
            case 8:
            case 9:
            case 11:
            case 2:
            case 4:
              12 === C || 13 === C ? (j = ' ') : 5 !== C && 17 !== C && (h = !0);
              break;
            case 16:
              h = !0;
          }
          !l || (12 !== C && 13 !== C) || (j = m());
        }
        y(j, S, p.getTokenOffset() + i), (b = C);
      }
      return v;
    }),
      (t.isEOL = O);
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('jsonc-parser/impl/parser', ['require', 'exports', './scanner'], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var S,
      C = e('./scanner');
    function s(e, t, r) {
      return (
        void 0 === r && (r = !1),
        (t >= e.offset && t < e.offset + e.length) || (r && t === e.offset + e.length)
      );
    }
    function f(e, t, r) {
      void 0 === r && (r = S.DEFAULT);
      var o = C.createScanner(e, !1);
      function n(e) {
        return e
          ? function() {
              return e(o.getTokenOffset(), o.getTokenLength());
            }
          : function() {
              return !0;
            };
      }
      function i(t) {
        return t
          ? function(e) {
              return t(e, o.getTokenOffset(), o.getTokenLength());
            }
          : function() {
              return !0;
            };
      }
      var a = n(t.onObjectBegin),
        s = i(t.onObjectProperty),
        c = n(t.onObjectEnd),
        u = n(t.onArrayBegin),
        f = n(t.onArrayEnd),
        l = i(t.onLiteralValue),
        d = i(t.onSeparator),
        p = n(t.onComment),
        h = i(t.onError),
        m = r && r.disallowComments,
        g = r && r.allowTrailingComma;
      function v() {
        for (;;) {
          var e = o.scan();
          switch (o.getTokenError()) {
            case 4:
              y(14);
              break;
            case 5:
              y(15);
              break;
            case 3:
              y(13);
              break;
            case 1:
              m || y(11);
              break;
            case 2:
              y(12);
              break;
            case 6:
              y(16);
          }
          switch (e) {
            case 12:
            case 13:
              m ? y(10) : p();
              break;
            case 16:
              y(1);
              break;
            case 15:
            case 14:
              break;
            default:
              return e;
          }
        }
      }
      function y(e, t, r) {
        if ((void 0 === t && (t = []), void 0 === r && (r = []), h(e), 0 < t.length + r.length))
          for (var n = o.getToken(); 17 !== n; ) {
            if (-1 !== t.indexOf(n)) {
              v();
              break;
            }
            if (-1 !== r.indexOf(n)) break;
            n = v();
          }
      }
      function b(e) {
        var t = o.getTokenValue();
        return e ? l(t) : s(t), v(), !0;
      }
      function x() {
        switch (o.getToken()) {
          case 3:
            return (function() {
              u(), v();
              for (var e = !1; 4 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  if ((e || y(4, [], []), d(','), v(), 4 === o.getToken() && g)) break;
                } else e && y(6, [], []);
                x() || y(4, [], [4, 5]), (e = !0);
              }
              return f(), 4 !== o.getToken() ? y(8, [4], []) : v(), !0;
            })();
          case 1:
            return (function() {
              a(), v();
              for (var e = !1; 2 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  if ((e || y(4, [], []), d(','), v(), 2 === o.getToken() && g)) break;
                } else e && y(6, [], []);
                (10 !== o.getToken()
                  ? (y(3, [], [2, 5]), 0)
                  : (b(!1),
                    6 === o.getToken() ? (d(':'), v(), x() || y(4, [], [2, 5])) : y(5, [], [2, 5]),
                    1)) || y(4, [], [2, 5]),
                  (e = !0);
              }
              return c(), 2 !== o.getToken() ? y(7, [2], []) : v(), !0;
            })();
          case 10:
            return b(!0);
          default:
            return (function() {
              switch (o.getToken()) {
                case 11:
                  var e = 0;
                  try {
                    'number' != typeof (e = JSON.parse(o.getTokenValue())) && (y(2), (e = 0));
                  } catch (e) {
                    y(2);
                  }
                  l(e);
                  break;
                case 7:
                  l(null);
                  break;
                case 8:
                  l(!0);
                  break;
                case 9:
                  l(!1);
                  break;
                default:
                  return !1;
              }
              return v(), !0;
            })();
        }
      }
      return (
        v(),
        17 === o.getToken() ||
          (x() ? (17 !== o.getToken() && y(9, [], []), !0) : (y(4, [], []), !1))
      );
    }
    function l(e) {
      switch (typeof e) {
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        default:
          return 'null';
      }
    }
    ((S || (S = {})).DEFAULT = { allowTrailingComma: !1 }),
      (t.getLocation = function(e, o) {
        var i = [],
          a = new Object(),
          s = void 0,
          c = { value: {}, offset: 0, length: 0, type: 'object', parent: void 0 },
          u = !1;
        function n(e, t, r, n) {
          (c.value = e),
            (c.offset = t),
            (c.length = r),
            (c.type = n),
            (c.colonOffset = void 0),
            (s = c);
        }
        try {
          f(e, {
            onObjectBegin: function(e, t) {
              if (o <= e) throw a;
              (s = void 0), (u = e < o), i.push('');
            },
            onObjectProperty: function(e, t, r) {
              if (o < t) throw a;
              if ((n(e, t, r, 'property'), (i[i.length - 1] = e), o <= t + r)) throw a;
            },
            onObjectEnd: function(e, t) {
              if (o <= e) throw a;
              (s = void 0), i.pop();
            },
            onArrayBegin: function(e, t) {
              if (o <= e) throw a;
              (s = void 0), i.push(0);
            },
            onArrayEnd: function(e, t) {
              if (o <= e) throw a;
              (s = void 0), i.pop();
            },
            onLiteralValue: function(e, t, r) {
              if (o < t) throw a;
              if ((n(e, t, r, l(e)), o <= t + r)) throw a;
            },
            onSeparator: function(e, t, r) {
              if (o <= t) throw a;
              if (':' === e && s && 'property' === s.type)
                (s.colonOffset = t), (u = !1), (s = void 0);
              else if (',' === e) {
                var n = i[i.length - 1];
                (i[i.length - 1] = 'number' == typeof n ? n + 1 : ((u = !0), '')), (s = void 0);
              }
            },
          });
        } catch (e) {
          if (e !== a) throw e;
        }
        return {
          path: i,
          previousNode: s,
          isAtPropertyKey: u,
          matches: function(e) {
            for (var t = 0, r = 0; t < e.length && r < i.length; r++)
              if (e[t] === i[r] || '*' === e[t]) t++;
              else if ('**' !== e[t]) return !1;
            return t === e.length;
          },
        };
      }),
      (t.parse = function(e, n, t) {
        void 0 === n && (n = []), void 0 === t && (t = S.DEFAULT);
        var r = null,
          o = [],
          i = [];
        function a(e) {
          Array.isArray(o) ? o.push(e) : r && (o[r] = e);
        }
        return (
          f(
            e,
            {
              onObjectBegin: function() {
                var e = {};
                a(e), i.push(o), (o = e), (r = null);
              },
              onObjectProperty: function(e) {
                r = e;
              },
              onObjectEnd: function() {
                o = i.pop();
              },
              onArrayBegin: function() {
                var e = [];
                a(e), i.push(o), (o = e), (r = null);
              },
              onArrayEnd: function() {
                o = i.pop();
              },
              onLiteralValue: a,
              onError: function(e, t, r) {
                n.push({ error: e, offset: t, length: r });
              },
            },
            t
          ),
          o[0]
        );
      }),
      (t.parseTree = function(e, n, t) {
        void 0 === n && (n = []), void 0 === t && (t = S.DEFAULT);
        var o = { type: 'array', offset: -1, length: -1, children: [], parent: void 0 };
        function i(e) {
          'property' === o.type && ((o.length = e - o.offset), (o = o.parent));
        }
        function a(e) {
          return o.children.push(e), e;
        }
        f(
          e,
          {
            onObjectBegin: function(e) {
              o = a({ type: 'object', offset: e, length: -1, parent: o, children: [] });
            },
            onObjectProperty: function(e, t, r) {
              (o = a({
                type: 'property',
                offset: t,
                length: -1,
                parent: o,
                children: [],
              })).children.push({ type: 'string', value: e, offset: t, length: r, parent: o });
            },
            onObjectEnd: function(e, t) {
              (o.length = e + t - o.offset), (o = o.parent), i(e + t);
            },
            onArrayBegin: function(e, t) {
              o = a({ type: 'array', offset: e, length: -1, parent: o, children: [] });
            },
            onArrayEnd: function(e, t) {
              (o.length = e + t - o.offset), (o = o.parent), i(e + t);
            },
            onLiteralValue: function(e, t, r) {
              a({ type: l(e), offset: t, length: r, parent: o, value: e }), i(t + r);
            },
            onSeparator: function(e, t, r) {
              'property' === o.type && (':' === e ? (o.colonOffset = t) : ',' === e && i(t));
            },
            onError: function(e, t, r) {
              n.push({ error: e, offset: t, length: r });
            },
          },
          t
        );
        var r = o.children[0];
        return r && delete r.parent, r;
      }),
      (t.findNodeAtLocation = function(e, t) {
        if (e) {
          for (var r = e, n = 0, o = t; n < o.length; n++) {
            var i = o[n];
            if ('string' == typeof i) {
              if ('object' !== r.type || !Array.isArray(r.children)) return;
              for (var a = !1, s = 0, c = r.children; s < c.length; s++) {
                var u = c[s];
                if (Array.isArray(u.children) && u.children[0].value === i) {
                  (r = u.children[1]), (a = !0);
                  break;
                }
              }
              if (!a) return;
            } else {
              var f = i;
              if (
                'array' !== r.type ||
                f < 0 ||
                !Array.isArray(r.children) ||
                f >= r.children.length
              )
                return;
              r = r.children[f];
            }
          }
          return r;
        }
      }),
      (t.getNodePath = function e(t) {
        if (!t.parent || !t.parent.children) return [];
        var r = e(t.parent);
        if ('property' === t.parent.type) {
          var n = t.parent.children[0].value;
          r.push(n);
        } else if ('array' === t.parent.type) {
          var o = t.parent.children.indexOf(t);
          -1 !== o && r.push(o);
        }
        return r;
      }),
      (t.getNodeValue = function e(t) {
        switch (t.type) {
          case 'array':
            return t.children.map(e);
          case 'object':
            for (var r = Object.create(null), n = 0, o = t.children; n < o.length; n++) {
              var i = o[n],
                a = i.children[1];
              a && (r[i.children[0].value] = e(a));
            }
            return r;
          case 'null':
          case 'string':
          case 'number':
          case 'boolean':
            return t.value;
          default:
            return;
        }
      }),
      (t.contains = s),
      (t.findNodeAtOffset = function e(t, r, n) {
        if ((void 0 === n && (n = !1), s(t, r, n))) {
          var o = t.children;
          if (Array.isArray(o))
            for (var i = 0; i < o.length && o[i].offset <= r; i++) {
              var a = e(o[i], r, n);
              if (a) return a;
            }
          return t;
        }
      }),
      (t.visit = f),
      (t.stripComments = function(e, t) {
        var r,
          n,
          o = C.createScanner(e),
          i = [],
          a = 0;
        do {
          switch (((n = o.getPosition()), (r = o.scan()))) {
            case 12:
            case 13:
            case 17:
              a !== n && i.push(e.substring(a, n)),
                void 0 !== t && i.push(o.getTokenValue().replace(/[^\r\n]/g, t)),
                (a = o.getPosition());
          }
        } while (17 !== r);
        return i.join('');
      });
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('jsonc-parser/impl/edit', ['require', 'exports', './format', './parser'], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u = e('./format'),
      S = e('./parser');
    function n(e, t, r, n, o) {
      for (
        var i, a = t.slice(), s = S.parseTree(e, []), c = void 0, u = void 0;
        0 < a.length &&
        ((u = a.pop()), void 0 === (c = S.findNodeAtLocation(s, a)) && void 0 !== r);

      )
        r = 'string' == typeof u ? (((i = {})[u] = r), i) : [r];
      if (c) {
        if ('object' === c.type && 'string' == typeof u && Array.isArray(c.children)) {
          var f = S.findNodeAtLocation(c, [u]);
          if (void 0 !== f) {
            if (void 0 !== r)
              return C(e, { offset: f.offset, length: f.length, content: JSON.stringify(r) }, n);
            if (!f.parent) throw new Error('Malformed AST');
            var l = c.children.indexOf(f.parent),
              d = void 0,
              p = f.parent.offset + f.parent.length;
            return (
              0 < l
                ? (d = (b = c.children[l - 1]).offset + b.length)
                : ((d = c.offset + 1), 1 < c.children.length && (p = c.children[1].offset)),
              C(e, { offset: d, length: p - d, content: '' }, n)
            );
          }
          if (void 0 === r) return [];
          var h = JSON.stringify(u) + ': ' + JSON.stringify(r),
            m = o
              ? o(
                  c.children.map(function(e) {
                    return e.children[0].value;
                  })
                )
              : c.children.length,
            g = void 0;
          return C(
            e,
            (g =
              0 < m
                ? { offset: (b = c.children[m - 1]).offset + b.length, length: 0, content: ',' + h }
                : 0 === c.children.length
                ? { offset: c.offset + 1, length: 0, content: h }
                : { offset: c.offset + 1, length: 0, content: h + ',' }),
            n
          );
        }
        if ('array' === c.type && 'number' == typeof u && Array.isArray(c.children)) {
          if (-1 === u) {
            (h = '' + JSON.stringify(r)), (g = void 0);
            if (0 === c.children.length) g = { offset: c.offset + 1, length: 0, content: h };
            else
              g = {
                offset: (b = c.children[c.children.length - 1]).offset + b.length,
                length: 0,
                content: ',' + h,
              };
            return C(e, g, n);
          }
          if (void 0 === r && 0 <= c.children.length) {
            var v = u,
              y = c.children[v];
            g = void 0;
            if (1 === c.children.length)
              g = { offset: c.offset + 1, length: c.length - 2, content: '' };
            else if (c.children.length - 1 === v) {
              var b,
                x = (b = c.children[v - 1]).offset + b.length;
              g = { offset: x, length: c.offset + c.length - 2 - x, content: '' };
            } else
              g = { offset: y.offset, length: c.children[v + 1].offset - y.offset, content: '' };
            return C(e, g, n);
          }
          throw new Error('Array modification not supported yet');
        }
        throw new Error(
          'Can not add ' +
            ('number' != typeof u ? 'index' : 'property') +
            ' to parent of type ' +
            c.type
        );
      }
      if (void 0 === r) throw new Error('Can not delete in empty document');
      return C(
        e,
        { offset: s ? s.offset : 0, length: s ? s.length : 0, content: JSON.stringify(r) },
        n
      );
    }
    function C(e, t, r) {
      var n = f(e, t),
        o = t.offset,
        i = t.offset + t.content.length;
      if (0 === t.length || 0 === t.content.length) {
        for (; 0 < o && !u.isEOL(n, o - 1); ) o--;
        for (; i < n.length && !u.isEOL(n, i); ) i++;
      }
      for (var a = u.format(n, { offset: o, length: i - o }, r), s = a.length - 1; 0 <= s; s--) {
        var c = a[s];
        (n = f(n, c)),
          (o = Math.min(o, c.offset)),
          (i = Math.max(i, c.offset + c.length)),
          (i += c.content.length - c.length);
      }
      return [{ offset: o, length: e.length - (n.length - i) - o, content: n.substring(o, i) }];
    }
    function f(e, t) {
      return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
    }
    (t.removeProperty = function(e, t, r) {
      return n(e, t, void 0, r);
    }),
      (t.setProperty = n),
      (t.applyEdit = f),
      (t.isWS = function(e, t) {
        return -1 !== '\r\n \t'.indexOf(e.charAt(t));
      });
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('jsonc-parser/main', [
          'require',
          'exports',
          './impl/format',
          './impl/edit',
          './impl/scanner',
          './impl/parser',
        ], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = e('./impl/format'),
      o = e('./impl/edit'),
      r = e('./impl/scanner'),
      i = e('./impl/parser');
    (t.createScanner = r.createScanner),
      (t.getLocation = i.getLocation),
      (t.parse = i.parse),
      (t.parseTree = i.parseTree),
      (t.findNodeAtLocation = i.findNodeAtLocation),
      (t.findNodeAtOffset = i.findNodeAtOffset),
      (t.getNodePath = i.getNodePath),
      (t.getNodeValue = i.getNodeValue),
      (t.visit = i.visit),
      (t.stripComments = i.stripComments),
      (t.printParseErrorCode = function(e) {
        switch (e) {
          case 1:
            return 'InvalidSymbol';
          case 2:
            return 'InvalidNumberFormat';
          case 3:
            return 'PropertyNameExpected';
          case 4:
            return 'ValueExpected';
          case 5:
            return 'ColonExpected';
          case 6:
            return 'CommaExpected';
          case 7:
            return 'CloseBraceExpected';
          case 8:
            return 'CloseBracketExpected';
          case 9:
            return 'EndOfFileExpected';
          case 10:
            return 'InvalidCommentToken';
          case 11:
            return 'UnexpectedEndOfComment';
          case 12:
            return 'UnexpectedEndOfString';
          case 13:
            return 'UnexpectedEndOfNumber';
          case 14:
            return 'InvalidUnicode';
          case 15:
            return 'InvalidEscapeCharacter';
          case 16:
            return 'InvalidCharacter';
        }
        return '<unknown ParseErrorCode>';
      }),
      (t.format = function(e, t, r) {
        return n.format(e, t, r);
      }),
      (t.modify = function(e, t, r, n) {
        return o.setProperty(e, t, r, n.formattingOptions, n.getInsertionIndex);
      }),
      (t.applyEdits = function(e, t) {
        for (var r = t.length - 1; 0 <= r; r--) e = o.applyEdit(e, t[r]);
        return e;
      });
  }),
  define('jsonc-parser', ['jsonc-parser/main'], function(e) {
    return e;
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/utils/objects', ['require', 'exports'], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.equals = function e(t, r) {
        if (t === r) return !0;
        if (null == t || null == r) return !1;
        if (typeof t != typeof r) return !1;
        if ('object' != typeof t) return !1;
        if (Array.isArray(t) !== Array.isArray(r)) return !1;
        var n, o;
        if (Array.isArray(t)) {
          if (t.length !== r.length) return !1;
          for (n = 0; n < t.length; n++) if (!e(t[n], r[n])) return !1;
        } else {
          var i = [];
          for (o in t) i.push(o);
          i.sort();
          var a = [];
          for (o in r) a.push(o);
          if ((a.sort(), !e(i, a))) return !1;
          for (n = 0; n < i.length; n++) if (!e(t[i[n]], r[i[n]])) return !1;
        }
        return !0;
      }),
      (t.isNumber = function(e) {
        return 'number' == typeof e;
      }),
      (t.isDefined = function(e) {
        return void 0 !== e;
      }),
      (t.isBoolean = function(e) {
        return 'boolean' == typeof e;
      }),
      (t.isString = function(e) {
        return 'string' == typeof e;
      });
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/jsonLanguageTypes', [
          'require',
          'exports',
          'vscode-languageserver-types',
        ], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r,
      n,
      o = e('vscode-languageserver-types');
    (t.Range = o.Range),
      (t.TextEdit = o.TextEdit),
      (t.Color = o.Color),
      (t.ColorInformation = o.ColorInformation),
      (t.ColorPresentation = o.ColorPresentation),
      (t.FoldingRange = o.FoldingRange),
      (t.FoldingRangeKind = o.FoldingRangeKind),
      ((r = t.SelectionRangeKind || (t.SelectionRangeKind = {})).Empty = ''),
      (r.Statement = 'statement'),
      (r.Declaration = 'declaration'),
      ((n = t.ErrorCode || (t.ErrorCode = {}))[(n.Undefined = 0)] = 'Undefined'),
      (n[(n.EnumValueMismatch = 1)] = 'EnumValueMismatch'),
      (n[(n.UnexpectedEndOfComment = 257)] = 'UnexpectedEndOfComment'),
      (n[(n.UnexpectedEndOfString = 258)] = 'UnexpectedEndOfString'),
      (n[(n.UnexpectedEndOfNumber = 259)] = 'UnexpectedEndOfNumber'),
      (n[(n.InvalidUnicode = 260)] = 'InvalidUnicode'),
      (n[(n.InvalidEscapeCharacter = 261)] = 'InvalidEscapeCharacter'),
      (n[(n.InvalidCharacter = 262)] = 'InvalidCharacter'),
      (n[(n.PropertyExpected = 513)] = 'PropertyExpected'),
      (n[(n.CommaExpected = 514)] = 'CommaExpected'),
      (n[(n.ColonExpected = 515)] = 'ColonExpected'),
      (n[(n.ValueExpected = 516)] = 'ValueExpected'),
      (n[(n.CommaOrCloseBacketExpected = 517)] = 'CommaOrCloseBacketExpected'),
      (n[(n.CommaOrCloseBraceExpected = 518)] = 'CommaOrCloseBraceExpected'),
      (n[(n.TrailingComma = 519)] = 'TrailingComma'),
      (n[(n.DuplicateKey = 520)] = 'DuplicateKey'),
      (n[(n.CommentNotPermitted = 521)] = 'CommentNotPermitted'),
      (n[(n.SchemaResolveError = 768)] = 'SchemaResolveError'),
      ((t.ClientCapabilities || (t.ClientCapabilities = {})).LATEST = {
        textDocument: {
          completion: {
            completionItem: {
              documentationFormat: [o.MarkupKind.Markdown, o.MarkupKind.PlainText],
            },
          },
        },
      });
  }),
  define('vscode-nls/vscode-nls', ['require', 'exports'], function(e, t) {
    'use strict';
    function r(e, t) {
      for (var r, n, o = [], i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
      return (
        (r = t),
        0 === (n = o).length
          ? r
          : r.replace(/\{(\d+)\}/g, function(e, t) {
              var r = t[0];
              return void 0 !== n[r] ? n[r] : e;
            })
      );
    }
    function n(e) {
      return r;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.loadMessageBundle = n),
      (t.config = function(e) {
        return n;
      });
  }),
  define('vscode-nls', ['vscode-nls/vscode-nls'], function(e) {
    return e;
  });
var __extends =
  (this && this.__extends) ||
  (function() {
    var n =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(e, t) {
          e.__proto__ = t;
        }) ||
      function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      };
    return function(e, t) {
      function r() {
        this.constructor = e;
      }
      n(e, t),
        (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    };
  })();
!(function(e) {
  if ('object' == typeof module && 'object' == typeof module.exports) {
    var t = e(require, exports);
    void 0 !== t && (module.exports = t);
  } else
    'function' == typeof define &&
      define.amd &&
      define('vscode-uri/index', ['require', 'exports'], e);
})(function(e, t) {
  'use strict';
  var n;
  if ((Object.defineProperty(t, '__esModule', { value: !0 }), 'object' == typeof process))
    n = 'win32' === process.platform;
  else if ('object' == typeof navigator) {
    var r = navigator.userAgent;
    n = 0 <= r.indexOf('Windows');
  }
  var i = /^\w[\w\d+.-]*$/,
    a = /^\//,
    s = /^\/\//;
  var o,
    d = '/',
    c = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
    u = (function() {
      function r(e, t, r, n, o) {
        'object' == typeof e
          ? ((this.scheme = e.scheme || ''),
            (this.authority = e.authority || ''),
            (this.path = e.path || ''),
            (this.query = e.query || ''),
            (this.fragment = e.fragment || ''))
          : ((this.scheme = e || ''),
            (this.authority = t || ''),
            (this.path = (function(e, t) {
              switch (e) {
                case 'https':
                case 'http':
                case 'file':
                  t ? t[0] !== d && (t = d + t) : (t = d);
              }
              return t;
            })(this.scheme, r || '')),
            (this.query = n || ''),
            (this.fragment = o || ''),
            (function(e) {
              if (e.scheme && !i.test(e.scheme))
                throw new Error('[UriError]: Scheme contains illegal characters.');
              if (e.path)
                if (e.authority) {
                  if (!a.test(e.path))
                    throw new Error(
                      '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                    );
                } else if (s.test(e.path))
                  throw new Error(
                    '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                  );
            })(this));
      }
      return (
        (r.isUri = function(e) {
          return (
            e instanceof r ||
            (!!e &&
              ('string' == typeof e.authority &&
                'string' == typeof e.fragment &&
                'string' == typeof e.path &&
                'string' == typeof e.query &&
                'string' == typeof e.scheme))
          );
        }),
        Object.defineProperty(r.prototype, 'fsPath', {
          get: function() {
            return m(this);
          },
          enumerable: !0,
          configurable: !0,
        }),
        (r.prototype.with = function(e) {
          if (!e) return this;
          var t = e.scheme,
            r = e.authority,
            n = e.path,
            o = e.query,
            i = e.fragment;
          return (
            void 0 === t ? (t = this.scheme) : null === t && (t = ''),
            void 0 === r ? (r = this.authority) : null === r && (r = ''),
            void 0 === n ? (n = this.path) : null === n && (n = ''),
            void 0 === o ? (o = this.query) : null === o && (o = ''),
            void 0 === i ? (i = this.fragment) : null === i && (i = ''),
            t === this.scheme &&
            r === this.authority &&
            n === this.path &&
            o === this.query &&
            i === this.fragment
              ? this
              : new f(t, r, n, o, i)
          );
        }),
        (r.parse = function(e) {
          var t = c.exec(e);
          return t
            ? new f(
                t[2] || '',
                decodeURIComponent(t[4] || ''),
                decodeURIComponent(t[5] || ''),
                decodeURIComponent(t[7] || ''),
                decodeURIComponent(t[9] || '')
              )
            : new f('', '', '', '', '');
        }),
        (r.file = function(e) {
          var t = '';
          if ((n && (e = e.replace(/\\/g, d)), e[0] === d && e[1] === d)) {
            var r = e.indexOf(d, 2);
            e =
              -1 === r ? ((t = e.substring(2)), d) : ((t = e.substring(2, r)), e.substring(r) || d);
          }
          return new f('file', t, e, '', '');
        }),
        (r.from = function(e) {
          return new f(e.scheme, e.authority, e.path, e.query, e.fragment);
        }),
        (r.prototype.toString = function(e) {
          return void 0 === e && (e = !1), g(this, e);
        }),
        (r.prototype.toJSON = function() {
          return this;
        }),
        (r.revive = function(e) {
          if (e) {
            if (e instanceof r) return e;
            var t = new f(e);
            return (t._fsPath = e.fsPath), (t._formatted = e.external), t;
          }
          return e;
        }),
        r
      );
    })(),
    f = (function(t) {
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e._formatted = null), (e._fsPath = null), e;
      }
      return (
        __extends(e, t),
        Object.defineProperty(e.prototype, 'fsPath', {
          get: function() {
            return this._fsPath || (this._fsPath = m(this)), this._fsPath;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.toString = function(e) {
          return (
            void 0 === e && (e = !1),
            e ? g(this, !0) : (this._formatted || (this._formatted = g(this, !1)), this._formatted)
          );
        }),
        (e.prototype.toJSON = function() {
          var e = { $mid: 1 };
          return (
            this._fsPath && (e.fsPath = this._fsPath),
            this._formatted && (e.external = this._formatted),
            this.path && (e.path = this.path),
            this.scheme && (e.scheme = this.scheme),
            this.authority && (e.authority = this.authority),
            this.query && (e.query = this.query),
            this.fragment && (e.fragment = this.fragment),
            e
          );
        }),
        e
      );
    })((t.default = u)),
    l = (((o = {})[58] = '%3A'),
    (o[47] = '%2F'),
    (o[63] = '%3F'),
    (o[35] = '%23'),
    (o[91] = '%5B'),
    (o[93] = '%5D'),
    (o[64] = '%40'),
    (o[33] = '%21'),
    (o[36] = '%24'),
    (o[38] = '%26'),
    (o[39] = '%27'),
    (o[40] = '%28'),
    (o[41] = '%29'),
    (o[42] = '%2A'),
    (o[43] = '%2B'),
    (o[44] = '%2C'),
    (o[59] = '%3B'),
    (o[61] = '%3D'),
    (o[32] = '%20'),
    o);
  function p(e, t) {
    for (var r = void 0, n = -1, o = 0; o < e.length; o++) {
      var i = e.charCodeAt(o);
      if (
        (97 <= i && i <= 122) ||
        (65 <= i && i <= 90) ||
        (48 <= i && i <= 57) ||
        45 === i ||
        46 === i ||
        95 === i ||
        126 === i ||
        (t && 47 === i)
      )
        -1 !== n && ((r += encodeURIComponent(e.substring(n, o))), (n = -1)),
          void 0 !== r && (r += e.charAt(o));
      else {
        void 0 === r && (r = e.substr(0, o));
        var a = l[i];
        void 0 !== a
          ? (-1 !== n && ((r += encodeURIComponent(e.substring(n, o))), (n = -1)), (r += a))
          : -1 === n && (n = o);
      }
    }
    return -1 !== n && (r += encodeURIComponent(e.substring(n))), void 0 !== r ? r : e;
  }
  function h(e) {
    for (var t = void 0, r = 0; r < e.length; r++) {
      var n = e.charCodeAt(r);
      35 === n || 63 === n
        ? (void 0 === t && (t = e.substr(0, r)), (t += l[n]))
        : void 0 !== t && (t += e[r]);
    }
    return void 0 !== t ? t : e;
  }
  function m(e) {
    var t;
    return (
      (t =
        e.authority && 1 < e.path.length && 'file' === e.scheme
          ? '//' + e.authority + e.path
          : 47 === e.path.charCodeAt(0) &&
            ((65 <= e.path.charCodeAt(1) && e.path.charCodeAt(1) <= 90) ||
              (97 <= e.path.charCodeAt(1) && e.path.charCodeAt(1) <= 122)) &&
            58 === e.path.charCodeAt(2)
          ? e.path[1].toLowerCase() + e.path.substr(2)
          : e.path),
      n && (t = t.replace(/\//g, '\\')),
      t
    );
  }
  function g(e, t) {
    var r = t ? h : p,
      n = '',
      o = e.scheme,
      i = e.authority,
      a = e.path,
      s = e.query,
      c = e.fragment;
    if ((o && ((n += o), (n += ':')), (i || 'file' === o) && ((n += d), (n += d)), i)) {
      var u = i.indexOf('@');
      if (-1 !== u) {
        var f = i.substr(0, u);
        (i = i.substr(u + 1)),
          -1 === (u = f.indexOf(':'))
            ? (n += r(f, !1))
            : ((n += r(f.substr(0, u), !1)), (n += ':'), (n += r(f.substr(u + 1), !1))),
          (n += '@');
      }
      -1 === (u = (i = i.toLowerCase()).indexOf(':'))
        ? (n += r(i, !1))
        : ((n += r(i.substr(0, u), !1)), (n += i.substr(u)));
    }
    if (a) {
      if (3 <= a.length && 47 === a.charCodeAt(0) && 58 === a.charCodeAt(2))
        65 <= (l = a.charCodeAt(1)) &&
          l <= 90 &&
          (a = '/' + String.fromCharCode(l + 32) + ':' + a.substr(3));
      else if (2 <= a.length && 58 === a.charCodeAt(1)) {
        var l;
        65 <= (l = a.charCodeAt(0)) &&
          l <= 90 &&
          (a = String.fromCharCode(l + 32) + ':' + a.substr(2));
      }
      n += r(a, !0);
    }
    return s && ((n += '?'), (n += r(s, !1))), c && ((n += '#'), (n += t ? c : p(c, !1))), n;
  }
}),
  define('vscode-uri', ['vscode-uri/index'], function(e) {
    return e;
  });
__extends =
  (this && this.__extends) ||
  (function() {
    var n = function(e, t) {
      return (n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        })(e, t);
    };
    return function(e, t) {
      function r() {
        this.constructor = e;
      }
      n(e, t),
        (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    };
  })();
!(function(e) {
  if ('object' == typeof module && 'object' == typeof module.exports) {
    var t = e(require, exports);
    void 0 !== t && (module.exports = t);
  } else
    'function' == typeof define &&
      define.amd &&
      define('vscode-json-languageservice/parser/jsonParser', [
        'require',
        'exports',
        'jsonc-parser',
        '../utils/objects',
        '../jsonLanguageTypes',
        'vscode-nls',
        'vscode-uri',
        'vscode-languageserver-types',
      ], e);
})(function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', { value: !0 });
  var o = e('jsonc-parser'),
    W = e('../utils/objects'),
    E = e('../jsonLanguageTypes'),
    r = e('vscode-nls'),
    s = e('vscode-uri'),
    K = e('vscode-languageserver-types'),
    U = r.loadMessageBundle(),
    c = /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/,
    u = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    n = (function() {
      function e(e, t, r) {
        (this.offset = t), (this.length = r), (this.parent = e);
      }
      return (
        Object.defineProperty(e.prototype, 'children', {
          get: function() {
            return [];
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.toString = function() {
          return (
            'type: ' +
            this.type +
            ' (' +
            this.offset +
            '/' +
            this.length +
            ')' +
            (this.parent ? ' parent: {' + this.parent.toString() + '}' : '')
          );
        }),
        e
      );
    })(),
    i = (function(n) {
      function e(e, t) {
        var r = n.call(this, e, t) || this;
        return (r.type = 'null'), (r.value = null), r;
      }
      return __extends(e, n), e;
    })((t.ASTNodeImpl = n));
  t.NullASTNodeImpl = i;
  var y = (function(o) {
    function e(e, t, r) {
      var n = o.call(this, e, r) || this;
      return (n.type = 'boolean'), (n.value = t), n;
    }
    return __extends(e, o), e;
  })(n);
  t.BooleanASTNodeImpl = y;
  var b = (function(n) {
    function e(e, t) {
      var r = n.call(this, e, t) || this;
      return (r.type = 'array'), (r.items = []), r;
    }
    return (
      __extends(e, n),
      Object.defineProperty(e.prototype, 'children', {
        get: function() {
          return this.items;
        },
        enumerable: !0,
        configurable: !0,
      }),
      e
    );
  })(n);
  t.ArrayASTNodeImpl = b;
  var x = (function(n) {
    function e(e, t) {
      var r = n.call(this, e, t) || this;
      return (r.type = 'number'), (r.isInteger = !0), (r.value = Number.NaN), r;
    }
    return __extends(e, n), e;
  })(n);
  t.NumberASTNodeImpl = x;
  var S = (function(o) {
    function e(e, t, r) {
      var n = o.call(this, e, t, r) || this;
      return (n.type = 'string'), (n.value = ''), n;
    }
    return __extends(e, o), e;
  })(n);
  t.StringASTNodeImpl = S;
  var C = (function(n) {
    function e(e, t) {
      var r = n.call(this, e, t) || this;
      return (r.type = 'property'), (r.colonOffset = -1), r;
    }
    return (
      __extends(e, n),
      Object.defineProperty(e.prototype, 'children', {
        get: function() {
          return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode];
        },
        enumerable: !0,
        configurable: !0,
      }),
      e
    );
  })(n);
  t.PropertyASTNodeImpl = C;
  var a,
    j = (function(n) {
      function e(e, t) {
        var r = n.call(this, e, t) || this;
        return (r.type = 'object'), (r.properties = []), r;
      }
      return (
        __extends(e, n),
        Object.defineProperty(e.prototype, 'children', {
          get: function() {
            return this.properties;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })(n);
  function B(e) {
    return W.isBoolean(e) ? (e ? {} : { not: {} }) : e;
  }
  (t.ObjectASTNodeImpl = j),
    (t.asSchema = B),
    ((a = t.EnumMatch || (t.EnumMatch = {}))[(a.Key = 0)] = 'Key'),
    (a[(a.Enum = 1)] = 'Enum');
  var f = (function() {
      function e(e, t) {
        void 0 === e && (e = -1),
          void 0 === t && (t = null),
          (this.focusOffset = e),
          (this.exclude = t),
          (this.schemas = []);
      }
      return (
        (e.prototype.add = function(e) {
          this.schemas.push(e);
        }),
        (e.prototype.merge = function(e) {
          var t;
          (t = this.schemas).push.apply(t, e.schemas);
        }),
        (e.prototype.include = function(e) {
          return (-1 === this.focusOffset || l(e, this.focusOffset)) && e !== this.exclude;
        }),
        (e.prototype.newSub = function() {
          return new e(-1, this.exclude);
        }),
        e
      );
    })(),
    J = (function() {
      function e() {}
      return (
        Object.defineProperty(e.prototype, 'schemas', {
          get: function() {
            return [];
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.add = function(e) {}),
        (e.prototype.merge = function(e) {}),
        (e.prototype.include = function(e) {
          return !0;
        }),
        (e.prototype.newSub = function() {
          return this;
        }),
        (e.instance = new e()),
        e
      );
    })(),
    H = (function() {
      function e() {
        (this.problems = []),
          (this.propertiesMatches = 0),
          (this.propertiesValueMatches = 0),
          (this.primaryValueMatches = 0),
          (this.enumValueMatch = !1),
          (this.enumValues = null);
      }
      return (
        (e.prototype.hasProblems = function() {
          return !!this.problems.length;
        }),
        (e.prototype.mergeAll = function(e) {
          for (var t = 0, r = e; t < r.length; t++) {
            var n = r[t];
            this.merge(n);
          }
        }),
        (e.prototype.merge = function(e) {
          this.problems = this.problems.concat(e.problems);
        }),
        (e.prototype.mergeEnumValues = function(e) {
          if (!this.enumValueMatch && !e.enumValueMatch && this.enumValues && e.enumValues) {
            this.enumValues = this.enumValues.concat(e.enumValues);
            for (var t = 0, r = this.problems; t < r.length; t++) {
              var n = r[t];
              n.code === E.ErrorCode.EnumValueMismatch &&
                (n.message = U(
                  'enumWarning',
                  'Value is not accepted. Valid values: {0}.',
                  this.enumValues
                    .map(function(e) {
                      return JSON.stringify(e);
                    })
                    .join(', ')
                ));
            }
          }
        }),
        (e.prototype.mergePropertyMatch = function(e) {
          this.merge(e),
            this.propertiesMatches++,
            (e.enumValueMatch || (!e.hasProblems() && e.propertiesMatches)) &&
              this.propertiesValueMatches++,
            e.enumValueMatch &&
              e.enumValues &&
              1 === e.enumValues.length &&
              this.primaryValueMatches++;
        }),
        (e.prototype.compare = function(e) {
          var t = this.hasProblems();
          return t !== e.hasProblems()
            ? t
              ? -1
              : 1
            : this.enumValueMatch !== e.enumValueMatch
            ? e.enumValueMatch
              ? -1
              : 1
            : this.primaryValueMatches !== e.primaryValueMatches
            ? this.primaryValueMatches - e.primaryValueMatches
            : this.propertiesValueMatches !== e.propertiesValueMatches
            ? this.propertiesValueMatches - e.propertiesValueMatches
            : this.propertiesMatches - e.propertiesMatches;
        }),
        e
      );
    })();
  function I(e) {
    return o.getNodeValue(e);
  }
  function l(e, t, r) {
    return (
      void 0 === r && (r = !1),
      (t >= e.offset && t < e.offset + e.length) || (r && t === e.offset + e.length)
    );
  }
  (t.ValidationResult = H),
    (t.newJSONDocument = function(e, t) {
      return void 0 === t && (t = []), new k(e, t, []);
    }),
    (t.getNodeValue = I),
    (t.getNodePath = function(e) {
      return o.getNodePath(e);
    }),
    (t.contains = l);
  var k = (function() {
    function e(e, t, r) {
      void 0 === t && (t = []),
        void 0 === r && (r = []),
        (this.root = e),
        (this.syntaxErrors = t),
        (this.comments = r);
    }
    return (
      (e.prototype.getNodeFromOffset = function(e, t) {
        if ((void 0 === t && (t = !1), this.root)) return o.findNodeAtOffset(this.root, e, t);
      }),
      (e.prototype.visit = function(o) {
        if (this.root) {
          var i = function(e) {
            var t = o(e),
              r = e.children;
            if (Array.isArray(r)) for (var n = 0; n < r.length && t; n++) t = i(r[n]);
            return t;
          };
          i(this.root);
        }
      }),
      (e.prototype.validate = function(r, e) {
        if (this.root && e) {
          var t = new H();
          return (
            z(this.root, e, t, J.instance),
            t.problems.map(function(e) {
              var t = K.Range.create(
                r.positionAt(e.location.offset),
                r.positionAt(e.location.offset + e.location.length)
              );
              return K.Diagnostic.create(t, e.message, e.severity, e.code);
            })
          );
        }
        return null;
      }),
      (e.prototype.getMatchingSchemas = function(e, t, r) {
        void 0 === t && (t = -1), void 0 === r && (r = null);
        var n = new f(t, r);
        return this.root && e && z(this.root, e, new H(), n), n.schemas;
      }),
      e
    );
  })();
  function z(k, T, O, A) {
    if (k && A.include(k)) {
      switch (k.type) {
        case 'object':
          !(function(e, t, r, n) {
            for (var o = Object.create(null), i = [], a = 0, s = e.properties; a < s.length; a++) {
              var c = s[a],
                u = c.keyNode.value;
              (o[u] = c.valueNode), i.push(u);
            }
            if (Array.isArray(t.required))
              for (var f = 0, l = t.required; f < l.length; f++) {
                var d = l[f];
                if (!o[d]) {
                  var p = e.parent && 'property' === e.parent.type && e.parent.keyNode,
                    h = p
                      ? { offset: p.offset, length: p.length }
                      : { offset: e.offset, length: 1 };
                  r.problems.push({
                    location: h,
                    severity: K.DiagnosticSeverity.Warning,
                    message: U('MissingRequiredPropWarning', 'Missing property "{0}".', d),
                  });
                }
              }
            var m = function(e) {
              for (var t = i.indexOf(e); 0 <= t; ) i.splice(t, 1), (t = i.indexOf(e));
            };
            if (t.properties)
              for (var g = 0, v = Object.keys(t.properties); g < v.length; g++) {
                var d = v[g];
                m(d);
                var y = t.properties[d],
                  b = o[d];
                if (b)
                  if (W.isBoolean(y))
                    if (y) r.propertiesMatches++, r.propertiesValueMatches++;
                    else {
                      var c = b.parent;
                      r.problems.push({
                        location: { offset: c.keyNode.offset, length: c.keyNode.length },
                        severity: K.DiagnosticSeverity.Warning,
                        message:
                          t.errorMessage ||
                          U('DisallowedExtraPropWarning', 'Property {0} is not allowed.', d),
                      });
                    }
                  else {
                    var x = new H();
                    z(b, y, x, n), r.mergePropertyMatch(x);
                  }
              }
            if (t.patternProperties)
              for (var S = 0, C = Object.keys(t.patternProperties); S < C.length; S++)
                for (var j = C[S], k = new RegExp(j), T = 0, O = i.slice(0); T < O.length; T++) {
                  var d = O[T];
                  if (k.test(d)) {
                    m(d);
                    var b = o[d];
                    if (b) {
                      var y = t.patternProperties[j];
                      if (W.isBoolean(y))
                        if (y) r.propertiesMatches++, r.propertiesValueMatches++;
                        else {
                          var c = b.parent;
                          r.problems.push({
                            location: { offset: c.keyNode.offset, length: c.keyNode.length },
                            severity: K.DiagnosticSeverity.Warning,
                            message:
                              t.errorMessage ||
                              U('DisallowedExtraPropWarning', 'Property {0} is not allowed.', d),
                          });
                        }
                      else {
                        var x = new H();
                        z(b, y, x, n), r.mergePropertyMatch(x);
                      }
                    }
                  }
                }
            if ('object' == typeof t.additionalProperties)
              for (var A = 0, E = i; A < E.length; A++) {
                var d = E[A],
                  b = o[d];
                if (b) {
                  var x = new H();
                  z(b, t.additionalProperties, x, n), r.mergePropertyMatch(x);
                }
              }
            else if (!1 === t.additionalProperties && 0 < i.length)
              for (var I = 0, P = i; I < P.length; I++) {
                var d = P[I],
                  b = o[d];
                if (b) {
                  var c = b.parent;
                  r.problems.push({
                    location: { offset: c.keyNode.offset, length: c.keyNode.length },
                    severity: K.DiagnosticSeverity.Warning,
                    message:
                      t.errorMessage ||
                      U('DisallowedExtraPropWarning', 'Property {0} is not allowed.', d),
                  });
                }
              }
            W.isNumber(t.maxProperties) &&
              e.properties.length > t.maxProperties &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U(
                  'MaxPropWarning',
                  'Object has more properties than limit of {0}.',
                  t.maxProperties
                ),
              });
            W.isNumber(t.minProperties) &&
              e.properties.length < t.minProperties &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U(
                  'MinPropWarning',
                  'Object has fewer properties than the required number of {0}',
                  t.minProperties
                ),
              });
            if (t.dependencies)
              for (var w = 0, N = Object.keys(t.dependencies); w < N.length; w++) {
                var u = N[w],
                  M = o[u];
                if (M) {
                  var D = t.dependencies[u];
                  if (Array.isArray(D))
                    for (var V = 0, _ = D; V < _.length; V++) {
                      var F = _[V];
                      o[F]
                        ? r.propertiesValueMatches++
                        : r.problems.push({
                            location: { offset: e.offset, length: e.length },
                            severity: K.DiagnosticSeverity.Warning,
                            message: U(
                              'RequiredDependentPropWarning',
                              'Object is missing property {0} required by property {1}.',
                              F,
                              u
                            ),
                          });
                    }
                  else {
                    var y = B(D);
                    if (y) {
                      var x = new H();
                      z(e, y, x, n), r.mergePropertyMatch(x);
                    }
                  }
                }
              }
            var R = B(t.propertyNames);
            if (R)
              for (var L = 0, $ = e.properties; L < $.length; L++) {
                var q = $[L],
                  u = q.keyNode;
                u && z(u, R, r, J.instance);
              }
          })(k, T, O, A);
          break;
        case 'array':
          !(function(e, t, r, n) {
            if (Array.isArray(t.items)) {
              for (var o = t.items, i = 0; i < o.length; i++) {
                var a = o[i],
                  s = B(a),
                  c = new H(),
                  u = e.items[i];
                u
                  ? (z(u, s, c, n), r.mergePropertyMatch(c))
                  : e.items.length >= o.length && r.propertiesValueMatches++;
              }
              if (e.items.length > o.length)
                if ('object' == typeof t.additionalItems)
                  for (var f = o.length; f < e.items.length; f++) {
                    var c = new H();
                    z(e.items[f], t.additionalItems, c, n), r.mergePropertyMatch(c);
                  }
                else
                  !1 === t.additionalItems &&
                    r.problems.push({
                      location: { offset: e.offset, length: e.length },
                      severity: K.DiagnosticSeverity.Warning,
                      message: U(
                        'additionalItemsWarning',
                        'Array has too many items according to schema. Expected {0} or fewer.',
                        o.length
                      ),
                    });
            } else {
              var l = B(t.items);
              if (l)
                for (var d = 0, p = e.items; d < p.length; d++) {
                  var u = p[d],
                    c = new H();
                  z(u, l, c, n), r.mergePropertyMatch(c);
                }
            }
            var h = B(t.contains);
            if (h) {
              var m = e.items.some(function(e) {
                var t = new H();
                return z(e, h, t, J.instance), !t.hasProblems();
              });
              m ||
                r.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: K.DiagnosticSeverity.Warning,
                  message:
                    t.errorMessage ||
                    U('requiredItemMissingWarning', 'Array does not contain required item.'),
                });
            }
            W.isNumber(t.minItems) &&
              e.items.length < t.minItems &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U(
                  'minItemsWarning',
                  'Array has too few items. Expected {0} or more.',
                  t.minItems
                ),
              });
            W.isNumber(t.maxItems) &&
              e.items.length > t.maxItems &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U(
                  'maxItemsWarning',
                  'Array has too many items. Expected {0} or fewer.',
                  t.maxItems
                ),
              });
            if (!0 === t.uniqueItems) {
              var g = I(e),
                v = g.some(function(e, t) {
                  return t !== g.lastIndexOf(e);
                });
              v &&
                r.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: K.DiagnosticSeverity.Warning,
                  message: U('uniqueItemsWarning', 'Array has duplicate items.'),
                });
            }
          })(k, T, O, A);
          break;
        case 'string':
          !(function(e, t, r, n) {
            W.isNumber(t.minLength) &&
              e.value.length < t.minLength &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U(
                  'minLengthWarning',
                  'String is shorter than the minimum length of {0}.',
                  t.minLength
                ),
              });
            W.isNumber(t.maxLength) &&
              e.value.length > t.maxLength &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U(
                  'maxLengthWarning',
                  'String is longer than the maximum length of {0}.',
                  t.maxLength
                ),
              });
            if (W.isString(t.pattern)) {
              var o = new RegExp(t.pattern);
              o.test(e.value) ||
                r.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: K.DiagnosticSeverity.Warning,
                  message:
                    t.patternErrorMessage ||
                    t.errorMessage ||
                    U('patternWarning', 'String does not match the pattern of "{0}".', t.pattern),
                });
            }
            if (t.format)
              switch (t.format) {
                case 'uri':
                case 'uri-reference':
                  var i = void 0;
                  if (e.value)
                    try {
                      var a = s.default.parse(e.value);
                      a.scheme ||
                        'uri' !== t.format ||
                        (i = U('uriSchemeMissing', 'URI with a scheme is expected.'));
                    } catch (e) {
                      i = e.message;
                    }
                  else i = U('uriEmpty', 'URI expected.');
                  i &&
                    r.problems.push({
                      location: { offset: e.offset, length: e.length },
                      severity: K.DiagnosticSeverity.Warning,
                      message:
                        t.patternErrorMessage ||
                        t.errorMessage ||
                        U('uriFormatWarning', 'String is not a URI: {0}', i),
                    });
                  break;
                case 'email':
                  e.value.match(u) ||
                    r.problems.push({
                      location: { offset: e.offset, length: e.length },
                      severity: K.DiagnosticSeverity.Warning,
                      message:
                        t.patternErrorMessage ||
                        t.errorMessage ||
                        U('emailFormatWarning', 'String is not an e-mail address.'),
                    });
                  break;
                case 'color-hex':
                  e.value.match(c) ||
                    r.problems.push({
                      location: { offset: e.offset, length: e.length },
                      severity: K.DiagnosticSeverity.Warning,
                      message:
                        t.patternErrorMessage ||
                        t.errorMessage ||
                        U(
                          'colorHexFormatWarning',
                          'Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.'
                        ),
                    });
              }
          })(k, T, O);
          break;
        case 'number':
          !(function(e, t, r, n) {
            var o = e.value;
            W.isNumber(t.multipleOf) &&
              o % t.multipleOf != 0 &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U('multipleOfWarning', 'Value is not divisible by {0}.', t.multipleOf),
              });
            function i(e, t) {
              return W.isNumber(t) ? t : W.isBoolean(t) && t ? e : void 0;
            }
            function a(e, t) {
              if (!W.isBoolean(t) || !t) return e;
            }
            var s = i(t.minimum, t.exclusiveMinimum);
            W.isNumber(s) &&
              o <= s &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U(
                  'exclusiveMinimumWarning',
                  'Value is below the exclusive minimum of {0}.',
                  s
                ),
              });
            var c = i(t.maximum, t.exclusiveMaximum);
            W.isNumber(c) &&
              c <= o &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U(
                  'exclusiveMaximumWarning',
                  'Value is above the exclusive maximum of {0}.',
                  c
                ),
              });
            var u = a(t.minimum, t.exclusiveMinimum);
            W.isNumber(u) &&
              o < u &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U('minimumWarning', 'Value is below the minimum of {0}.', u),
              });
            var f = a(t.maximum, t.exclusiveMaximum);
            W.isNumber(f) &&
              f < o &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U('maximumWarning', 'Value is above the maximum of {0}.', f),
              });
          })(k, T, O);
          break;
        case 'property':
          return z(k.valueNode, T, O, A);
      }
      !(function() {
        function e(e) {
          return k.type === e || ('integer' === e && 'number' === k.type && k.isInteger);
        }
        Array.isArray(T.type)
          ? T.type.some(e) ||
            O.problems.push({
              location: { offset: k.offset, length: k.length },
              severity: K.DiagnosticSeverity.Warning,
              message:
                T.errorMessage ||
                U(
                  'typeArrayMismatchWarning',
                  'Incorrect type. Expected one of {0}.',
                  T.type.join(', ')
                ),
            })
          : T.type &&
            (e(T.type) ||
              O.problems.push({
                location: { offset: k.offset, length: k.length },
                severity: K.DiagnosticSeverity.Warning,
                message:
                  T.errorMessage ||
                  U('typeMismatchWarning', 'Incorrect type. Expected "{0}".', T.type),
              }));
        if (Array.isArray(T.allOf))
          for (var t = 0, r = T.allOf; t < r.length; t++) {
            var n = r[t];
            z(k, B(n), O, A);
          }
        var o = B(T.not);
        if (o) {
          var i = new H(),
            a = A.newSub();
          z(k, o, i, a),
            i.hasProblems() ||
              O.problems.push({
                location: { offset: k.offset, length: k.length },
                severity: K.DiagnosticSeverity.Warning,
                message: U('notSchemaWarning', 'Matches a schema that is not allowed.'),
              });
          for (var s = 0, c = a.schemas; s < c.length; s++) {
            var u = c[s];
            (u.inverted = !u.inverted), A.add(u);
          }
        }
        var f = function(e, t) {
          for (var r = [], n = null, o = 0, i = e; o < i.length; o++) {
            var a = i[o],
              s = B(a),
              c = new H(),
              u = A.newSub();
            if ((z(k, s, c, u), c.hasProblems() || r.push(s), n))
              if (t || c.hasProblems() || n.validationResult.hasProblems()) {
                var f = c.compare(n.validationResult);
                0 < f
                  ? (n = { schema: s, validationResult: c, matchingSchemas: u })
                  : 0 === f && (n.matchingSchemas.merge(u), n.validationResult.mergeEnumValues(c));
              } else
                n.matchingSchemas.merge(u),
                  (n.validationResult.propertiesMatches += c.propertiesMatches),
                  (n.validationResult.propertiesValueMatches += c.propertiesValueMatches);
            else n = { schema: s, validationResult: c, matchingSchemas: u };
          }
          return (
            1 < r.length &&
              t &&
              O.problems.push({
                location: { offset: k.offset, length: 1 },
                severity: K.DiagnosticSeverity.Warning,
                message: U('oneOfWarning', 'Matches multiple schemas when only one must validate.'),
              }),
            null !== n &&
              (O.merge(n.validationResult),
              (O.propertiesMatches += n.validationResult.propertiesMatches),
              (O.propertiesValueMatches += n.validationResult.propertiesValueMatches),
              A.merge(n.matchingSchemas)),
            r.length
          );
        };
        Array.isArray(T.anyOf) && f(T.anyOf, !1);
        Array.isArray(T.oneOf) && f(T.oneOf, !0);
        var l = function(e) {
            var t = new H(),
              r = A.newSub();
            z(k, B(e), t, r),
              O.merge(t),
              (O.propertiesMatches += t.propertiesMatches),
              (O.propertiesValueMatches += t.propertiesValueMatches),
              A.merge(r);
          },
          d = B(T.if);
        d &&
          ((p = d),
          (h = B(T.then)),
          (m = B(T.else)),
          (g = B(p)),
          (v = new H()),
          (y = A.newSub()),
          z(k, g, v, y),
          A.merge(y),
          v.hasProblems() ? m && l(m) : h && l(h));
        var p, h, m, g, v, y;
        if (Array.isArray(T.enum)) {
          for (var b = I(k), x = !1, S = 0, C = T.enum; S < C.length; S++) {
            var j = C[S];
            if (W.equals(b, j)) {
              x = !0;
              break;
            }
          }
          (O.enumValues = T.enum),
            (O.enumValueMatch = x) ||
              O.problems.push({
                location: { offset: k.offset, length: k.length },
                severity: K.DiagnosticSeverity.Warning,
                code: E.ErrorCode.EnumValueMismatch,
                message:
                  T.errorMessage ||
                  U(
                    'enumWarning',
                    'Value is not accepted. Valid values: {0}.',
                    T.enum
                      .map(function(e) {
                        return JSON.stringify(e);
                      })
                      .join(', ')
                  ),
              });
        }
        if (W.isDefined(T.const)) {
          var b = I(k);
          W.equals(b, T.const)
            ? (O.enumValueMatch = !0)
            : (O.problems.push({
                location: { offset: k.offset, length: k.length },
                severity: K.DiagnosticSeverity.Warning,
                code: E.ErrorCode.EnumValueMismatch,
                message:
                  T.errorMessage ||
                  U('constWarning', 'Value must be {0}.', JSON.stringify(T.const)),
              }),
              (O.enumValueMatch = !1)),
            (O.enumValues = [T.const]);
        }
        T.deprecationMessage &&
          k.parent &&
          O.problems.push({
            location: { offset: k.parent.offset, length: k.parent.length },
            severity: K.DiagnosticSeverity.Warning,
            message: T.deprecationMessage,
          });
      })(),
        A.add({ node: k, schema: T });
    }
  }
  (t.JSONDocument = k),
    (t.parse = function(s, e) {
      var a = [],
        c = -1,
        u = s.getText(),
        f = o.createScanner(u, !1),
        t = e && e.collectComments ? [] : void 0;
      function l() {
        for (;;) {
          var e = f.scan();
          switch ((r(), e)) {
            case 12:
            case 13:
              Array.isArray(t) &&
                t.push(
                  K.Range.create(
                    s.positionAt(f.getTokenOffset()),
                    s.positionAt(f.getTokenOffset() + f.getTokenLength())
                  )
                );
              break;
            case 15:
            case 14:
              break;
            default:
              return e;
          }
        }
      }
      function d(e, t, r, n, o) {
        if ((void 0 === o && (o = K.DiagnosticSeverity.Error), 0 === a.length || r !== c)) {
          var i = K.Range.create(s.positionAt(r), s.positionAt(n));
          a.push(K.Diagnostic.create(i, e, o, t, s.languageId)), (c = r);
        }
      }
      function p(e, t, r, n, o) {
        void 0 === r && (r = null), void 0 === n && (n = []), void 0 === o && (o = []);
        var i = f.getTokenOffset(),
          a = f.getTokenOffset() + f.getTokenLength();
        if (i === a && 0 < i) {
          for (i--; 0 < i && /\s/.test(u.charAt(i)); ) i--;
          a = i + 1;
        }
        if ((d(e, t, i, a), r && h(r, !1), 0 < n.length + o.length))
          for (var s = f.getToken(); 17 !== s; ) {
            if (-1 !== n.indexOf(s)) {
              l();
              break;
            }
            if (-1 !== o.indexOf(s)) break;
            s = l();
          }
        return r;
      }
      function r() {
        switch (f.getTokenError()) {
          case 4:
            return (
              p(
                U('InvalidUnicode', 'Invalid unicode sequence in string.'),
                E.ErrorCode.InvalidUnicode
              ),
              !0
            );
          case 5:
            return (
              p(
                U('InvalidEscapeCharacter', 'Invalid escape character in string.'),
                E.ErrorCode.InvalidEscapeCharacter
              ),
              !0
            );
          case 3:
            return (
              p(
                U('UnexpectedEndOfNumber', 'Unexpected end of number.'),
                E.ErrorCode.UnexpectedEndOfNumber
              ),
              !0
            );
          case 1:
            return (
              p(
                U('UnexpectedEndOfComment', 'Unexpected end of comment.'),
                E.ErrorCode.UnexpectedEndOfComment
              ),
              !0
            );
          case 2:
            return (
              p(
                U('UnexpectedEndOfString', 'Unexpected end of string.'),
                E.ErrorCode.UnexpectedEndOfString
              ),
              !0
            );
          case 6:
            return (
              p(
                U(
                  'InvalidCharacter',
                  'Invalid characters in string. Control characters must be escaped.'
                ),
                E.ErrorCode.InvalidCharacter
              ),
              !0
            );
        }
        return !1;
      }
      function h(e, t) {
        return (e.length = f.getTokenOffset() + f.getTokenLength() - e.offset), t && l(), e;
      }
      function m(e, t) {
        var r = new C(e, f.getTokenOffset()),
          n = g(r);
        if (!n) {
          if (16 !== f.getToken()) return null;
          p(U('DoubleQuotesExpected', 'Property keys must be doublequoted'), E.ErrorCode.Undefined);
          var o = new S(r, f.getTokenOffset(), f.getTokenLength());
          (o.value = f.getTokenValue()), (n = o), l();
        }
        var i = t[(r.keyNode = n).value];
        if (
          ((t[n.value] = i
            ? (d(
                U('DuplicateKeyWarning', 'Duplicate object key'),
                E.ErrorCode.DuplicateKey,
                r.keyNode.offset,
                r.keyNode.offset + r.keyNode.length,
                K.DiagnosticSeverity.Warning
              ),
              'object' == typeof i &&
                d(
                  U('DuplicateKeyWarning', 'Duplicate object key'),
                  E.ErrorCode.DuplicateKey,
                  i.keyNode.offset,
                  i.keyNode.offset + i.keyNode.length,
                  K.DiagnosticSeverity.Warning
                ),
              !0)
            : r),
          6 === f.getToken())
        )
          (r.colonOffset = f.getTokenOffset()), l();
        else if (
          (p(U('ColonExpected', 'Colon expected'), E.ErrorCode.ColonExpected),
          10 === f.getToken() &&
            s.positionAt(n.offset + n.length).line < s.positionAt(f.getTokenOffset()).line)
        )
          return (r.length = n.length), r;
        var a = v(r, n.value);
        return a
          ? ((r.valueNode = a), (r.length = a.offset + a.length - r.offset), r)
          : p(U('ValueExpected', 'Value expected'), E.ErrorCode.ValueExpected, r, [], [2, 5]);
      }
      function g(e) {
        if (10 !== f.getToken()) return null;
        var t = new S(e, f.getTokenOffset());
        return (t.value = f.getTokenValue()), h(t, !0);
      }
      function v(e, t) {
        return (
          (function(e) {
            if (3 !== f.getToken()) return null;
            var t = new b(e, f.getTokenOffset());
            l();
            for (var r = !1; 4 !== f.getToken() && 17 !== f.getToken(); ) {
              if (5 === f.getToken()) {
                r || p(U('ValueExpected', 'Value expected'), E.ErrorCode.ValueExpected);
                var n = f.getTokenOffset();
                if ((l(), 4 === f.getToken())) {
                  r && d(U('TrailingComma', 'Trailing comma'), E.ErrorCode.TrailingComma, n, n + 1);
                  continue;
                }
              } else r && p(U('ExpectedComma', 'Expected comma'), E.ErrorCode.CommaExpected);
              var o = v(t, 0);
              o
                ? t.items.push(o)
                : p(
                    U('PropertyExpected', 'Value expected'),
                    E.ErrorCode.ValueExpected,
                    null,
                    [],
                    [4, 5]
                  ),
                (r = !0);
            }
            return 4 !== f.getToken()
              ? p(
                  U('ExpectedCloseBracket', 'Expected comma or closing bracket'),
                  E.ErrorCode.CommaOrCloseBacketExpected,
                  t
                )
              : h(t, !0);
          })(e) ||
          (function(e) {
            if (1 !== f.getToken()) return null;
            var t = new j(e, f.getTokenOffset()),
              r = Object.create(null);
            l();
            for (var n = !1; 2 !== f.getToken() && 17 !== f.getToken(); ) {
              if (5 === f.getToken()) {
                n || p(U('PropertyExpected', 'Property expected'), E.ErrorCode.PropertyExpected);
                var o = f.getTokenOffset();
                if ((l(), 2 === f.getToken())) {
                  n && d(U('TrailingComma', 'Trailing comma'), E.ErrorCode.TrailingComma, o, o + 1);
                  continue;
                }
              } else n && p(U('ExpectedComma', 'Expected comma'), E.ErrorCode.CommaExpected);
              var i = m(t, r);
              i
                ? t.properties.push(i)
                : p(
                    U('PropertyExpected', 'Property expected'),
                    E.ErrorCode.PropertyExpected,
                    null,
                    [],
                    [2, 5]
                  ),
                (n = !0);
            }
            return 2 !== f.getToken()
              ? p(
                  U('ExpectedCloseBrace', 'Expected comma or closing brace'),
                  E.ErrorCode.CommaOrCloseBraceExpected,
                  t
                )
              : h(t, !0);
          })(e) ||
          g(e) ||
          (function(e) {
            if (11 !== f.getToken()) return null;
            var t = new x(e, f.getTokenOffset());
            if (0 === f.getTokenError()) {
              var r = f.getTokenValue();
              try {
                var n = JSON.parse(r);
                if (!W.isNumber(n))
                  return p(
                    U('InvalidNumberFormat', 'Invalid number format.'),
                    E.ErrorCode.Undefined,
                    t
                  );
                t.value = n;
              } catch (e) {
                return p(
                  U('InvalidNumberFormat', 'Invalid number format.'),
                  E.ErrorCode.Undefined,
                  t
                );
              }
              t.isInteger = -1 === r.indexOf('.');
            }
            return h(t, !0);
          })(e) ||
          (function(e) {
            switch (f.getToken()) {
              case 7:
                return h(new i(e, f.getTokenOffset()), !0);
              case 8:
                return h(new y(e, !0, f.getTokenOffset()), !0);
              case 9:
                return h(new y(e, !1, f.getTokenOffset()), !0);
              default:
                return null;
            }
          })(e)
        );
      }
      var n = null;
      return (
        17 !== l() &&
          ((n = v(null))
            ? 17 !== f.getToken() &&
              p(U('End of file expected', 'End of file expected.'), E.ErrorCode.Undefined)
            : p(
                U('Invalid symbol', 'Expected a JSON object, array or literal.'),
                E.ErrorCode.Undefined
              )),
        new k(n, a, t)
      );
    });
}),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/utils/json', ['require', 'exports'], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.stringifyObject = function e(t, r, n) {
        if (null === t || 'object' != typeof t) return n(t);
        var o = r + '\t';
        if (Array.isArray(t)) {
          if (0 === t.length) return '[]';
          for (var i = '[\n', a = 0; a < t.length; a++)
            (i += o + e(t[a], o, n)), a < t.length - 1 && (i += ','), (i += '\n');
          return (i += r + ']');
        }
        var s = Object.keys(t);
        if (0 === s.length) return '{}';
        for (i = '{\n', a = 0; a < s.length; a++) {
          var c = s[a];
          (i += o + JSON.stringify(c) + ': ' + e(t[c], o, n)),
            a < s.length - 1 && (i += ','),
            (i += '\n');
        }
        return (i += r + '}');
      });
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/utils/strings', ['require', 'exports'], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.startsWith = function(e, t) {
        if (e.length < t.length) return !1;
        for (var r = 0; r < t.length; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }),
      (t.endsWith = function(e, t) {
        var r = e.length - t.length;
        return 0 < r ? e.lastIndexOf(t) === r : 0 === r && e === t;
      }),
      (t.convertSimple2RegExpPattern = function(e) {
        return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
      }),
      (t.repeat = function(e, t) {
        for (var r = ''; 0 < t; ) 1 == (1 & t) && (r += e), (e += e), (t >>>= 1);
        return r;
      });
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/services/jsonCompletion', [
          'require',
          'exports',
          '../parser/jsonParser',
          'jsonc-parser',
          '../utils/json',
          '../utils/strings',
          '../utils/objects',
          'vscode-languageserver-types',
          'vscode-nls',
        ], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var b = e('../parser/jsonParser'),
      s = e('jsonc-parser'),
      r = e('../utils/json'),
      c = e('../utils/strings'),
      g = e('../utils/objects'),
      x = e('vscode-languageserver-types'),
      n = e('vscode-nls').loadMessageBundle(),
      o = (function() {
        function e(e, t, r, n) {
          void 0 === t && (t = []),
            void 0 === r && (r = Promise),
            void 0 === n && (n = {}),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promiseConstructor = r),
            (this.clientCapabilities = n),
            (this.templateVarIdCounter = 0);
        }
        return (
          (e.prototype.doResolve = function(e) {
            for (var t = this.contributions.length - 1; 0 <= t; t--)
              if (this.contributions[t].resolveCompletion) {
                var r = this.contributions[t].resolveCompletion(e);
                if (r) return r;
              }
            return this.promiseConstructor.resolve(e);
          }),
          (e.prototype.doComplete = function(u, e, f) {
            var l = this,
              d = { items: [], isIncomplete: !1 },
              p = u.offsetAt(e),
              h = f.getNodeFromOffset(p, !0);
            if (this.isInComment(u, h ? h.offset : 0, p)) return Promise.resolve(d);
            var m = this.getCurrentWord(u, p),
              g = null;
            if (
              !h ||
              ('string' !== h.type &&
                'number' !== h.type &&
                'boolean' !== h.type &&
                'null' !== h.type)
            ) {
              var t = p - m.length;
              0 < t && '"' === u.getText()[t - 1] && t--, (g = x.Range.create(u.positionAt(t), e));
            } else g = x.Range.create(u.positionAt(h.offset), u.positionAt(h.offset + h.length));
            var v = {},
              y = {
                add: function(e) {
                  var t = v[e.label];
                  t
                    ? t.documentation || (t.documentation = e.documentation)
                    : ((v[e.label] = e),
                      g && (e.textEdit = x.TextEdit.replace(g, e.insertText)),
                      d.items.push(e));
                },
                setAsIncomplete: function() {
                  d.isIncomplete = !0;
                },
                error: function(e) {
                  console.error(e);
                },
                log: function(e) {
                  console.log(e);
                },
                getNumberOfProposals: function() {
                  return d.items.length;
                },
              };
            return this.schemaService.getSchemaForResource(u.uri, f).then(function(e) {
              var r = [],
                n = !0,
                t = '',
                o = null;
              if (h && 'string' === h.type) {
                var i = h.parent;
                i &&
                  'property' === i.type &&
                  i.keyNode === h &&
                  ((n = !i.valueNode),
                  (o = i),
                  (t = u.getText().substr(h.offset + 1, h.length - 2)),
                  i && (h = i.parent));
              }
              if (h && 'object' === h.type) {
                if (h.offset === p) return d;
                h.properties.forEach(function(e) {
                  (o && o === e) || (v[e.keyNode.value] = x.CompletionItem.create('__'));
                });
                var a = '';
                n && (a = l.evaluateSeparatorAfter(u, u.offsetAt(g.end))),
                  e
                    ? l.getPropertyCompletions(e, f, h, n, a, y)
                    : l.getSchemaLessPropertyCompletions(f, h, t, y);
                var s = b.getNodePath(h);
                l.contributions.forEach(function(e) {
                  var t = e.collectPropertyCompletions(u.uri, s, m, n, '' === a, y);
                  t && r.push(t);
                }),
                  !e &&
                    0 < m.length &&
                    '"' !== u.getText().charAt(p - m.length - 1) &&
                    (y.add({
                      kind: x.CompletionItemKind.Property,
                      label: l.getLabelForValue(m),
                      insertText: l.getInsertTextForProperty(m, null, !1, a),
                      insertTextFormat: x.InsertTextFormat.Snippet,
                      documentation: '',
                    }),
                    y.setAsIncomplete());
              }
              var c = {};
              return (
                e
                  ? l.getValueCompletions(e, f, h, p, u, y, c)
                  : l.getSchemaLessValueCompletions(f, h, p, u, y),
                0 < l.contributions.length && l.getContributedValueCompletions(f, h, p, u, y, r),
                l.promiseConstructor.all(r).then(function() {
                  if (0 === y.getNumberOfProposals()) {
                    var e = p;
                    !h ||
                      ('string' !== h.type &&
                        'number' !== h.type &&
                        'boolean' !== h.type &&
                        'null' !== h.type) ||
                      (e = h.offset + h.length);
                    var t = l.evaluateSeparatorAfter(u, e);
                    l.addFillerValueCompletions(c, t, y);
                  }
                  return d;
                })
              );
            });
          }),
          (e.prototype.getPropertyCompletions = function(e, t, r, o, i, a) {
            var s = this;
            t.getMatchingSchemas(e.schema, r.offset).forEach(function(e) {
              if (e.node === r && !e.inverted) {
                var n = e.schema.properties;
                n &&
                  Object.keys(n).forEach(function(e) {
                    var t = n[e];
                    if ('object' == typeof t && !t.deprecationMessage && !t.doNotSuggest) {
                      var r = {
                        kind: x.CompletionItemKind.Property,
                        label: s.sanitizeLabel(e),
                        insertText: s.getInsertTextForProperty(e, t, o, i),
                        insertTextFormat: x.InsertTextFormat.Snippet,
                        filterText: s.getFilterTextForValue(e),
                        documentation: s.fromMarkup(t.markdownDescription) || t.description || '',
                      };
                      c.endsWith(r.insertText, '$1' + i) &&
                        (r.command = { title: 'Suggest', command: 'editor.action.triggerSuggest' }),
                        a.add(r);
                    }
                  });
              }
            });
          }),
          (e.prototype.getSchemaLessPropertyCompletions = function(e, t, r, n) {
            var o = this,
              i = function(e) {
                e.properties.forEach(function(e) {
                  var t = e.keyNode.value;
                  n.add({
                    kind: x.CompletionItemKind.Property,
                    label: o.sanitizeLabel(t),
                    insertText: o.getInsertTextForValue(t, ''),
                    insertTextFormat: x.InsertTextFormat.Snippet,
                    filterText: o.getFilterTextForValue(t),
                    documentation: '',
                  });
                });
              };
            if (t.parent)
              if ('property' === t.parent.type) {
                var a = t.parent.keyNode.value;
                e.visit(function(e) {
                  return (
                    'property' === e.type &&
                      e !== t.parent &&
                      e.keyNode.value === a &&
                      e.valueNode &&
                      'object' === e.valueNode.type &&
                      i(e.valueNode),
                    !0
                  );
                });
              } else
                'array' === t.parent.type &&
                  t.parent.items.forEach(function(e) {
                    'object' === e.type && e !== t && i(e);
                  });
            else
              'object' === t.type &&
                n.add({
                  kind: x.CompletionItemKind.Property,
                  label: '$schema',
                  insertText: this.getInsertTextForProperty('$schema', null, !0, ''),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  documentation: '',
                  filterText: this.getFilterTextForValue('$schema'),
                });
          }),
          (e.prototype.getSchemaLessValueCompletions = function(e, t, r, n, o) {
            var i = this,
              a = r;
            if (
              (!t ||
                ('string' !== t.type &&
                  'number' !== t.type &&
                  'boolean' !== t.type &&
                  'null' !== t.type) ||
                ((a = t.offset + t.length), (t = t.parent)),
              !t)
            )
              return (
                o.add({
                  kind: this.getSuggestionKind('object'),
                  label: 'Empty object',
                  insertText: this.getInsertTextForValue({}, ''),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  documentation: '',
                }),
                void o.add({
                  kind: this.getSuggestionKind('array'),
                  label: 'Empty array',
                  insertText: this.getInsertTextForValue([], ''),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  documentation: '',
                })
              );
            var s = this.evaluateSeparatorAfter(n, a),
              c = function(e) {
                b.contains(e.parent, r, !0) ||
                  o.add({
                    kind: i.getSuggestionKind(e.type),
                    label: i.getLabelTextForMatchingNode(e, n),
                    insertText: i.getInsertTextForMatchingNode(e, n, s),
                    insertTextFormat: x.InsertTextFormat.Snippet,
                    documentation: '',
                  }),
                  'boolean' === e.type && i.addBooleanValueCompletion(!e.value, s, o);
              };
            if ('property' === t.type && r > t.colonOffset) {
              var u = t.valueNode;
              if (u && (r > u.offset + u.length || 'object' === u.type || 'array' === u.type))
                return;
              var f = t.keyNode.value;
              e.visit(function(e) {
                return (
                  'property' === e.type && e.keyNode.value === f && e.valueNode && c(e.valueNode),
                  !0
                );
              }),
                '$schema' === f &&
                  t.parent &&
                  !t.parent.parent &&
                  this.addDollarSchemaCompletions(s, o);
            }
            if ('array' === t.type)
              if (t.parent && 'property' === t.parent.type) {
                var l = t.parent.keyNode.value;
                e.visit(function(e) {
                  return (
                    'property' === e.type &&
                      e.keyNode.value === l &&
                      e.valueNode &&
                      'array' === e.valueNode.type &&
                      e.valueNode.items.forEach(c),
                    !0
                  );
                });
              } else t.items.forEach(c);
          }),
          (e.prototype.getValueCompletions = function(e, t, n, o, i, a, s) {
            var c = this,
              r = o,
              u = null,
              f = null;
            if (
              (!n ||
                ('string' !== n.type &&
                  'number' !== n.type &&
                  'boolean' !== n.type &&
                  'null' !== n.type) ||
                ((r = n.offset + n.length), (n = (f = n).parent)),
              n)
            ) {
              if ('property' === n.type && o > n.colonOffset) {
                var l = n.valueNode;
                if (l && o > l.offset + l.length) return;
                (u = n.keyNode.value), (n = n.parent);
              }
              if (n && (null !== u || 'array' === n.type)) {
                var d = this.evaluateSeparatorAfter(i, r);
                t.getMatchingSchemas(e.schema, n.offset, f).forEach(function(e) {
                  if (e.node === n && !e.inverted && e.schema) {
                    if ('array' === n.type && e.schema.items)
                      if (Array.isArray(e.schema.items)) {
                        var t = c.findItemAtOffset(n, i, o);
                        t < e.schema.items.length &&
                          c.addSchemaValueCompletions(e.schema.items[t], d, a, s);
                      } else c.addSchemaValueCompletions(e.schema.items, d, a, s);
                    if (e.schema.properties) {
                      var r = e.schema.properties[u];
                      r && c.addSchemaValueCompletions(r, d, a, s);
                    }
                  }
                }),
                  '$schema' !== u || n.parent || this.addDollarSchemaCompletions(d, a),
                  s.boolean &&
                    (this.addBooleanValueCompletion(!0, d, a),
                    this.addBooleanValueCompletion(!1, d, a)),
                  s.null && this.addNullValueCompletion(d, a);
              }
            } else this.addSchemaValueCompletions(e.schema, '', a, s);
          }),
          (e.prototype.getContributedValueCompletions = function(e, t, r, n, o, i) {
            if (t) {
              if (
                (('string' !== t.type &&
                  'number' !== t.type &&
                  'boolean' !== t.type &&
                  'null' !== t.type) ||
                  (t = t.parent),
                'property' === t.type && r > t.colonOffset)
              ) {
                var a = t.keyNode.value,
                  s = t.valueNode;
                if (!s || r <= s.offset + s.length) {
                  var c = b.getNodePath(t.parent);
                  this.contributions.forEach(function(e) {
                    var t = e.collectValueCompletions(n.uri, c, a, o);
                    t && i.push(t);
                  });
                }
              }
            } else
              this.contributions.forEach(function(e) {
                var t = e.collectDefaultCompletions(n.uri, o);
                t && i.push(t);
              });
          }),
          (e.prototype.addSchemaValueCompletions = function(e, t, r, n) {
            var o = this;
            'object' == typeof e &&
              (this.addEnumValueCompletions(e, t, r),
              this.addDefaultValueCompletions(e, t, r),
              this.collectTypes(e, n),
              Array.isArray(e.allOf) &&
                e.allOf.forEach(function(e) {
                  return o.addSchemaValueCompletions(e, t, r, n);
                }),
              Array.isArray(e.anyOf) &&
                e.anyOf.forEach(function(e) {
                  return o.addSchemaValueCompletions(e, t, r, n);
                }),
              Array.isArray(e.oneOf) &&
                e.oneOf.forEach(function(e) {
                  return o.addSchemaValueCompletions(e, t, r, n);
                }));
          }),
          (e.prototype.addDefaultValueCompletions = function(f, l, d, p) {
            var h = this;
            void 0 === p && (p = 0);
            var m = !1;
            if (g.isDefined(f.default)) {
              for (var e = f.type, t = f.default, r = p; 0 < r; r--) (t = [t]), (e = 'array');
              d.add({
                kind: this.getSuggestionKind(e),
                label: this.getLabelForValue(t),
                insertText: this.getInsertTextForValue(t, l),
                insertTextFormat: x.InsertTextFormat.Snippet,
                detail: n('json.suggest.default', 'Default value'),
              }),
                (m = !0);
            }
            Array.isArray(f.examples) &&
              f.examples.forEach(function(e) {
                for (var t = f.type, r = e, n = p; 0 < n; n--) (r = [r]), (t = 'array');
                d.add({
                  kind: h.getSuggestionKind(t),
                  label: h.getLabelForValue(r),
                  insertText: h.getInsertTextForValue(r, l),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                }),
                  (m = !0);
              }),
              Array.isArray(f.defaultSnippets) &&
                f.defaultSnippets.forEach(function(e) {
                  var t,
                    r,
                    n = f.type,
                    o = e.body,
                    i = e.label;
                  if (g.isDefined(o)) {
                    f.type;
                    for (var a = p; 0 < a; a--) (o = [o]), 'array';
                    (t = h.getInsertTextForSnippetValue(o, l)),
                      (r = h.getFilterTextForSnippetValue(o)),
                      (i = i || h.getLabelForSnippetValue(o));
                  } else if ('string' == typeof e.bodyText) {
                    var s = '',
                      c = '',
                      u = '';
                    for (a = p; 0 < a; a--)
                      (s = s + u + '[\n'), (c = c + '\n' + u + ']'), (u += '\t'), (n = 'array');
                    (t = s + u + e.bodyText.split('\n').join('\n' + u) + c + l),
                      (i = i || h.sanitizeLabel(t)),
                      (r = t.replace(/[\n]/g, ''));
                  }
                  d.add({
                    kind: h.getSuggestionKind(n),
                    label: i,
                    documentation: h.fromMarkup(e.markdownDescription) || e.description,
                    insertText: t,
                    insertTextFormat: x.InsertTextFormat.Snippet,
                    filterText: r,
                  }),
                    (m = !0);
                }),
              m ||
                'object' != typeof f.items ||
                Array.isArray(f.items) ||
                this.addDefaultValueCompletions(f.items, l, d, p + 1);
          }),
          (e.prototype.addEnumValueCompletions = function(e, t, r) {
            if (
              (g.isDefined(e.const) &&
                r.add({
                  kind: this.getSuggestionKind(e.type),
                  label: this.getLabelForValue(e.const),
                  insertText: this.getInsertTextForValue(e.const, t),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  documentation: this.fromMarkup(e.markdownDescription) || e.description,
                }),
              Array.isArray(e.enum))
            )
              for (var n = 0, o = e.enum.length; n < o; n++) {
                var i = e.enum[n],
                  a = this.fromMarkup(e.markdownDescription) || e.description;
                e.markdownEnumDescriptions &&
                n < e.markdownEnumDescriptions.length &&
                this.doesSupportMarkdown()
                  ? (a = this.fromMarkup(e.markdownEnumDescriptions[n]))
                  : e.enumDescriptions &&
                    n < e.enumDescriptions.length &&
                    (a = e.enumDescriptions[n]),
                  r.add({
                    kind: this.getSuggestionKind(e.type),
                    label: this.getLabelForValue(i),
                    insertText: this.getInsertTextForValue(i, t),
                    insertTextFormat: x.InsertTextFormat.Snippet,
                    documentation: a,
                  });
              }
          }),
          (e.prototype.collectTypes = function(e, t) {
            if (!Array.isArray(e.enum) && !g.isDefined(e.const)) {
              var r = e.type;
              Array.isArray(r)
                ? r.forEach(function(e) {
                    return (t[e] = !0);
                  })
                : (t[r] = !0);
            }
          }),
          (e.prototype.addFillerValueCompletions = function(e, t, r) {
            e.object &&
              r.add({
                kind: this.getSuggestionKind('object'),
                label: '{}',
                insertText: this.getInsertTextForGuessedValue({}, t),
                insertTextFormat: x.InsertTextFormat.Snippet,
                detail: n('defaults.object', 'New object'),
                documentation: '',
              }),
              e.array &&
                r.add({
                  kind: this.getSuggestionKind('array'),
                  label: '[]',
                  insertText: this.getInsertTextForGuessedValue([], t),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  detail: n('defaults.array', 'New array'),
                  documentation: '',
                });
          }),
          (e.prototype.addBooleanValueCompletion = function(e, t, r) {
            r.add({
              kind: this.getSuggestionKind('boolean'),
              label: e ? 'true' : 'false',
              insertText: this.getInsertTextForValue(e, t),
              insertTextFormat: x.InsertTextFormat.Snippet,
              documentation: '',
            });
          }),
          (e.prototype.addNullValueCompletion = function(e, t) {
            t.add({
              kind: this.getSuggestionKind('null'),
              label: 'null',
              insertText: 'null' + e,
              insertTextFormat: x.InsertTextFormat.Snippet,
              documentation: '',
            });
          }),
          (e.prototype.addDollarSchemaCompletions = function(t, r) {
            var n = this;
            this.schemaService
              .getRegisteredSchemaIds(function(e) {
                return 'http' === e || 'https' === e;
              })
              .forEach(function(e) {
                return r.add({
                  kind: x.CompletionItemKind.Module,
                  label: n.getLabelForValue(e),
                  filterText: n.getFilterTextForValue(e),
                  insertText: n.getInsertTextForValue(e, t),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  documentation: '',
                });
              });
          }),
          (e.prototype.sanitizeLabel = function(e) {
            return (
              57 < (e = e.replace(/[\n]/g, '↵')).length && (e = e.substr(0, 57).trim() + '...'), e
            );
          }),
          (e.prototype.getLabelForValue = function(e) {
            return this.sanitizeLabel(JSON.stringify(e));
          }),
          (e.prototype.getFilterTextForValue = function(e) {
            return JSON.stringify(e);
          }),
          (e.prototype.getFilterTextForSnippetValue = function(e) {
            return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1');
          }),
          (e.prototype.getLabelForSnippetValue = function(e) {
            var t = JSON.stringify(e);
            return (t = t.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1')), this.sanitizeLabel(t);
          }),
          (e.prototype.getInsertTextForPlainText = function(e) {
            return e.replace(/[\\\$\}]/g, '\\$&');
          }),
          (e.prototype.getInsertTextForValue = function(e, t) {
            var r = JSON.stringify(e, null, '\t');
            return '{}' === r
              ? '{$1}' + t
              : '[]' === r
              ? '[$1]' + t
              : this.getInsertTextForPlainText(r + t);
          }),
          (e.prototype.getInsertTextForSnippetValue = function(e, t) {
            return (
              r.stringifyObject(e, '', function(e) {
                return 'string' == typeof e && '^' === e[0] ? e.substr(1) : JSON.stringify(e);
              }) + t
            );
          }),
          (e.prototype.getInsertTextForGuessedValue = function(e, t) {
            switch (typeof e) {
              case 'object':
                return null === e ? '${1:null}' + t : this.getInsertTextForValue(e, t);
              case 'string':
                var r = JSON.stringify(e);
                return (
                  (r = r.substr(1, r.length - 2)),
                  '"${1:' + (r = this.getInsertTextForPlainText(r)) + '}"' + t
                );
              case 'number':
              case 'boolean':
                return '${1:' + JSON.stringify(e) + '}' + t;
            }
            return this.getInsertTextForValue(e, t);
          }),
          (e.prototype.getSuggestionKind = function(e) {
            if (Array.isArray(e)) {
              var t = e;
              e = 0 < t.length ? t[0] : null;
            }
            if (!e) return x.CompletionItemKind.Value;
            switch (e) {
              case 'string':
                return x.CompletionItemKind.Value;
              case 'object':
                return x.CompletionItemKind.Module;
              case 'property':
                return x.CompletionItemKind.Property;
              default:
                return x.CompletionItemKind.Value;
            }
          }),
          (e.prototype.getLabelTextForMatchingNode = function(e, t) {
            switch (e.type) {
              case 'array':
                return '[]';
              case 'object':
                return '{}';
              default:
                return t.getText().substr(e.offset, e.length);
            }
          }),
          (e.prototype.getInsertTextForMatchingNode = function(e, t, r) {
            switch (e.type) {
              case 'array':
                return this.getInsertTextForValue([], r);
              case 'object':
                return this.getInsertTextForValue({}, r);
              default:
                var n = t.getText().substr(e.offset, e.length) + r;
                return this.getInsertTextForPlainText(n);
            }
          }),
          (e.prototype.getInsertTextForProperty = function(e, t, r, n) {
            var o = this.getInsertTextForValue(e, '');
            if (!r) return o;
            var i,
              a = o + ': ',
              s = 0;
            if (t) {
              if (Array.isArray(t.defaultSnippets)) {
                if (1 === t.defaultSnippets.length) {
                  var c = t.defaultSnippets[0].body;
                  g.isDefined(c) && (i = this.getInsertTextForSnippetValue(c, ''));
                }
                s += t.defaultSnippets.length;
              }
              if (
                (t.enum &&
                  (i ||
                    1 !== t.enum.length ||
                    (i = this.getInsertTextForGuessedValue(t.enum[0], '')),
                  (s += t.enum.length)),
                g.isDefined(t.default) &&
                  (i || (i = this.getInsertTextForGuessedValue(t.default, '')), s++),
                0 === s)
              ) {
                var u = Array.isArray(t.type) ? t.type[0] : t.type;
                switch ((u || (t.properties ? (u = 'object') : t.items && (u = 'array')), u)) {
                  case 'boolean':
                    i = '$1';
                    break;
                  case 'string':
                    i = '"$1"';
                    break;
                  case 'object':
                    i = '{$1}';
                    break;
                  case 'array':
                    i = '[$1]';
                    break;
                  case 'number':
                  case 'integer':
                    i = '${1:0}';
                    break;
                  case 'null':
                    i = '${1:null}';
                    break;
                  default:
                    return o;
                }
              }
            }
            return (!i || 1 < s) && (i = '$1'), a + i + n;
          }),
          (e.prototype.getCurrentWord = function(e, t) {
            for (
              var r = t - 1, n = e.getText();
              0 <= r && -1 === ' \t\n\r\v":{[,]}'.indexOf(n.charAt(r));

            )
              r--;
            return n.substring(r + 1, t);
          }),
          (e.prototype.evaluateSeparatorAfter = function(e, t) {
            var r = s.createScanner(e.getText(), !0);
            switch ((r.setPosition(t), r.scan())) {
              case 5:
              case 2:
              case 4:
              case 17:
                return '';
              default:
                return ',';
            }
          }),
          (e.prototype.findItemAtOffset = function(e, t, r) {
            for (
              var n = s.createScanner(t.getText(), !0), o = e.items, i = o.length - 1;
              0 <= i;
              i--
            ) {
              var a = o[i];
              if (r > a.offset + a.length)
                return (
                  n.setPosition(a.offset + a.length),
                  5 === n.scan() && r >= n.getTokenOffset() + n.getTokenLength() ? i + 1 : i
                );
              if (r >= a.offset) return i;
            }
            return 0;
          }),
          (e.prototype.isInComment = function(e, t, r) {
            var n = s.createScanner(e.getText(), !1);
            n.setPosition(t);
            for (var o = n.scan(); 17 !== o && n.getTokenOffset() + n.getTokenLength() < r; )
              o = n.scan();
            return (12 === o || 13 === o) && n.getTokenOffset() <= r;
          }),
          (e.prototype.fromMarkup = function(e) {
            if (e && this.doesSupportMarkdown()) return { kind: x.MarkupKind.Markdown, value: e };
          }),
          (e.prototype.doesSupportMarkdown = function() {
            if (!g.isDefined(this.supportsMarkdown)) {
              var e =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion;
              this.supportsMarkdown =
                e &&
                e.completionItem &&
                Array.isArray(e.completionItem.documentationFormat) &&
                -1 !== e.completionItem.documentationFormat.indexOf(x.MarkupKind.Markdown);
            }
            return this.supportsMarkdown;
          }),
          e
        );
      })();
    t.JSONCompletion = o;
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/services/jsonHover', [
          'require',
          'exports',
          '../parser/jsonParser',
          'vscode-languageserver-types',
        ], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var d = e('../parser/jsonParser'),
      p = e('vscode-languageserver-types'),
      r = (function() {
        function e(e, t, r) {
          void 0 === t && (t = []),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promise = r || Promise);
        }
        return (
          (e.prototype.doHover = function(e, t, s) {
            var r = e.offsetAt(t),
              c = s.getNodeFromOffset(r);
            if (
              !c ||
              (('object' === c.type || 'array' === c.type) &&
                r > c.offset + 1 &&
                r < c.offset + c.length - 1)
            )
              return this.promise.resolve(null);
            var n = c;
            if ('string' === c.type) {
              var o = c.parent;
              if (o && 'property' === o.type && o.keyNode === c && !(c = o.valueNode))
                return this.promise.resolve(null);
            }
            for (
              var i = p.Range.create(e.positionAt(n.offset), e.positionAt(n.offset + n.length)),
                u = function(e) {
                  return { contents: e, range: i };
                },
                a = d.getNodePath(c),
                f = this.contributions.length - 1;
              0 <= f;
              f--
            ) {
              var l = this.contributions[f].getInfoContribution(e.uri, a);
              if (l)
                return l.then(function(e) {
                  return u(e);
                });
            }
            return this.schemaService.getSchemaForResource(e.uri, s).then(function(e) {
              if (e) {
                var t = s.getMatchingSchemas(e.schema, c.offset),
                  r = null,
                  n = null,
                  o = null,
                  i = null;
                t.every(function(e) {
                  if (
                    e.node === c &&
                    !e.inverted &&
                    e.schema &&
                    ((r = r || e.schema.title),
                    (n = n || e.schema.markdownDescription || h(e.schema.description)),
                    e.schema.enum)
                  ) {
                    var t = e.schema.enum.indexOf(d.getNodeValue(c));
                    e.schema.markdownEnumDescriptions
                      ? (o = e.schema.markdownEnumDescriptions[t])
                      : e.schema.enumDescriptions && (o = h(e.schema.enumDescriptions[t])),
                      o && 'string' != typeof (i = e.schema.enum[t]) && (i = JSON.stringify(i));
                  }
                  return !0;
                });
                var a = '';
                return (
                  r && (a = h(r)),
                  n && (0 < a.length && (a += '\n\n'), (a += n)),
                  o && (0 < a.length && (a += '\n\n'), (a += '`' + h(i) + '`: ' + o)),
                  u([a])
                );
              }
              return null;
            });
          }),
          e
        );
      })();
    function h(e) {
      if (e)
        return e
          .replace(/([^\n\r])(\r?\n)([^\n\r])/gm, '$1\n\n$3')
          .replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
    }
    t.JSONHover = r;
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/services/jsonSchemaService', [
          'require',
          'exports',
          'jsonc-parser',
          'vscode-uri',
          '../utils/strings',
          '../parser/jsonParser',
          'vscode-nls',
        ], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = e('jsonc-parser'),
      n = e('vscode-uri'),
      p = e('../utils/strings'),
      h = e('../parser/jsonParser'),
      m = e('vscode-nls').loadMessageBundle(),
      r = (function() {
        function e(e) {
          try {
            this.patternRegExp = new RegExp(p.convertSimple2RegExpPattern(e) + '$');
          } catch (e) {
            this.patternRegExp = null;
          }
          this.schemas = [];
        }
        return (
          (e.prototype.addSchema = function(e) {
            this.schemas.push(e);
          }),
          (e.prototype.matchesPattern = function(e) {
            return this.patternRegExp && this.patternRegExp.test(e);
          }),
          (e.prototype.getSchemas = function() {
            return this.schemas;
          }),
          e
        );
      })(),
      o = (function() {
        function e(e, t, r) {
          (this.service = e),
            (this.url = t),
            (this.dependencies = {}),
            r && (this.unresolvedSchema = this.service.promise.resolve(new s(r)));
        }
        return (
          (e.prototype.getUnresolvedSchema = function() {
            return (
              this.unresolvedSchema || (this.unresolvedSchema = this.service.loadSchema(this.url)),
              this.unresolvedSchema
            );
          }),
          (e.prototype.getResolvedSchema = function() {
            var t = this;
            return (
              this.resolvedSchema ||
                (this.resolvedSchema = this.getUnresolvedSchema().then(function(e) {
                  return t.service.resolveSchemaContent(e, t.url, t.dependencies);
                })),
              this.resolvedSchema
            );
          }),
          (e.prototype.clearSchema = function() {
            (this.resolvedSchema = null), (this.unresolvedSchema = null), (this.dependencies = {});
          }),
          e
        );
      })(),
      s = function(e, t) {
        void 0 === t && (t = []), (this.schema = e), (this.errors = t);
      };
    t.UnresolvedSchema = s;
    var i = (function() {
      function e(e, t) {
        void 0 === t && (t = []), (this.schema = e), (this.errors = t);
      }
      return (
        (e.prototype.getSection = function(e) {
          return h.asSchema(this.getSectionRecursive(e, this.schema));
        }),
        (e.prototype.getSectionRecursive = function(e, t) {
          if (!t || 'boolean' == typeof t || 0 === e.length) return t;
          var r = e.shift();
          if (t.properties && (t.properties[r], 1))
            return this.getSectionRecursive(e, t.properties[r]);
          if (t.patternProperties)
            for (var n = 0, o = Object.keys(t.patternProperties); n < o.length; n++) {
              var i = o[n];
              if (new RegExp(i).test(r)) return this.getSectionRecursive(e, t.patternProperties[i]);
            }
          else {
            if ('object' == typeof t.additionalProperties)
              return this.getSectionRecursive(e, t.additionalProperties);
            if (r.match('[0-9]+'))
              if (Array.isArray(t.items)) {
                var a = parseInt(r, 10);
                if (!isNaN(a) && t.items[a]) return this.getSectionRecursive(e, t.items[a]);
              } else if (t.items) return this.getSectionRecursive(e, t.items);
          }
          return null;
        }),
        e
      );
    })();
    t.ResolvedSchema = i;
    var c = (function() {
      function e(e, t, r) {
        (this.contextService = t),
          (this.requestService = e),
          (this.promiseConstructor = r || Promise),
          (this.callOnDispose = []),
          (this.contributionSchemas = {}),
          (this.contributionAssociations = {}),
          (this.schemasById = {}),
          (this.filePatternAssociations = []),
          (this.filePatternAssociationById = {}),
          (this.registeredSchemasIds = {});
      }
      return (
        (e.prototype.getRegisteredSchemaIds = function(r) {
          return Object.keys(this.registeredSchemasIds).filter(function(e) {
            var t = n.default.parse(e).scheme;
            return 'schemaservice' !== t && (!r || r(t));
          });
        }),
        Object.defineProperty(e.prototype, 'promise', {
          get: function() {
            return this.promiseConstructor;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.dispose = function() {
          for (; 0 < this.callOnDispose.length; ) this.callOnDispose.pop()();
        }),
        (e.prototype.onResourceChange = function(e) {
          for (
            var t = this,
              r = !1,
              n = [(e = this.normalizeId(e))],
              o = Object.keys(this.schemasById).map(function(e) {
                return t.schemasById[e];
              });
            n.length;

          )
            for (var i = n.pop(), a = 0; a < o.length; a++) {
              var s = o[a];
              s &&
                (s.url === i || s.dependencies[i]) &&
                (s.url !== i && n.push(s.url), s.clearSchema(), (r = !(o[a] = void 0)));
            }
          return r;
        }),
        (e.prototype.normalizeId = function(e) {
          return n.default.parse(e).toString();
        }),
        (e.prototype.setSchemaContributions = function(e) {
          if (e.schemas) {
            var t = e.schemas;
            for (var r in t) {
              var n = this.normalizeId(r);
              this.contributionSchemas[n] = this.addSchemaHandle(n, t[r]);
            }
          }
          if (e.schemaAssociations) {
            var o = e.schemaAssociations;
            for (var i in o) {
              var a = o[i];
              this.contributionAssociations[i] = a;
              for (
                var s = this.getOrAddFilePatternAssociation(i), c = 0, u = a;
                c < u.length;
                c++
              ) {
                var f = u[c];
                r = this.normalizeId(f);
                s.addSchema(r);
              }
            }
          }
        }),
        (e.prototype.addSchemaHandle = function(e, t) {
          var r = new o(this, e, t);
          return (this.schemasById[e] = r);
        }),
        (e.prototype.getOrAddSchemaHandle = function(e, t) {
          return this.schemasById[e] || this.addSchemaHandle(e, t);
        }),
        (e.prototype.getOrAddFilePatternAssociation = function(e) {
          var t = this.filePatternAssociationById[e];
          return (
            t ||
              ((t = new r(e)),
              (this.filePatternAssociationById[e] = t),
              this.filePatternAssociations.push(t)),
            t
          );
        }),
        (e.prototype.registerExternalSchema = function(e, t, r) {
          void 0 === t && (t = null);
          var n = this.normalizeId(e);
          if (((this.registeredSchemasIds[n] = !0), t))
            for (var o = 0, i = t; o < i.length; o++) {
              var a = i[o];
              this.getOrAddFilePatternAssociation(a).addSchema(n);
            }
          return r ? this.addSchemaHandle(n, r) : this.getOrAddSchemaHandle(n);
        }),
        (e.prototype.clearExternalSchemas = function() {
          for (var e in ((this.schemasById = {}),
          (this.filePatternAssociations = []),
          (this.filePatternAssociationById = {}),
          (this.registeredSchemasIds = {}),
          this.contributionSchemas))
            (this.schemasById[e] = this.contributionSchemas[e]),
              (this.registeredSchemasIds[e] = !0);
          for (var t in this.contributionAssociations)
            for (
              var r = this.getOrAddFilePatternAssociation(t),
                n = 0,
                o = this.contributionAssociations[t];
              n < o.length;
              n++
            ) {
              var i = o[n];
              e = this.normalizeId(i);
              r.addSchema(e);
            }
        }),
        (e.prototype.getResolvedSchema = function(e) {
          var t = this.normalizeId(e),
            r = this.schemasById[t];
          return r ? r.getResolvedSchema() : this.promise.resolve(null);
        }),
        (e.prototype.loadSchema = function(i) {
          if (this.requestService)
            return this.requestService(i).then(
              function(e) {
                if (!e) {
                  var t = m(
                    'json.schema.nocontent',
                    "Unable to load schema from '{0}': No content.",
                    u(i)
                  );
                  return new s({}, [t]);
                }
                var r,
                  n = [];
                r = a.parse(e, n);
                var o = n.length
                  ? [
                      m(
                        'json.schema.invalidFormat',
                        "Unable to parse content from '{0}': Parse error at offset {1}.",
                        u(i),
                        n[0].offset
                      ),
                    ]
                  : [];
                return new s(r, o);
              },
              function(e) {
                var t = e.toString(),
                  r = e.toString().split('Error: ');
                return 1 < r.length && (t = r[1]), new s({}, [t]);
              }
            );
          var e = m(
            'json.schema.norequestservice',
            "Unable to load schema from '{0}'. No schema request service available",
            u(i)
          );
          return this.promise.resolve(new s({}, [e]));
        }),
        (e.prototype.resolveSchemaContent = function(e, t, r) {
          var u = this,
            s = e.errors.slice(0),
            n = e.schema,
            c = this.contextService,
            f = function(e, t, r, n) {
              var o = (function(e, t) {
                if (!t) return e;
                var r = e;
                return (
                  '/' === t[0] && (t = t.substr(1)),
                  t.split('/').some(function(e) {
                    return !(r = r[e]);
                  }),
                  r
                );
              })(t, n);
              if (o) for (var i in o) o.hasOwnProperty(i) && !e.hasOwnProperty(i) && (e[i] = o[i]);
              else
                s.push(
                  m('json.schema.invalidref', "$ref '{0}' in '{1}' can not be resolved.", n, r)
                );
            },
            l = function(r, n, o, e, i) {
              c && !/^\w+:\/\/.*/.test(n) && (n = c.resolveRelativePath(n, e)),
                (n = u.normalizeId(n));
              var a = u.getOrAddSchemaHandle(n);
              return a.getUnresolvedSchema().then(function(e) {
                if (((i[n] = !0), e.errors.length)) {
                  var t = o ? n + '#' + o : n;
                  s.push(
                    m(
                      'json.schema.problemloadingref',
                      "Problems loading reference '{0}': {1}",
                      t,
                      e.errors[0]
                    )
                  );
                }
                return f(r, e.schema, n, o), d(r, e.schema, n, a.dependencies);
              });
            },
            d = function(e, o, i, a) {
              if (!e || 'object' != typeof e) return Promise.resolve(null);
              for (
                var c = [e],
                  t = [],
                  s = [],
                  r = function(e) {
                    for (var t = []; e.$ref; ) {
                      var r = e.$ref,
                        n = r.split('#', 2);
                      if ((delete e.$ref, 0 < n[0].length))
                        return void s.push(l(e, n[0], n[1], i, a));
                      -1 === t.indexOf(r) && (f(e, o, i, n[1]), t.push(r));
                    }
                    !(function() {
                      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                      for (var r = 0, n = e; r < n.length; r++) {
                        var o = n[r];
                        'object' == typeof o && c.push(o);
                      }
                    })(
                      e.items,
                      e.additionalProperties,
                      e.not,
                      e.contains,
                      e.propertyNames,
                      e.if,
                      e.then,
                      e.else
                    ),
                      (function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        for (var r = 0, n = e; r < n.length; r++) {
                          var o = n[r];
                          if ('object' == typeof o)
                            for (var i in o) {
                              var a = o[i];
                              'object' == typeof a && c.push(a);
                            }
                        }
                      })(e.definitions, e.properties, e.patternProperties, e.dependencies),
                      (function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        for (var r = 0, n = e; r < n.length; r++) {
                          var o = n[r];
                          if (Array.isArray(o))
                            for (var i = 0, a = o; i < a.length; i++) {
                              var s = a[i];
                              'object' == typeof s && c.push(s);
                            }
                        }
                      })(e.anyOf, e.allOf, e.oneOf, e.items);
                  };
                c.length;

              ) {
                var n = c.pop();
                0 <= t.indexOf(n) || (t.push(n), r(n));
              }
              return u.promise.all(s);
            };
          return d(n, n, t, r).then(function(e) {
            return new i(n, s);
          });
        }),
        (e.prototype.getSchemaForResource = function(e, t) {
          if (t && t.root && 'object' === t.root.type) {
            var r = t.root.properties.filter(function(e) {
              return '$schema' === e.keyNode.value && e.valueNode && 'string' === e.valueNode.type;
            });
            if (0 < r.length) {
              var n = h.getNodeValue(r[0].valueNode);
              if (
                (n &&
                  p.startsWith(n, '.') &&
                  this.contextService &&
                  (n = this.contextService.resolveRelativePath(n, e)),
                n)
              ) {
                var o = this.normalizeId(n);
                return this.getOrAddSchemaHandle(o).getResolvedSchema();
              }
            }
          }
          for (
            var i = Object.create(null), a = [], s = 0, c = this.filePatternAssociations;
            s < c.length;
            s++
          ) {
            var u = c[s];
            if (u.matchesPattern(e))
              for (var f = 0, l = u.getSchemas(); f < l.length; f++) {
                var d = l[f];
                i[d] || (a.push(d), (i[d] = !0));
              }
          }
          return 0 < a.length
            ? this.createCombinedSchema(e, a).getResolvedSchema()
            : this.promise.resolve(null);
        }),
        (e.prototype.createCombinedSchema = function(e, t) {
          if (1 === t.length) return this.getOrAddSchemaHandle(t[0]);
          var r = 'schemaservice://combinedSchema/' + encodeURIComponent(e),
            n = {
              allOf: t.map(function(e) {
                return { $ref: e };
              }),
            };
          return this.addSchemaHandle(r, n);
        }),
        e
      );
    })();
    function u(e) {
      try {
        var t = n.default.parse(e);
        if ('file' === t.scheme) return t.fsPath;
      } catch (e) {}
      return e;
    }
    t.JSONSchemaService = c;
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/services/jsonValidation', [
          'require',
          'exports',
          './jsonSchemaService',
          'vscode-languageserver-types',
          '../jsonLanguageTypes',
          'vscode-nls',
        ], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = e('./jsonSchemaService'),
      y = e('vscode-languageserver-types'),
      b = e('../jsonLanguageTypes'),
      x = e('vscode-nls').loadMessageBundle(),
      r = (function() {
        function e(e, t) {
          (this.jsonSchemaService = e), (this.promise = t), (this.validationEnabled = !0);
        }
        return (
          (e.prototype.configure = function(e) {
            e &&
              ((this.validationEnabled = e.validate),
              (this.commentSeverity = e.allowComments ? void 0 : y.DiagnosticSeverity.Error));
          }),
          (e.prototype.doValidation = function(d, p, h, e) {
            var m = this;
            if (!this.validationEnabled) return this.promise.resolve([]);
            var g = [],
              r = {},
              v = function(e) {
                var t = e.range.start.line + ' ' + e.range.start.character + ' ' + e.message;
                r[t] || ((r[t] = !0), g.push(e));
              },
              t = function(e) {
                var t = h ? C(h.trailingCommas) : y.DiagnosticSeverity.Error,
                  r = h ? C(h.comments) : m.commentSeverity;
                if (e) {
                  if (e.errors.length && p.root) {
                    var n = p.root,
                      o = 'object' === n.type ? n.properties[0] : null;
                    if (o && '$schema' === o.keyNode.value) {
                      var i = o.valueNode || o,
                        a = y.Range.create(
                          d.positionAt(i.offset),
                          d.positionAt(i.offset + i.length)
                        );
                      v(
                        y.Diagnostic.create(
                          a,
                          e.errors[0],
                          y.DiagnosticSeverity.Warning,
                          b.ErrorCode.SchemaResolveError
                        )
                      );
                    } else {
                      a = y.Range.create(d.positionAt(n.offset), d.positionAt(n.offset + 1));
                      v(
                        y.Diagnostic.create(
                          a,
                          e.errors[0],
                          y.DiagnosticSeverity.Warning,
                          b.ErrorCode.SchemaResolveError
                        )
                      );
                    }
                  } else {
                    var s = p.validate(d, e.schema);
                    s && s.forEach(v);
                  }
                  S(e.schema) && (t = r = void 0);
                }
                for (var c = 0, u = p.syntaxErrors; c < u.length; c++) {
                  var f = u[c];
                  if (f.code === b.ErrorCode.TrailingComma) {
                    if ('number' != typeof t) continue;
                    f.severity = t;
                  }
                  v(f);
                }
                if ('number' == typeof r) {
                  var l = x('InvalidCommentToken', 'Comments are not permitted in JSON.');
                  p.comments.forEach(function(e) {
                    v(y.Diagnostic.create(e, l, r, b.ErrorCode.CommentNotPermitted));
                  });
                }
                return g;
              };
            if (e) {
              var n = e.id || 'schemaservice://untitled/' + i++;
              return this.jsonSchemaService
                .resolveSchemaContent(new o.UnresolvedSchema(e), n, {})
                .then(function(e) {
                  return t(e);
                });
            }
            return this.jsonSchemaService.getSchemaForResource(d.uri, p).then(function(e) {
              return t(e);
            });
          }),
          e
        );
      })();
    t.JSONValidation = r;
    var i = 0;
    function S(e) {
      if (e && 'object' == typeof e) {
        if (e.allowComments) return !0;
        if (e.allOf) return e.allOf.some(S);
      }
      return !1;
    }
    function C(e) {
      switch (e) {
        case 'error':
          return y.DiagnosticSeverity.Error;
        case 'warning':
          return y.DiagnosticSeverity.Warning;
        case 'ignore':
          return;
      }
    }
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/utils/colors', ['require', 'exports'], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = 48,
      n = 57,
      o = 65,
      i = 97,
      a = 102;
    function s(e) {
      return e < r
        ? 0
        : e <= n
        ? e - r
        : (e < i && (e += i - o), i <= e && e <= a ? e - i + 10 : 0);
    }
    (t.hexDigit = s),
      (t.colorFromHex = function(e) {
        if ('#' !== e[0]) return null;
        switch (e.length) {
          case 4:
            return {
              red: (17 * s(e.charCodeAt(1))) / 255,
              green: (17 * s(e.charCodeAt(2))) / 255,
              blue: (17 * s(e.charCodeAt(3))) / 255,
              alpha: 1,
            };
          case 5:
            return {
              red: (17 * s(e.charCodeAt(1))) / 255,
              green: (17 * s(e.charCodeAt(2))) / 255,
              blue: (17 * s(e.charCodeAt(3))) / 255,
              alpha: (17 * s(e.charCodeAt(4))) / 255,
            };
          case 7:
            return {
              red: (16 * s(e.charCodeAt(1)) + s(e.charCodeAt(2))) / 255,
              green: (16 * s(e.charCodeAt(3)) + s(e.charCodeAt(4))) / 255,
              blue: (16 * s(e.charCodeAt(5)) + s(e.charCodeAt(6))) / 255,
              alpha: 1,
            };
          case 9:
            return {
              red: (16 * s(e.charCodeAt(1)) + s(e.charCodeAt(2))) / 255,
              green: (16 * s(e.charCodeAt(3)) + s(e.charCodeAt(4))) / 255,
              blue: (16 * s(e.charCodeAt(5)) + s(e.charCodeAt(6))) / 255,
              alpha: (16 * s(e.charCodeAt(7)) + s(e.charCodeAt(8))) / 255,
            };
        }
        return null;
      }),
      (t.colorFrom256RGB = function(e, t, r, n) {
        return void 0 === n && (n = 1), { red: e / 255, green: t / 255, blue: r / 255, alpha: n };
      });
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/services/jsonDocumentSymbols', [
          'require',
          'exports',
          '../parser/jsonParser',
          '../utils/strings',
          '../utils/colors',
          'vscode-languageserver-types',
        ], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = e('../parser/jsonParser'),
      n = e('../utils/strings'),
      d = e('../utils/colors'),
      f = e('vscode-languageserver-types'),
      r = (function() {
        function e(e) {
          this.schemaService = e;
        }
        return (
          (e.prototype.findDocumentSymbols = function(a, e) {
            var s = this,
              t = e.root;
            if (!t) return null;
            var r = a.uri;
            if (
              ('vscode://defaultsettings/keybindings.json' === r ||
                n.endsWith(r.toLowerCase(), '/user/keybindings.json')) &&
              'array' === t.type
            ) {
              var i = [];
              return (
                t.items.forEach(function(e) {
                  if ('object' === e.type)
                    for (var t = 0, r = e.properties; t < r.length; t++) {
                      var n = r[t];
                      if ('key' === n.keyNode.value && n.valueNode) {
                        if (n.valueNode) {
                          var o = f.Location.create(a.uri, p(a, e));
                          i.push({
                            name: l.getNodeValue(n.valueNode),
                            kind: f.SymbolKind.Function,
                            location: o,
                          });
                        }
                        return;
                      }
                    }
                }),
                i
              );
            }
            var c = function(o, e, i) {
              return (
                'array' === e.type
                  ? e.items.forEach(function(e) {
                      return c(o, e, i);
                    })
                  : 'object' === e.type &&
                    e.properties.forEach(function(e) {
                      var t = f.Location.create(a.uri, p(a, e)),
                        r = e.valueNode;
                      if (r) {
                        var n = i ? i + '.' + e.keyNode.value : e.keyNode.value;
                        o.push({
                          name: s.getKeyLabel(e),
                          kind: s.getSymbolKind(r.type),
                          location: t,
                          containerName: i,
                        }),
                          c(o, r, n);
                      }
                    }),
                o
              );
            };
            return c([], t, void 0);
          }),
          (e.prototype.findDocumentSymbols2 = function(s, e) {
            var c = this,
              t = e.root;
            if (!t) return null;
            var r = s.uri;
            if (
              ('vscode://defaultsettings/keybindings.json' === r ||
                n.endsWith(r.toLowerCase(), '/user/keybindings.json')) &&
              'array' === t.type
            ) {
              var a = [];
              return (
                t.items.forEach(function(e) {
                  if ('object' === e.type)
                    for (var t = 0, r = e.properties; t < r.length; t++) {
                      var n = r[t];
                      if ('key' === n.keyNode.value) {
                        if (n.valueNode) {
                          var o = p(s, e),
                            i = p(s, n.keyNode);
                          a.push({
                            name: l.getNodeValue(n.valueNode),
                            kind: f.SymbolKind.Function,
                            range: o,
                            selectionRange: i,
                          });
                        }
                        return;
                      }
                    }
                }),
                a
              );
            }
            var u = function(a, e) {
              return (
                'array' === e.type
                  ? e.items.forEach(function(e, t) {
                      if (e) {
                        var r = p(s, e),
                          n = r,
                          o = String(t),
                          i = u([], e);
                        a.push({
                          name: o,
                          kind: c.getSymbolKind(e.type),
                          range: r,
                          selectionRange: n,
                          children: i,
                        });
                      }
                    })
                  : 'object' === e.type &&
                    e.properties.forEach(function(e) {
                      var t = e.valueNode;
                      if (t) {
                        var r = p(s, e),
                          n = p(s, e.keyNode),
                          o = u([], t);
                        a.push({
                          name: c.getKeyLabel(e),
                          kind: c.getSymbolKind(t.type),
                          range: r,
                          selectionRange: n,
                          children: o,
                        });
                      }
                    }),
                a
              );
            };
            return u([], t);
          }),
          (e.prototype.getSymbolKind = function(e) {
            switch (e) {
              case 'object':
                return f.SymbolKind.Module;
              case 'string':
                return f.SymbolKind.String;
              case 'number':
                return f.SymbolKind.Number;
              case 'array':
                return f.SymbolKind.Array;
              case 'boolean':
                return f.SymbolKind.Boolean;
              default:
                return f.SymbolKind.Variable;
            }
          }),
          (e.prototype.getKeyLabel = function(e) {
            var t = e.keyNode.value;
            return t && (t = t.replace(/[\n]/g, '↵')), t && t.trim() ? t : '"' + t + '"';
          }),
          (e.prototype.findDocumentColors = function(u, f) {
            return this.schemaService.getSchemaForResource(u.uri, f).then(function(e) {
              var t = [];
              if (e)
                for (var r = {}, n = 0, o = f.getMatchingSchemas(e.schema); n < o.length; n++) {
                  var i = o[n];
                  if (
                    !i.inverted &&
                    i.schema &&
                    ('color' === i.schema.format || 'color-hex' === i.schema.format) &&
                    i.node &&
                    'string' === i.node.type
                  ) {
                    var a = String(i.node.offset);
                    if (!r[a]) {
                      var s = d.colorFromHex(l.getNodeValue(i.node));
                      if (s) {
                        var c = p(u, i.node);
                        t.push({ color: s, range: c });
                      }
                      r[a] = !0;
                    }
                  }
                }
              return t;
            });
          }),
          (e.prototype.getColorPresentations = function(e, t, r, n) {
            var o,
              i = [],
              a = Math.round(255 * r.red),
              s = Math.round(255 * r.green),
              c = Math.round(255 * r.blue);
            function u(e) {
              var t = e.toString(16);
              return 2 !== t.length ? '0' + t : t;
            }
            return (
              (o =
                1 === r.alpha
                  ? '#' + u(a) + u(s) + u(c)
                  : '#' + u(a) + u(s) + u(c) + u(Math.round(255 * r.alpha))),
              i.push({ label: o, textEdit: f.TextEdit.replace(n, JSON.stringify(o)) }),
              i
            );
          }),
          e
        );
      })();
    function p(e, t) {
      return f.Range.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length));
    }
    t.JSONDocumentSymbols = r;
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/services/configuration', [
          'require',
          'exports',
          'vscode-nls',
        ], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = e('vscode-nls').loadMessageBundle();
    t.schemaContributions = {
      schemaAssociations: {},
      schemas: {
        'http://json-schema.org/draft-04/schema#': {
          title: r(
            'schema.json',
            'Describes a JSON file using a schema. See json-schema.org for more info.'
          ),
          $schema: 'http://json-schema.org/draft-04/schema#',
          definitions: {
            schemaArray: { type: 'array', minItems: 1, items: { $ref: '#' } },
            positiveInteger: { type: 'integer', minimum: 0 },
            positiveIntegerDefault0: {
              allOf: [{ $ref: '#/definitions/positiveInteger' }, { default: 0 }],
            },
            simpleTypes: {
              type: 'string',
              enum: ['array', 'boolean', 'integer', 'null', 'number', 'object', 'string'],
            },
            stringArray: { type: 'array', items: { type: 'string' }, minItems: 1, uniqueItems: !0 },
          },
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uri' },
            $schema: { type: 'string', format: 'uri' },
            title: { type: 'string' },
            description: { type: 'string' },
            default: {},
            multipleOf: { type: 'number', minimum: 0, exclusiveMinimum: !0 },
            maximum: { type: 'number' },
            exclusiveMaximum: { type: 'boolean', default: !1 },
            minimum: { type: 'number' },
            exclusiveMinimum: { type: 'boolean', default: !1 },
            maxLength: { allOf: [{ $ref: '#/definitions/positiveInteger' }] },
            minLength: { allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }] },
            pattern: { type: 'string', format: 'regex' },
            additionalItems: { anyOf: [{ type: 'boolean' }, { $ref: '#' }], default: {} },
            items: { anyOf: [{ $ref: '#' }, { $ref: '#/definitions/schemaArray' }], default: {} },
            maxItems: { allOf: [{ $ref: '#/definitions/positiveInteger' }] },
            minItems: { allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }] },
            uniqueItems: { type: 'boolean', default: !1 },
            maxProperties: { allOf: [{ $ref: '#/definitions/positiveInteger' }] },
            minProperties: { allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }] },
            required: { allOf: [{ $ref: '#/definitions/stringArray' }] },
            additionalProperties: { anyOf: [{ type: 'boolean' }, { $ref: '#' }], default: {} },
            definitions: { type: 'object', additionalProperties: { $ref: '#' }, default: {} },
            properties: { type: 'object', additionalProperties: { $ref: '#' }, default: {} },
            patternProperties: { type: 'object', additionalProperties: { $ref: '#' }, default: {} },
            dependencies: {
              type: 'object',
              additionalProperties: {
                anyOf: [{ $ref: '#' }, { $ref: '#/definitions/stringArray' }],
              },
            },
            enum: { type: 'array', minItems: 1, uniqueItems: !0 },
            type: {
              anyOf: [
                { $ref: '#/definitions/simpleTypes' },
                {
                  type: 'array',
                  items: { $ref: '#/definitions/simpleTypes' },
                  minItems: 1,
                  uniqueItems: !0,
                },
              ],
            },
            format: {
              anyOf: [
                {
                  type: 'string',
                  enum: ['date-time', 'uri', 'email', 'hostname', 'ipv4', 'ipv6', 'regex'],
                },
                { type: 'string' },
              ],
            },
            allOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
            anyOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
            oneOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
            not: { allOf: [{ $ref: '#' }] },
          },
          dependencies: { exclusiveMaximum: ['maximum'], exclusiveMinimum: ['minimum'] },
          default: {},
        },
        'http://json-schema.org/draft-07/schema#': {
          title: r(
            'schema.json',
            'Describes a JSON file using a schema. See json-schema.org for more info.'
          ),
          definitions: {
            schemaArray: { type: 'array', minItems: 1, items: { $ref: '#' } },
            nonNegativeInteger: { type: 'integer', minimum: 0 },
            nonNegativeIntegerDefault0: {
              allOf: [{ $ref: '#/definitions/nonNegativeInteger' }, { default: 0 }],
            },
            simpleTypes: {
              enum: ['array', 'boolean', 'integer', 'null', 'number', 'object', 'string'],
            },
            stringArray: { type: 'array', items: { type: 'string' }, uniqueItems: !0, default: [] },
          },
          type: ['object', 'boolean'],
          properties: {
            $id: { type: 'string', format: 'uri-reference' },
            $schema: { type: 'string', format: 'uri' },
            $ref: { type: 'string', format: 'uri-reference' },
            $comment: { type: 'string' },
            title: { type: 'string' },
            description: { type: 'string' },
            default: !0,
            readOnly: { type: 'boolean', default: !1 },
            examples: { type: 'array', items: !0 },
            multipleOf: { type: 'number', exclusiveMinimum: 0 },
            maximum: { type: 'number' },
            exclusiveMaximum: { type: 'number' },
            minimum: { type: 'number' },
            exclusiveMinimum: { type: 'number' },
            maxLength: { $ref: '#/definitions/nonNegativeInteger' },
            minLength: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
            pattern: { type: 'string', format: 'regex' },
            additionalItems: { $ref: '#' },
            items: { anyOf: [{ $ref: '#' }, { $ref: '#/definitions/schemaArray' }], default: !0 },
            maxItems: { $ref: '#/definitions/nonNegativeInteger' },
            minItems: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
            uniqueItems: { type: 'boolean', default: !1 },
            contains: { $ref: '#' },
            maxProperties: { $ref: '#/definitions/nonNegativeInteger' },
            minProperties: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
            required: { $ref: '#/definitions/stringArray' },
            additionalProperties: { $ref: '#' },
            definitions: { type: 'object', additionalProperties: { $ref: '#' }, default: {} },
            properties: { type: 'object', additionalProperties: { $ref: '#' }, default: {} },
            patternProperties: {
              type: 'object',
              additionalProperties: { $ref: '#' },
              propertyNames: { format: 'regex' },
              default: {},
            },
            dependencies: {
              type: 'object',
              additionalProperties: {
                anyOf: [{ $ref: '#' }, { $ref: '#/definitions/stringArray' }],
              },
            },
            propertyNames: { $ref: '#' },
            const: !0,
            enum: { type: 'array', items: !0, minItems: 1, uniqueItems: !0 },
            type: {
              anyOf: [
                { $ref: '#/definitions/simpleTypes' },
                {
                  type: 'array',
                  items: { $ref: '#/definitions/simpleTypes' },
                  minItems: 1,
                  uniqueItems: !0,
                },
              ],
            },
            format: { type: 'string' },
            contentMediaType: { type: 'string' },
            contentEncoding: { type: 'string' },
            if: { $ref: '#' },
            then: { $ref: '#' },
            else: { $ref: '#' },
            allOf: { $ref: '#/definitions/schemaArray' },
            anyOf: { $ref: '#/definitions/schemaArray' },
            oneOf: { $ref: '#/definitions/schemaArray' },
            not: { $ref: '#' },
          },
          default: !0,
        },
      },
    };
    var n = {
      id: r('schema.json.id', 'A unique identifier for the schema.'),
      $schema: r('schema.json.$schema', 'The schema to verify this document against.'),
      title: r('schema.json.title', 'A descriptive title of the element.'),
      description: r(
        'schema.json.description',
        'A long description of the element. Used in hover menus and suggestions.'
      ),
      default: r('schema.json.default', 'A default value. Used by suggestions.'),
      multipleOf: r(
        'schema.json.multipleOf',
        'A number that should cleanly divide the current value (i.e. have no remainder).'
      ),
      maximum: r('schema.json.maximum', 'The maximum numerical value, inclusive by default.'),
      exclusiveMaximum: r('schema.json.exclusiveMaximum', 'Makes the maximum property exclusive.'),
      minimum: r('schema.json.minimum', 'The minimum numerical value, inclusive by default.'),
      exclusiveMinimum: r('schema.json.exclusiveMininum', 'Makes the minimum property exclusive.'),
      maxLength: r('schema.json.maxLength', 'The maximum length of a string.'),
      minLength: r('schema.json.minLength', 'The minimum length of a string.'),
      pattern: r(
        'schema.json.pattern',
        'A regular expression to match the string against. It is not implicitly anchored.'
      ),
      additionalItems: r(
        'schema.json.additionalItems',
        'For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.'
      ),
      items: r(
        'schema.json.items',
        'For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.'
      ),
      maxItems: r(
        'schema.json.maxItems',
        'The maximum number of items that can be inside an array. Inclusive.'
      ),
      minItems: r(
        'schema.json.minItems',
        'The minimum number of items that can be inside an array. Inclusive.'
      ),
      uniqueItems: r(
        'schema.json.uniqueItems',
        'If all of the items in the array must be unique. Defaults to false.'
      ),
      maxProperties: r(
        'schema.json.maxProperties',
        'The maximum number of properties an object can have. Inclusive.'
      ),
      minProperties: r(
        'schema.json.minProperties',
        'The minimum number of properties an object can have. Inclusive.'
      ),
      required: r(
        'schema.json.required',
        'An array of strings that lists the names of all properties required on this object.'
      ),
      additionalProperties: r(
        'schema.json.additionalProperties',
        "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."
      ),
      definitions: r(
        'schema.json.definitions',
        'Not used for validation. Place subschemas here that you wish to reference inline with $ref.'
      ),
      properties: r(
        'schema.json.properties',
        'A map of property names to schemas for each property.'
      ),
      patternProperties: r(
        'schema.json.patternProperties',
        'A map of regular expressions on property names to schemas for matching properties.'
      ),
      dependencies: r(
        'schema.json.dependencies',
        'A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.'
      ),
      enum: r('schema.json.enum', 'The set of literal values that are valid.'),
      type: r(
        'schema.json.type',
        'Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.'
      ),
      format: r('schema.json.format', 'Describes the format expected for the value.'),
      allOf: r('schema.json.allOf', 'An array of schemas, all of which must match.'),
      anyOf: r('schema.json.anyOf', 'An array of schemas, where at least one must match.'),
      oneOf: r('schema.json.oneOf', 'An array of schemas, exactly one of which must match.'),
      not: r('schema.json.not', 'A schema which must not match.'),
      $id: r('schema.json.$id', 'A unique identifier for the schema.'),
      $ref: r('schema.json.$ref', 'Reference a definition hosted on any location.'),
      $comment: r(
        'schema.json.$comment',
        'Comments from schema authors to readers or maintainers of the schema.'
      ),
      readOnly: r(
        'schema.json.readOnly',
        'Indicates that the value of the instance is managed exclusively by the owning authority.'
      ),
      examples: r(
        'schema.json.examples',
        'Sample JSON values associated with a particular schema, for the purpose of illustrating usage.'
      ),
      contains: r(
        'schema.json.contains',
        'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'
      ),
      propertyNames: r(
        'schema.json.propertyNames',
        'If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema.'
      ),
      const: r(
        'schema.json.const',
        'An instance validates successfully against this keyword if its value is equal to the value of the keyword.'
      ),
      contentMediaType: r(
        'schema.json.contentMediaType',
        'Describes the media type of a string property.'
      ),
      contentEncoding: r(
        'schema.json.contentEncoding',
        'Describes the content encoding of a string property.'
      ),
      if: r(
        'schema.json.if',
        'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'
      ),
      then: r(
        'schema.json.then',
        'The "if" subschema is used for validation when the "if" subschema succeeds.'
      ),
      else: r(
        'schema.json.else',
        'The "else" subschema is used for validation when the "if" subschema fails.'
      ),
    };
    for (var o in t.schemaContributions.schemas) {
      var i = t.schemaContributions.schemas[o];
      for (var a in i.properties) {
        var s = i.properties[a];
        !0 === s && (s = i.properties[a] = {});
        var c = n[a];
        c ? (s.description = c) : console.log(a + ": localize('schema.json." + a + '\', "")');
      }
    }
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/services/jsonFolding', [
          'require',
          'exports',
          'vscode-languageserver-types',
          'jsonc-parser',
          '../jsonLanguageTypes',
        ], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var T = e('vscode-languageserver-types'),
      O = e('jsonc-parser'),
      A = e('../jsonLanguageTypes');
    t.getFoldingRanges = function(e, t) {
      var r = [],
        n = [],
        o = [],
        i = -1,
        a = O.createScanner(e.getText(), !1),
        s = a.scan();
      function c(e) {
        r.push(e), n.push(o.length);
      }
      for (; 17 !== s; ) {
        switch (s) {
          case 1:
          case 3:
            var u = {
              startLine: (d = e.positionAt(a.getTokenOffset()).line),
              endLine: d,
              kind: 1 === s ? 'object' : 'array',
            };
            o.push(u);
            break;
          case 2:
          case 4:
            var f = 2 === s ? 'object' : 'array';
            if (0 < o.length && o[o.length - 1].kind === f) {
              u = o.pop();
              var l = e.positionAt(a.getTokenOffset()).line;
              u &&
                l > u.startLine + 1 &&
                i !== u.startLine &&
                ((u.endLine = l - 1), c(u), (i = u.startLine));
            }
            break;
          case 13:
            var d = e.positionAt(a.getTokenOffset()).line,
              p = e.positionAt(a.getTokenOffset() + a.getTokenLength()).line;
            1 === a.getTokenError() && d + 1 < e.lineCount
              ? a.setPosition(e.offsetAt(T.Position.create(d + 1, 0)))
              : d < p &&
                (c({ startLine: d, endLine: p, kind: A.FoldingRangeKind.Comment }), (i = d));
            break;
          case 12:
            var h = e
              .getText()
              .substr(a.getTokenOffset(), a.getTokenLength())
              .match(/^\/\/\s*#(region\b)|(endregion\b)/);
            if (h)
              if (((l = e.positionAt(a.getTokenOffset()).line), h[1]))
                (u = { startLine: l, endLine: l, kind: A.FoldingRangeKind.Region }), o.push(u);
              else {
                for (var m = o.length - 1; 0 <= m && o[m].kind !== A.FoldingRangeKind.Region; ) m--;
                0 <= m &&
                  ((u = o[m]),
                  (o.length = m),
                  l > u.startLine &&
                    i !== u.startLine &&
                    ((u.endLine = l), c(u), (i = u.startLine)));
              }
        }
        s = a.scan();
      }
      var g = t && t.rangeLimit;
      if ('number' != typeof g || r.length <= g) return r;
      for (var v = [], y = 0, b = n; y < b.length; y++) (k = b[y]) < 30 && (v[k] = (v[k] || 0) + 1);
      var x = 0,
        S = 0;
      for (m = 0; m < v.length; m++) {
        var C = v[m];
        if (C) {
          if (g < C + x) {
            S = m;
            break;
          }
          x += C;
        }
      }
      var j = [];
      for (m = 0; m < r.length; m++) {
        var k;
        'number' == typeof (k = n[m]) && (k < S || (k === S && x++ < g)) && j.push(r[m]);
      }
      return j;
    };
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/services/jsonSelectionRanges', [
          'require',
          'exports',
          'vscode-languageserver-types',
          'jsonc-parser',
          '../jsonLanguageTypes',
        ], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = e('vscode-languageserver-types'),
      n = e('jsonc-parser'),
      o = e('../jsonLanguageTypes');
    t.getSelectionRanges = function(u, e, f) {
      function l(e, t) {
        return {
          range: r.Range.create(u.positionAt(e), u.positionAt(t)),
          kind: o.SelectionRangeKind.Declaration,
        };
      }
      var d = n.createScanner(u.getText(), !0);
      return e.map(function(e) {
        var t,
          r,
          n = u.offsetAt(e),
          o = f.getNodeFromOffset(n, !0);
        if (!o) return [];
        for (var i = []; o; ) {
          switch (o.type) {
            case 'string':
            case 'object':
            case 'array':
              var a = o.offset + 1,
                s = o.offset + o.length - 1;
              a < s && a <= n && n <= s && i.push(l(a, s)),
                i.push(l(o.offset, o.offset + o.length));
              break;
            case 'number':
            case 'boolean':
            case 'null':
            case 'property':
              i.push(l(o.offset, o.offset + o.length));
          }
          if ('property' === o.type || (o.parent && 'array' === o.parent.type)) {
            var c = ((t = o.offset + o.length),
            (r = 5),
            d.setPosition(t),
            d.scan() === r ? d.getTokenOffset() + d.getTokenLength() : -1);
            -1 !== c && i.push(l(o.offset, c));
          }
          o = o.parent;
        }
        return i;
      });
    };
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-json-languageservice/jsonLanguageService', [
          'require',
          'exports',
          'vscode-languageserver-types',
          './services/jsonCompletion',
          './services/jsonHover',
          './services/jsonValidation',
          './services/jsonDocumentSymbols',
          './parser/jsonParser',
          './services/configuration',
          './services/jsonSchemaService',
          './services/jsonFolding',
          './services/jsonSelectionRanges',
          'jsonc-parser',
          './jsonLanguageTypes',
        ], e);
  })(function(e, r) {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var s = e('vscode-languageserver-types');
    (r.TextDocument = s.TextDocument),
      (r.Position = s.Position),
      (r.CompletionItem = s.CompletionItem),
      (r.CompletionList = s.CompletionList),
      (r.Hover = s.Hover),
      (r.Range = s.Range),
      (r.SymbolInformation = s.SymbolInformation),
      (r.Diagnostic = s.Diagnostic),
      (r.TextEdit = s.TextEdit),
      (r.FormattingOptions = s.FormattingOptions),
      (r.MarkedString = s.MarkedString);
    var c = e('./services/jsonCompletion'),
      u = e('./services/jsonHover'),
      f = e('./services/jsonValidation'),
      l = e('./services/jsonDocumentSymbols'),
      d = e('./parser/jsonParser'),
      p = e('./services/configuration'),
      h = e('./services/jsonSchemaService'),
      m = e('./services/jsonFolding'),
      g = e('./services/jsonSelectionRanges'),
      v = e('jsonc-parser');
    !(function(e) {
      for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t]);
    })(e('./jsonLanguageTypes')),
      (r.getLanguageService = function(e) {
        var t = e.promiseConstructor || Promise,
          r = new h.JSONSchemaService(e.schemaRequestService, e.workspaceContext, t);
        r.setSchemaContributions(p.schemaContributions);
        var n = new c.JSONCompletion(r, e.contributions, t, e.clientCapabilities),
          o = new u.JSONHover(r, e.contributions, t),
          i = new l.JSONDocumentSymbols(r),
          a = new f.JSONValidation(r, t);
        return {
          configure: function(e) {
            r.clearExternalSchemas(),
              e.schemas &&
                e.schemas.forEach(function(e) {
                  r.registerExternalSchema(e.uri, e.fileMatch, e.schema);
                }),
              a.configure(e);
          },
          resetSchema: function(e) {
            return r.onResourceChange(e);
          },
          doValidation: a.doValidation.bind(a),
          parseJSONDocument: function(e) {
            return d.parse(e, { collectComments: !0 });
          },
          newJSONDocument: function(e, t) {
            return d.newJSONDocument(e, t);
          },
          doResolve: n.doResolve.bind(n),
          doComplete: n.doComplete.bind(n),
          findDocumentSymbols: i.findDocumentSymbols.bind(i),
          findDocumentSymbols2: i.findDocumentSymbols2.bind(i),
          findColorSymbols: function(e, t) {
            return i.findDocumentColors(e, t).then(function(e) {
              return e.map(function(e) {
                return e.range;
              });
            });
          },
          findDocumentColors: i.findDocumentColors.bind(i),
          getColorPresentations: i.getColorPresentations.bind(i),
          doHover: o.doHover.bind(o),
          getFoldingRanges: m.getFoldingRanges,
          getSelectionRanges: g.getSelectionRanges,
          format: function(t, e, r) {
            var n = void 0;
            if (e) {
              var o = t.offsetAt(e.start);
              n = { offset: o, length: t.offsetAt(e.end) - o };
            }
            var i = { tabSize: r ? r.tabSize : 4, insertSpaces: !r || r.insertSpaces, eol: '\n' };
            return v.format(t.getText(), n, i).map(function(e) {
              return s.TextEdit.replace(
                s.Range.create(t.positionAt(e.offset), t.positionAt(e.offset + e.length)),
                e.content
              );
            });
          },
        };
      });
  }),
  define('vscode-json-languageservice', [
    'vscode-json-languageservice/jsonLanguageService',
  ], function(e) {
    return e;
  }),
  define('vs/language/json/jsonWorker', [
    'require',
    'exports',
    'vscode-json-languageservice',
    'vscode-languageserver-types',
  ], function(e, t, r, o) {
    'use strict';
    var n;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      'undefined' != typeof fetch &&
        (n = function(e) {
          return fetch(e).then(function(e) {
            return e.text();
          });
        });
    var i = (function() {
        function e(e) {
          this.wrapped = new Promise(e);
        }
        return (
          (e.prototype.then = function(e, t) {
            return this.wrapped.then(e, t);
          }),
          (e.prototype.getWrapped = function() {
            return this.wrapped;
          }),
          (e.resolve = function(e) {
            return Promise.resolve(e);
          }),
          (e.reject = function(e) {
            return Promise.reject(e);
          }),
          (e.all = function(e) {
            return Promise.all(e);
          }),
          e
        );
      })(),
      a = (function() {
        function e(e, t) {
          (this._ctx = e),
            (this._languageSettings = t.languageSettings),
            (this._languageId = t.languageId),
            (this._languageService = r.getLanguageService({
              schemaRequestService: t.enableSchemaRequest && n,
              promiseConstructor: i,
            })),
            this._languageService.configure(this._languageSettings);
        }
        return (
          (e.prototype.doValidation = function(e) {
            var t = this._getTextDocument(e);
            if (t) {
              var r = this._languageService.parseJSONDocument(t);
              return this._languageService.doValidation(t, r);
            }
            return Promise.resolve([]);
          }),
          (e.prototype.doComplete = function(e, t) {
            var r = this._getTextDocument(e),
              n = this._languageService.parseJSONDocument(r);
            return this._languageService.doComplete(r, t, n);
          }),
          (e.prototype.doResolve = function(e) {
            return this._languageService.doResolve(e);
          }),
          (e.prototype.doHover = function(e, t) {
            var r = this._getTextDocument(e),
              n = this._languageService.parseJSONDocument(r);
            return this._languageService.doHover(r, t, n);
          }),
          (e.prototype.format = function(e, t, r) {
            var n = this._getTextDocument(e),
              o = this._languageService.format(n, t, r);
            return Promise.resolve(o);
          }),
          (e.prototype.resetSchema = function(e) {
            return Promise.resolve(this._languageService.resetSchema(e));
          }),
          (e.prototype.findDocumentSymbols = function(e) {
            var t = this._getTextDocument(e),
              r = this._languageService.parseJSONDocument(t),
              n = this._languageService.findDocumentSymbols(t, r);
            return Promise.resolve(n);
          }),
          (e.prototype.findDocumentColors = function(e) {
            var t = this._getTextDocument(e),
              r = this._languageService.parseJSONDocument(t),
              n = this._languageService.findDocumentColors(t, r);
            return Promise.resolve(n);
          }),
          (e.prototype.getColorPresentations = function(e, t, r) {
            var n = this._getTextDocument(e),
              o = this._languageService.parseJSONDocument(n),
              i = this._languageService.getColorPresentations(n, o, t, r);
            return Promise.resolve(i);
          }),
          (e.prototype.provideFoldingRanges = function(e, t) {
            var r = this._getTextDocument(e),
              n = this._languageService.getFoldingRanges(r, t);
            return Promise.resolve(n);
          }),
          (e.prototype._getTextDocument = function(e) {
            for (var t = 0, r = this._ctx.getMirrorModels(); t < r.length; t++) {
              var n = r[t];
              if (n.uri.toString() === e)
                return o.TextDocument.create(e, this._languageId, n.version, n.getValue());
            }
            return null;
          }),
          e
        );
      })();
    (t.JSONWorker = a),
      (t.create = function(e, t) {
        return new a(e, t);
      });
  });
