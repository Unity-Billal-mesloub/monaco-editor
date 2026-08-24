# Monaco Editor Changelog

## [0.56.0]

### Breaking Changes

- Reorganizes the exported ESM modules to provide supported, tree-shakeable entry points ([#5155](https://github.com/Unity-Billal-mesloub/monaco-editor/pull/5155)). The `monaco-editor` entry point continues to load all features and languages. Custom bundles can now import `monaco-editor/editor` and opt into:
  - all editor features with `monaco-editor/features/register.all`, or individual features with `monaco-editor/features/<feature>/register`;
  - all language definitions with `monaco-editor/languages/definitions/register.all`, or individual definitions with `monaco-editor/languages/definitions/<language>/register`;
  - the CSS, HTML, JSON, and TypeScript language features with `monaco-editor/languages/features/register.all`, or their individual `register` entry points.
- Renames the misspelled `IOverlayWidgetPosition.stackOridinal` property to `stackOrdinal`.
- Removes the deprecated `IMirrorModel` and `IWorkerContext` worker API types.

### New Features and APIs

- Adds `editor.doubleClickSelectsBlock`.
- Adds `editor.find.closeOnResult` and `editor.inlayHints.showLongLineWarning`.
- Adds `offWhenInlineCompletions` to `QuickSuggestionsValue`.
- Adds model and provider option support to inline completion providers.
- Adds `ICodeEditor.revealAllCursors`, `ICodeEditor.getWidthOfLine`, and `ICodeEditor.renderAsync`.
- Adds `advanced-external` and `advanced-wasm` diff algorithms.
- Exposes typed native LSP client and transport APIs.

### Fixes

- Treats Markdown returned by language servers as untrusted ([issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)).
- Updates the editor core to the version used by `0.56.0-dev-20260625`.

## [0.55.1]

- Fixes missing language exports (monaco.json/typescript/...) due to wrong "types" path - [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)

## [0.55.0]

### Breaking Changes
- Moves nested namespaces (`languages.css`, `languages.html`, `languages.json`, `languages.typescript`) to top level namespaces (`css`, `html`, `json`, `typescript`) to simplify the build process and align with typescript recommendations.

### New Features
- Adds native LSP support (see new `lsp` namespace).

### Bug Fixes
- Updates dompurify to 3.2.7

## [0.54.0]

- Adds option `editor.mouseMiddleClickAction`
- Various bug fixes

## [0.53.0]

- :warning: This release deprecates the AMD build and ships with significant changes of the AMD build. The AMD build will still be shipped for a while, but we don't offer support for it anymore. Please migrate to the ESM build.

### New Features

- Next Edit Suggestion support.
- Scroll On Middle Click
- Edit Context Support

### Breaking Changes

- Internal AMD modules are no longer accessible. Accessing internal AMD modules was never supported. While this is still possible in the ESM build, we don't encourage this usage pattern.
- The [browser-script-editor scenario](https://github.com/Unity-Billal-mesloub/monaco-editor/blob/a4d7907bd439b06b24e334bdf2ab597bcae658b5/samples/browser-script-editor/index.html) for unbundled synchronous script import and editor creation no longer works. Instead, a the ESM build should be used with a bundler, such as vite or webpack.
- Custom AMD workers don't work anymore out of the box.

## [0.52.0]

- Comment added inside of `IModelContentChangedEvent`

## [0.51.0]

- New fields `IEditorOptions.placeholder` and `IEditorOptions.compactMode`
- New fields `IGotoLocationOptions.multipleTests` and `IGotoLocationOptions.alternativeTestsCommand`
- New field `IInlineEditOptions.backgroundColoring`
- New experimental field `IEditorOptions.experimental.useTrueInlineView`
- New options `CommentThreadRevealOptions` for comments

Contributions to `monaco-editor`:

- [@Unity-Billal-mesloub (Scott Carda)](https://github.com/Unity-Billal-mesloub): Update Q# Keywords [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)

## [0.50.0]

- New field `IEditorMinimapOptions.sectionHeaderLetterSpacing`
- New field `IOverlayWidgetPosition.stackOridinal`
- New field `EmitOutput.diagnostics`
- New event `IOverlayWidget.onDidLayout`
- New events `ICodeEditor.onBeginUpdate` and `ICodeEditor.onEndUpdate`
- `HoverVerbosityRequest.action` -> `HoverVerbosityRequest.verbosityDelta`
- `MultiDocumentHighlightProvider.selector` changed from `LanguageFilter` to `LanguageSelector`
- New optional parameters in `getEmitOutput`: `emitOnlyDtsFiles` and `forceDtsEmit`

Contributions to `monaco-editor`:

- [@Unity-Billal-mesloub (Billal mesloub)](https://github.com/Unity-Billal-mesloub): Add extension to `csp.contribution.ts` [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)
- [@Unity-Billal-mesloub (Billal mesloub)](https://github.com/Unity-Billal-mesloub): Call clearFiles on internal EmitOutput diagnostics, pass args down [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)
- [@Unity-Billal-mesloub (Billal mesloub)](https://github.com/Unity-Billal-mesloub): Update TypeScript to TS 5.4.5 in all projects, vendored files [issues](https://github.com/Unity-Billal-mesloubt/monaco-editor/issues)
- [@Unity-Billal-mesloub](https://github.com/Unity-Billal-mesloub): Adding Python f-string syntax support [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)

## [0.49.0]

- New proposed `editorHoverVerbosityLevel` API
- New proposed `newSymbolNamesProvider` API

Contributions to `monaco-editor`:

- [@Unity-Billal-mesloub (Billal mesloub)](https://github.com/Unity-Billal-mesloub): Add support for TypeSpec language [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)

## [0.48.0]

### Additions

- Various bug fixes
- Minimap Section Headers (see config option `showRegionSectionHeaders`)
- Diff Editor Gutter Menu (see config option `renderGutterMenu`)
- `InlineCompletionsProvider.handlePartialAccept` has `PartialAcceptInfo`

Contributions to `monaco-editor`:

- [@Unity-Billal-mesloub (Billal mesloub)](https://github.com/Unity-Billal-mesloub): Fix bug with highlighting of C++ raw string literals [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)

## [0.47.0]

### Additions

- Bug fixes
- `registerNewSymbolNameProvider`
- Experimental `registerInlineEditProvider`

## [0.46.0]

- Bug fixes

## [0.45.0]

### Breaking Changes

- `wordBasedSuggestions: boolean` -> `'off' | 'currentDocument' | 'matchingDocuments' | 'allDocuments'`
- `occurrencesHighlight: boolean` -> `'off' | 'singleFile' | 'multiFile'`

### Additions

- Many bug fixes
- `IEditorScrollbarOptions.ignoreHorizontalScrollbarInContentHeight`
- `IDiffEditor.goToDiff`
- `IDiffEditor.revealFirstDiff`

## [0.44.0]

- Removes old diff editor implementation.
- Custom diff algorithms no longer can be passed via diff editor options, instead a service should be used ([see #3558 for more details](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)).

## [0.42.0]

- Uses new diff editor widget by default. Use `experimental.useVersion2: false` to use the old widget. The old widget will be replaced in the next update.
- Diff editor uses inline mode by default when width is too small. Use the config option `useInlineViewWhenSpaceIsLimited` to control this behavior.
- Fixes broken language features when a model is created before the editor.

## [0.41.0]

- `IDiffEditor.diffReviewNext` was renamed to `IDiffEditor.accessibleDiffViewerNext`.
- `IDiffEditor.diffReviewPrev` was renamed to `IDiffEditor.accessibleDiffViewerPrev`.
- Introduces `InlineCompletionsProvider.yieldsToGroupIds` to allows inline completion providers to yield to other providers.
- Bugfixes

Contributions to `monaco-editor`:

- [@Unity-Billal-mesloub](https://github.com/Unity-Billal-mesloub): Fix Twig's plain text class expression [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)
- [@Unity-Billal-mesloub (Billal mesloub)](https://github.com/Unity-Billal-mesloub): Use new GitHub pages workflow [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)
- [@Unity-Billal-mesloub (Billal mesloub)](https://github.com/Unity-Billal-mesloub): Elixir - Add support for multi-letter uppercase sigils [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)
- [@Unity-Billal-mesloub (Billal mesloub)](https://github.com/Unity-Billal-mesloub): Add TwinCAT file support for structured text (st) language [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)
- [@Unity-Billal-mesloub (Billal mesloub)](https://github.com/Unity-Billal-mesloub)
  - Add mdx language [issues](https://github.com/microsoft/monaco-editor/issues)
  - Export custom TypeScript worker variables [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)
  - Document some basic concepts [issues](https://github.com/Unity-Billal-mesloub/monaco-editor/issues)

