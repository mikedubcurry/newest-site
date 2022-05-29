<script lang="ts">
	import { dirty_components } from 'svelte/internal';

	let terminalInput = '';
	let stdOut = '';

	const home = 6;
	let pwd = 6;
	let terminal: HTMLElement;
	let input: HTMLInputElement;
	$: pwdText = printPwd(pwd);
	$: console.log(pwd);

	let dirTree: DirTree = {
		0: {
			id: 0,
			parent: null,
			type: 'dir',
			name: '',
			contents: [1, 2, 3, 4, 5],
		},
		1: {
			id: 1,
			parent: 0,
			type: 'dir',
			name: 'home',
			contents: [6],
		},
		2: {
			id: 2,
			parent: 0,
			type: 'dir',
			name: 'bin',
			contents: [],
		},
		3: {
			id: 3,
			parent: 0,
			type: 'dir',
			name: 'root',
			contents: [],
		},
		4: {
			id: 4,
			parent: 0,
			type: 'dir',
			name: 'var',
			contents: [],
		},
		5: {
			id: 5,
			parent: 0,
			type: 'dir',
			name: 'etc',
			contents: [],
		},
		6: {
			id: 6,
			parent: 1,
			type: 'dir',
			name: 'mikedubcurry',
			contents: [],
		},
	};
	function traverse(node: DirNode, visited: number[] = []) {
		if (node.parent !== null && !visited.includes(node.parent)) {
			visited.push(node.id);
			return [...traverse(dirTree[node.parent] as DirNode, visited), node.name];
		} else {
			return [node.name];
		}
	}
	function printPwd(pwd) {
		return (
			'mikedubcurry:' +
			(pwd === home ? '~' : pwd === 0 ? '/' : '' + traverse(dirTree[pwd] as DirNode).join('/')) +
			'$ '
		);
	}

	function pressEnter(e) {
		console.log(dirTree);

		if (e.key === 'Enter') {
			stdOut += printPwd(pwd) + terminalInput + '<br>';
			handleStdin(terminalInput) ?? '';
			// if (terminalInput)
			// 	if (terminalInput === 'clear') {
			// 		clear();
			// 		// return;
			// 	} else if (terminalInput === 'cd ..') {
			// 		pwd = dirTree[pwd].parent ?? pwd;
			// 	} else if (terminalInput === 'ls') {
			// 		// stdOut += ls();
			// 		stdOut += handleStdin(terminalInput)
			// 	} else {
			// 		stdOut += commandNotFound(terminalInput) + '<br>';
			// 	}
			setTimeout(() => {
				terminal.scrollTop = terminal.scrollHeight;
			}, 0);
			terminalInput = '';
		}
	}
	function clear() {
		stdOut = '';
	}
	function ls() {
		let currentDir = dirTree[pwd] as DirNode;
		let contents = currentDir.contents.map((i) => dirTree[i]);
		stdOut += contents
			.map((item) => {
				if (item.type === 'dir') {
					return item.name + '/<br>';
				} else {
					return item.name + '<br>';
				}
			})
			.join('');
	}
	function cd([path]) {
		if (!path) {
			pwd = home;
			return;
		}
		if (path === '/') {
			pwd = 0;
			return;
		}
		if (path.slice(0, 2) === './') {
			path = path.slice(2);
		}
		if (!path) return;
		let currentDir = dirTree[pwd] as DirNode;

		if (path === '..') {
			pwd = currentDir.parent ?? pwd;
			return;
		}

		let availableDirs = currentDir.contents.map((i) => dirTree[i]);
		if (!availableDirs.map((dir) => dir.name).includes(path)) {
			stdOut += `bash: cd: ${path}: No such file or directory`;
		}
		pwd = availableDirs.filter((dir) => dir.name === path)[0].id;
	}
	function echo(input) {
		stdOut += input + '<br>';
	}
	function mkdir([dirname]) {
		if (!dirname) return;
		let nextId = getNextId();
		let dir: DirNode = {
			id: nextId,
			parent: pwd,
			name: dirname,
			contents: [],
			type: 'dir',
		};
		let currentDir = dirTree[pwd];
		if (currentDir.type === 'dir' && exists(currentDir, dirname)) {
			stdOut += `mkdir: cannot create directory '${dirname}': File exists<br>`;
			return;
		}
		dirTree = {
			...dirTree,
			[nextId]: dir,
			[dirTree[pwd].id]: { ...dirTree[pwd], contents: [...dirTree[pwd].contents, nextId] },
		} as DirTree;
	}
	function touch(filename) {
		if (!filename) return;
		let nextId = getNextId();
		let currentDir = dirTree[pwd];
		if (currentDir.type === 'dir' && exists(currentDir, filename)) {
			return;
		}
		let file: FileNode = {
			id: nextId,
			contents: '',
			name: filename,
			type: 'file',
			parent: pwd,
		};
		dirTree = {
			...dirTree,
			[nextId]: file,
			[dirTree[pwd].id]: { ...dirTree[pwd], contents: [...dirTree[pwd].contents, nextId] },
		} as DirTree;
	}
	function commandNotFound(command) {
		return `Command '${command}' not found<br>`;
	}
	const commands = {
		clear,
		ls,
		cd,
		mkdir,
		touch,
		echo,
	};

	function handleStdin(stdin) {
		if (!stdin) {
			return;
		}
		let [command, ...args] = stdin.split(' ');
		if (commands[command]) {
			return commands[command](args);
		} else {
			console.log(commandNotFound(command));

			stdOut += commandNotFound(command);
		}
	}
	type Node = {
		id: number;
		parent: number;
		name: string;
	};
	type DirNode = Node & {
		contents: number[];
		type: 'dir';
	};
	type FileNode = Node & {
		contents: '';
		type: 'file';
	};
	type DirTree = { [key: string | number]: DirNode | FileNode };
	function getNextId() {
		return (
			Object.keys(dirTree).reduce((max, key) => {
				if (parseInt(key) > max) {
					return parseInt(key);
				}
				return max;
			}, -Infinity) + 1
		);
	}
	function exists(dir: DirNode, name: string) {
		return dir.contents.map((i) => dirTree[i].name).includes(name);
	}
</script>

<section bind:this={terminal} on:click={() => {
	input.focus();
}}>
	<div
		class="stdout"
		class:empty={stdOut === ''}
		spellcheck="false"
		contenteditable
		bind:innerHTML={stdOut}
	/>
	<div class="stdin">
		{pwdText}<input
			bind:this={input}
			type="text"
			spellcheck="false"
			bind:value={terminalInput}
			on:keypress={pressEnter}
		/>
	</div>
</section>

<style>
	section,
	input {
		font-family: monospace;
		background-color: black;
		color: limegreen;
		border: none;
		outline: none;
	}
	section {
		height: 300px;
		width: 1024px;
		overflow-y: scroll;
		/* overflow-x: hidden; */
	}
	.empty {
		height: 0;
	}
	input {
		/* display: block; */
		margin-left: 1ch;
		caret-color: transparent;
		position: relative;
	}
	input::after {
		content: '';
		position: relative;
		z-index: 99;
		left: 0;
		top: 0;
		width: 20px;
		height: 20px;
		background-color: green;
	}
	.stdin {
		display: flex;
		flex-wrap: nowrap;
	}
</style>
