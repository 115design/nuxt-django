module.exports = {
  'root': true,
  'env': {
    'browser': true, // ブラウザのグローバル変数を利用可能にする
    //'node': true, // Node.jsのグローバル変数とNode.js特有のルールを追加する
    //'worker': true, // web workersのグローバル変数を利用可能にする
    //'amd': true, // AMDの仕様の通りにrequire()とdefine()をグローバル変数として有効にする
    'mocha': true, // mochaの全てのグローバル変数を有効にする
    'jasmine': true, // jasmine(v1.3, v2.0)の全てのグローバル変数を有効にする
    'phantomjs': true, // phantomjsのグローバル変数を有効にする
    'jquery': true, // jQueryのグローバル変数を有効にする
    //'prototypejs': true, // prototype.jsのグローバル変数を有効にする
    //'shelljs': true, // shelljsのグローバル変数を有効にする
    //'meteor': true, // meteorのグローバル変数を有効にする
    //'mongo': true, // mongoのグローバル変数を有効にする
    //'applescript': true, // applescriptのグローバル変数を有効にする
    'es6': true // modulesを除くES6の仕様を有効にする
  },
  'parserOptions': {
    'parser': 'babel-eslint'
  },
  'extends': [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://www.tam-tam.co.jp/tipsnote/javascript/
    'eslint:recommended'
  ],
  // required to lint *.vue files
  'plugins': [
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // Possible Errors
    'comma-dangle': [2], // 不要なカンマを許可しない
    'no-cond-assign': [2], // 条件式での代入を許可しない
    'no-console': [2], // consoleの利用を許可しない。node環境ならデフォルトで無効
    'no-constant-condition': [2], // 条件式での定数式を許可しない
    'no-control-regex': [2], // 正規表現での制御文字の使用を許可しない
    'no-debugger': [2], // debuggerを許可しない,
    'no-dupe-args': [2], // 引数の重複を許可しない
    'no-dupe-keys': [2], // オブジェクトキーの重複を許可しない
    'no-duplicate-case': [2], // caseのラベルの重複を許可しない
    'no-empty-character-class': [2], // 空文字の正規表現を許可しない
    'no-empty': [2], // 空のブロック文を許可しない
    'no-ex-assign': [2], // 例外オブジェクトの上書きを許可しない
    'no-extra-boolean-cast': [2], // 式ですでに真偽値に強制変換されるようなコンテキストでの2重否定を許可しない
    // 'no-extra-parens': [2], // 不要な括弧を許可しない
    'no-extra-semi': [2], // 不要なセミコロンを許可しない
    'no-func-assign': [2], // 関数への代入、上書きを許可しない
    'no-inner-declarations': [2], // ファーストレベル以外での関数宣言を許可しない
    'no-invalid-regexp': [2], // 無効な正規表現を許可しない
    'no-irregular-whitespace': [2], // 無効なスペースを許可しない
    'no-negated-in-lhs': [2], // in演算子での左オペランドの否定を許可しない
    'no-obj-calls': [2], // グローバルオブジェクトを関数として呼び出すことを許可しない
    'no-regex-spaces': [2], // 正規表現リテラルで複数のスペースを許可しない
    'no-sparse-arrays': [2], // スカスカの配列を許可しない
    'no-unreachable': [2], // 決して到達することのないコードを許可しない
    'use-isnan': [2], // NaNでの比較を許可しない
    'valid-jsdoc': [2], // 無効な、不完全なJSDocコメントを許可しない
    'valid-typeof': [2], // 有効な文字列以外とtypeofの比較を許可しない

    // Best Practices
    'accessor-pairs': [2], // setterを持ってgetterを持たないオブジェクトの作成を許可しない
    'block-scoped-var': [2], // 宣言しているコンテキストの外で使用されている変数を許可しない
    // 'complexity': [2, 2], // 循環的複雑度と、その閾値
    'consistent-return': [2], // 何も値を返さない(undefined)ステートメントと値を返すステートメントの混在を許可しない
    'curly': [2], // 中括弧の省略を許可しない
    'default-case': [2], //Swith文でのdefaultの省略を許可しない
    'dot-notation': [2], //プロパティへのアクセスにブラケット記法を許可しない
    'dot-location': ['error', 'property'], // 一貫性のない改行前、改行後のドットを許可しない
    'eqeqeq': [2], // 等価演算子を許可しない
    'guard-for-in': [2], // プロトタイプチェーンで継承したプロパティをフィルタリングしないfor-inを許可しない
    'no-alert': [2], // alertの使用を許可しない
    'no-caller': [2], // arguments.callee、arguments.callerの使用を許可しない
    'no-div-regex': [2], // 除算のように見える正規表現を許可しない
    'no-else-return': [2], // 不要なelse節でのreturnを許可しない
    'no-eq-null': [2], // 等価演算子でのnull比較を許可しない
    'no-eval': [2], // evalの使用を許可しない
    'no-extend-native': [2], // ネイティブオブジェクトの拡張を許可しない
    'no-extra-bind': [2], // 不要なbindの使用を許可しない
    'no-fallthrough': [2], // フォールスルーの不足を許可しない
    'no-floating-decimal': [2], // 浮動小数点のドットの前後の省略を許可しない
    'no-implied-eval': [2], // 暗黙のevalを許可しない
    'no-iterator': [2], // __iterator__の使用を許可しない
    'no-labels': [2], // ラベルをつけたステートメントを許可しない
    'no-lone-blocks': [2], // 不要なブロックを許可しない
    'no-loop-func': [2], // ループの中で関数をつくることを許可しない
    'no-multi-spaces': [2], // 複数のスペースを許可しない
    'no-multi-str': [2], // バックスラッシュつなぎの複数行の文字列を許可しない
    'no-native-reassign': [2], // ネイティブオブジェクトへの再代入を許可しない
    'no-new-func': [2], // Functionコンストラクタの使用を許可しない
    'no-new-wrappers': [2], // プリミティブ型のラッパーオブジェクトの使用を許可しない
    'no-new': [2], // 変数に代入せずnew演算子を使用することを許可しない
    'no-octal-escape': [2], // 8進数のエスケープシーケンスの使用を許可しない
    'no-octal': [2], // 8進数リテラルの使用を許可しない
    'no-param-reassign': [2], // 関数の引数に対する再代入を許可しない
    'no-process-env': [2], // Node.jsのprocess.envの使用を許可しない
    'no-proto': [2], // __proto__の使用を許可しない
    'no-redeclare': [2], // 同じ変数を繰り返し宣言することを許可しない
    'no-return-assign': [2], // returnステートメントでの代入を許可しない
    'no-script-url': [2], // javascript:URLの使用を許可しない
    'no-self-compare': [2], // 自分自身との比較を許可しない
    'no-sequences': [2], // カンマ演算子の使用を許可しない(for文初期化や括弧で囲われたシーケンスなどは例外)
    'no-throw-literal': [2], // リテラルを投げることを許可しない
    // 'no-void': [2], // voidの使用を許可しない
    'no-warning-comments': [2], // TODOやFIXMEのような開発中ととれるコメントを許可しない
    'no-with': [2], // withの使用を許可しない
    'radix': [2], // parseIntの引数の基数を省略することを許可しない
    'wrap-iife': [2], // 即時関数を括弧で囲わないことを許可しない
    'yoda': [2], // 条件の値が左辺にくる条件式(ヨーダ)を許可しない

    // Strict Mode
    'strict': [2, 'safe'], // Strictモードのモード指定

    // Variables
    'no-catch-shadow': [2], // catch句の引数を上位スコープで変数宣言することを許可しない
    'no-delete-var': [2], // 変数に対するdeleteの使用を許可しない
    'no-label-var': [2], // 変数名をラベルに使用することを許可しない
    'no-shadow-restricted-names': [2], // グローバルオブジェクトのプロパティに対するシャドーイングを許可しない
    'no-shadow': [2], // シャドーイングを許可しない
    'no-undef-init': [2], // undefinedによる初期化を許可しない
    'no-unused-vars': [2], // 使用することのない変数を許可しない
    // 'no-use-before-define': [2], // 定義する前に使用することを許可しない

    // Node.js
    'handle-callback-err': [2], // コールバックパターンでのエラーハンドリングの省略を許可しない
    'no-mixed-requires': [2], // requireの変数と他の変数を一緒に変数宣言することを許可しない
    'no-new-require': [2], // requireしたものを直接new演算子で使わない
    'no-path-concat': [2], // __dirname/__filenameを使うとき、文字列の連結を許可しない
    'no-process-exit': [2], // process.exit()の使用を許可しない
    'no-restricted-modules': [2, 'fs'], // 特定のモジュールの利用を許可しない
    'no-sync': [2], // 同期処理を許可しない

    // Stylistic Issues
    'block-spacing': [2], // []の中でスペースを許可する(always)/しない(never)
    'array-bracket-spacing': [
      'error',
      'always',
      {
        'singleValue': false,
        'objectsInArrays': false
      }
    ], // []の中でスペースを許可する(always)/しない(never)
    'brace-style': ['error', 'stroustrup'], // elseの直前を改行しないことを許可しない。同行{}を置くことを許可しない
    'camelcase': [2], // キャメルケースの命名のみ許可する
    'comma-spacing': [2, { // カンマ前後のスペースの有/無を許可する
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'], // カンマのスタイル(行頭/行末)を指定する
    'computed-property-spacing': [2, 'never'], // computedプロパティの前後のスペースの有/無を許可する
    'consistent-this': ['error', 'self'], // 一貫性のないthisのエイリアスを許可しない
    'eol-last': [2], // ファイルの最後に空白行を要求する
    // 'func-names': [2], // 名前付き関数式を要求する
    'func-style': ['error', 'declaration'], // 関数宣言か関数式かスタイルを統一することを要求する
    'indent': ['error', 'tab'], // インデントをタブかスペースn個かを指定する
    'key-spacing': [2, { // オブジェクトリテラルのコロンの前後にスペースの有/無を許可しない
      'beforeColon': false,
      'afterColon': true
    }],
    'lines-around-comment': [2, { // コメントの前に空白行を入れることを要求する
      'beforeBlockComment': false,
      'beforeLineComment': false
    }],
    'max-nested-callbacks': [2, 3], // コールバック関数のネストレベルをn以上許可しない
    'new-cap': [2], // 小文字始まりのコンストラクタ関数を許可しない
    'new-parens': [2], // 括弧付きでないコンストラクタの呼び出しを許可しない
    'newline-after-var': [2, 'always'], // 変数宣言の直後に空白行を置くことを要求する
    'no-array-constructor': [2], // 複数の引数をもったArrayコンストラクタの使用を許可しない
    'no-continue': [2], // continueの使用を許可しない
    'no-inline-comments': [2], // コードと同じ行にコメントを書くことを許可しない
    'no-lonely-if': [2], // else if に置き換え可能なelseブロックの中でのif文を許可しない
    'no-mixed-spaces-and-tabs': [2], // スペースとタブの混合を許可しない
    'no-multiple-empty-lines': [2], // 連続した空白行を許可しない
    'no-nested-ternary': [2], // 三項演算子のネストを許可しない
    'no-new-object': [2], // Objectコンストラクタを許可しない
    'no-spaced-func': [2], // 関数を実行するとき、関数と括弧の間にスペースを入れることを許可しない
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }], // 行末の不要なスペースを許可しない
    'no-underscore-dangle': ['error', {
      'allow': [
        'self',
        'scope',
        '$this_'
      ],
      'allowAfterThis': true
    }], // 識別子の先頭・末尾の_を許可しない
    'no-unneeded-ternary': [2], // Booleanリテラルを返す、不要な三項演算子を許可しない
    'object-curly-spacing': [2, 'never'], // オブジェクトリテラルの波括弧の中でスペースの有/無を許可しない
    // 'one-var': [2, 'always'], // スコープ毎に変数宣言を１つしか許可しない
    'operator-assignment': ['error', 'never'], // 演算子のショートハンドの置き換えを許可しない
    'operator-linebreak': ['error', 'after'], // 演算子を改行前につけるスタイルに統一する
    // 'padded-blocks': [2, 'always'], // ブロックの中で最初と最後にスペースを入れないことを許可しない
    'quote-props': [2, 'always'], // オブジェクトのプロパティをクォーテーションで囲わないことを許可しない
    'quotes': [2, 'single', 'avoid-escape'], // クォーテーションのルールを指定する
    'semi-spacing': [2, { // セミコロン前後のスペース有無を指定する
      'before': false,
      'after': true
    }],
    'semi': [2, 'always'], // セミコロンの省略を許可しない
    'sort-vars': [2], // まとめて宣言する変数がアルファベット順でないことを許可しない
    'keyword-spacing': ['error', {
      'after': true
    }], // ifやforのようなキーワードの直後にスペースを入れないことを許可しない
    'space-before-blocks': [2, 'always'], // ブロックの括弧の直前にスペースを入れないことを許可しない
    'space-before-function-paren': [2, 'always'], // 関数名かfunctionキーワードと開き括弧の間にスペース有無を指定する
    'space-in-parens': [2, 'never'], // 括弧の中で最初と最後のスペース有無を指定する
    'space-infix-ops': [2], // 二項演算子の前後にスペースを入れないことを許可しない
    'space-unary-ops': [2], // 単項演算子の前後にスペース有無を指定する
    'spaced-comment': [2], // コメントの直前にスペースをいれないこと許可しない
    'wrap-regex': [2], // 括弧で囲われていない正規表現リテラルを許可しない

    // ES6
    'constructor-super': [2], // 無効なsuper()の呼び出しを許可しない
    'generator-star-spacing': [2, { // generatorsの*の前後のスペース有無を指定する
      'before': true,
      'after': false
    }],
    'no-this-before-super': [2], // super()を呼び出す前のthis/superを許可しない
    // 'no-var': [2], // varの使用を許可しない
    // 'object-shorthand': [2, 'always'], // objectリテラルのショートハンドを強制する
    'prefer-const': [2], // letで宣言されている変数で、変更されることのないものに対してconstへの変更を強制する

    // Legacy
    // 'max-depth': [2, 2], // ブロックのネストをn個以上許可しない
    // 'max-len': [2, 80, 2], // １行にn以上の文字数を許可しない
    // 'max-params': [2, 3], // n個以上の引数を許可しない
    // 'max-statements': [2, 3], // 関数内でn個以上のステートメントを許可しない
    'no-bitwise': [2], // ビット演算を許可しない
    // 'no-plusplus': [2] // ++/--の単項演算子の使用を許可しない
  }
}
