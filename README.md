# Code Relay

Send the right code context to AI.

Code Relay 将 VS Code 当前文件的位置转换为简洁的文本引用，方便粘贴到 AI 对话、Issue 或代码评审中。

## 功能

- 工作区内文件复制工作区相对路径。
- 工作区外文件复制绝对路径。
- 光标或单行选区只复制路径。
- 多行选区在路径后附加从 `1` 开始的行号范围。
- 支持命令面板、编辑器正文右键菜单和行号右键菜单。
- 复制完成后通过状态栏显示结果。

## 使用方式

1. 在 VS Code 中打开一个已保存的文件。
2. 只复制文件路径时，将光标放在任意位置或选择单行。
3. 需要行号范围时，选择多行代码。
4. 执行 `CodeRelay: Copy Path and Line`：
   - 在命令面板中搜索该命令；或
   - 在编辑器正文或行号区域右键选择该命令。
5. 将剪贴板内容粘贴到目标位置。

## 输出示例

工作区内文件：

```text
src/commands/copy_path_and_line.ts
```

工作区内多行选区：

```text
src/commands/copy_path_and_line.ts:12-18
```

工作区外文件：

```text
E:\samples\demo.ts
```

工作区外多行选区：

```text
E:\samples\demo.ts:12-18
```

当选区末尾位于下一行第 `0` 列时，该行不会被计入范围。

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
