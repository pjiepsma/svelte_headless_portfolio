<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		children: Snippet;
		onclick: ((e: MouseEvent) => void) | (() => void);
		className?: string;
	}

	let { children, className, ...props }: ButtonProps = $props();
</script>

<button class={`btn ${className}`} {...props}>
	{@render children()}
</button>

<style>
	.btn {
		font-family: 'Inter tight', sans-serif;
		font-weight: 500;
		background-color: black;
		color: White;
		font-size: 24px;
		padding: 14px 40px;
		border-radius: 10px;
	}
</style>
