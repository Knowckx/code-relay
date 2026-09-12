import * as vscode from 'vscode';
import { registerCopyPathAndLineCommand } from './commands/copy_path_and_line';

/** 注册 CodeRelay 提供的全部命令。 */
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(registerCopyPathAndLineCommand());
}

/** 停用扩展；当前没有需要主动释放的额外资源。 */
export function deactivate() {}
