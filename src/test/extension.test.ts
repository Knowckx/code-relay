import * as assert from 'assert';
import * as vscode from 'vscode';
import { createCodeReference } from '../commands/copy_path_and_line';

suite('Copy Path and Line', () => {
	test('appends one-based line number for a cursor or single-line selection', () => {
		assert.strictEqual(createCodeReference('src/extension.ts', new vscode.Selection(4, 2, 4, 2)), 'src/extension.ts:5');
		assert.strictEqual(createCodeReference('src/extension.ts', new vscode.Selection(4, 2, 4, 8)), 'src/extension.ts:5');
	});

	test('appends one-based line numbers for a multi-line selection', () => {
		const selection = new vscode.Selection(2, 3, 5, 4);

		assert.strictEqual(createCodeReference('src/extension.ts', selection), 'src/extension.ts:3-6');
	});

	test('excludes an unselected line when the selection ends at column zero', () => {
		assert.strictEqual(
			createCodeReference('src/extension.ts', new vscode.Selection(2, 0, 3, 0)),
			'src/extension.ts:3',
		);
		assert.strictEqual(
			createCodeReference('src/extension.ts', new vscode.Selection(2, 0, 5, 0)),
			'src/extension.ts:3-5',
		);
	});
});
