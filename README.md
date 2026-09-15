# Code Relay

Send the right code context to AI.

Code Relay 将 VS Code 当前文件的位置转换为简洁的文本引用，方便粘贴到 AI 对话、Issue 或代码评审中。

## 安装

- 在 [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Knowckx.code-relay) 安装。
- 在 VS Code 扩展面板中搜索 `@id:Knowckx.code-relay`。
- 或使用命令行：

```powershell
code --install-extension Knowckx.code-relay
```

## 功能

- 工作区内文件复制工作区相对路径。
- 工作区外文件复制绝对路径。
- 光标或单行选区在路径后附加从 `1` 开始的行号。
- 多行选区在路径后附加从 `1` 开始的行号范围。
- 支持命令面板、编辑器正文右键菜单和行号右键菜单。
- 复制完成后通过状态栏显示结果。

## 使用方式

1. 在 VS Code 中打开一个已保存的文件。
2. 复制单个位置时，将光标放在目标行或选择单行。
3. 复制行号范围时，选择多行代码。
4. 执行 `CodeRelay: Copy Path and Line`：
   - 在命令面板中搜索该命令；或
   - 在编辑器正文或行号区域右键选择该命令。
5. 将剪贴板内容粘贴到目标位置。

## 输出示例

工作区内光标或单行选区：

```text
src/commands/copy_path_and_line.ts:12
```

工作区内多行选区：

```text
src/commands/copy_path_and_line.ts:12-18
```

工作区外光标或单行选区：

```text
E:\samples\demo.ts:12
```

工作区外多行选区：

```text
E:\samples\demo.ts:12-18
```

当选区末尾位于下一行第 `0` 列时，该行不会被计入范围。

如果只想复制当前文件的相对路径而不包含行号，请直接使用 VS Code 内置的 `copyRelativeFilePath` 命令；该能力已有原生实现，因此 Code Relay 不再重复提供。

## 隐私

Code Relay 完全在本地运行：

- 不读取或复制源代码正文。
- 不连接任何 AI 服务或其他远程服务。
- 不发送遥测数据。
- 不保存文件路径或操作历史。
- 只将生成的位置引用写入系统剪贴板。

## 要求与限制

- 需要 VS Code `1.78.0` 或更高版本。
- 未保存的 Untitled 文件没有稳定路径，使用前需要先保存。
- 当前只处理活动编辑器的主选区。
- 当前不提供扩展设置。

## 反馈

发现问题请提交到 [GitHub Issues](https://github.com/Knowckx/code-relay/issues)。

## 许可证

[MIT](LICENSE)
