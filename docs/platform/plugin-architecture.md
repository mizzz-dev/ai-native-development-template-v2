# Plugin Architecture

pluginは宣言的metadata/template/rule中心で構成し、任意コード実行を禁止する方針。

## 責務
- workflow template
- docs template
- checklist
- diagnostics rule
- policy baseline
- evidence template

## trust model
- official
- community
- internal
- restricted

## lifecycle
discover -> validate -> plan -> apply -> verify
