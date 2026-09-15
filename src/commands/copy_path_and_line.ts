import * as vscode from 'vscode';

const commandId = 'code-relay.copyPathAndLine'; // package.json 中对应的命令 ID。
const statusDuration = 3000; // 状态栏消息显示时长，单位为毫秒。

/** 注册复制文件路径和行号的命令。 */
export function registerCopyPathAndLineCommand(): vscode.Disposable {
	return vscode.commands.registerCommand(commandId, copyPathAndLine);
}

/** 复制活动编辑器的路径和当前行或选区行号。 */
async function copyPathAndLine(): Promise<void> {
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		vscode.window.setStatusBarMessage('CodeRelay: No active text editor', statusDuration);
		return;
	}

	const uri = editor.document.uri;
	if (uri.scheme !== 'file') {
		vscode.window.setStatusBarMessage('CodeRelay: Save the file before copying its path', statusDuration);
		return;
	}

	const filePath = vscode.workspace.getWorkspaceFolder(uri)
		? vscode.workspace.asRelativePath(uri)
		: uri.fsPath;
	const reference = createCodeReference(filePath, editor.selection);

	try {
		await vscode.env.clipboard.writeText(reference);
		vscode.window.setStatusBarMessage(`CodeRelay: Copied ${reference}`, statusDuration);
	} catch {
		vscode.window.setStatusBarMessage('CodeRelay: Failed to write to the clipboard', statusDuration);
	}
}

/** 生成路径引用；光标或单行选区使用单个行号，多行选区使用行号范围。 */
export function createCodeReference(filePath: string, selection: vscode.Selection): string {
	let endLine = selection.end.line;
	if (!selection.isEmpty && selection.end.character === 0) {
		endLine--;
	}

	if (selection.start.line >= endLine) {
		return `${filePath}:${selection.start.line + 1}`;
	}

	return `${filePath}:${selection.start.line + 1}-${endLine + 1}`;
}
