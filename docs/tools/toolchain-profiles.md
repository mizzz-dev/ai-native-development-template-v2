# Toolchain Profiles

Toolchain profileは実行環境の前提（利用可能ツール）を宣言し、Stack Profileは生成対象（ドキュメント/ワークフロー）を定義する。

- Toolchain profile: 何が「既に使えるか」
- Stack profile: 何を「導入するか」

CLIは両者を照合し、足りないツールはインストールせず警告として表示する。
