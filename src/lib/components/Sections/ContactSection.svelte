<script lang="ts">
	import { Button } from '$components';
	import SectionHeadline from '$components/SectionHeadline.svelte';

	// let { data } = $props();

	// $inspect(data);

	let contactName = $state('Pieter');
	let contactMail = $state('Pieter@saso.nl');
	let projectContext = $state('Amazing project');

	let hasSubmitted = $state(false);

	let isFormInvalid = $derived(hasSubmitted && (!contactName || !contactMail || !projectContext));
	let isEmailSend = $state(false);
	let isEmailFailed = $state(false);
	let isLoading = $state(false);
	async function onclick(event: Event) {
		hasSubmitted = true;

		if (contactName && contactMail && projectContext) {
			isLoading = true;
			const response = await fetch('/api/send-mail', {
				method: 'POST',
				body: JSON.stringify({
					contactName,
					contactMail,
					projectContext
				}),
				headers: { 'Content-Type': 'application/json' }
			});
			if (response.ok) {
				isEmailSend = true;
			} else {
				isEmailFailed = true;
			}
			isLoading = false;
		}
	}
</script>

<section class="mt-l">
	<SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>
	<div class="form-container default-margin mt-m">
		{#if isEmailSend}
			<div class="container">
				<h3>Thank you for getting in contact with me. I'll usually reply within 48 hours.</h3>
			</div>
		{:else if isLoading}
			<div class="container">
				<div class="spinner"></div>
				<h3>Sending off the content form.</h3>
			</div>
		{:else if isEmailFailed}
			<h3 class="bold mb-s">
				Something whet wrong <a class="link" href="mailto:pierre@mail.com">pierre@mail.com</a>
			</h3>
		{:else}
			<form>
				<input
					bind:value={contactName}
					class="text-input mb-b"
					class:input-error={isFormInvalid && !Boolean(contactName.length)}
					placeholder="Your Name"
				/>
				<input
					bind:value={contactMail}
					class={`text-input mb-b`}
					class:input-error={isFormInvalid && !Boolean(contactMail.length)}
					placeholder="Your Email"
				/>
				<textarea
					bind:value={projectContext}
					placeholder="Tell me what's up."
					class:input-error={isFormInvalid && !Boolean(projectContext.length)}
				></textarea>
				<Button {onclick}>Submit</Button>
			</form>
		{/if}
		<div class="form-text">
			<h3 class="bold mb-s">Talk to me about your project</h3>
			<p>
				I'm always excited to hear about new and innovative ideas! Whether you're in the early
				stages of planning or have a well-defined project, I'm here to help bring your vision to
				life. Feel free to drop me a message with some details about your project, and let's start a
				conversation about how we can work together. I look forward to connecting with you and
				discussing the possibilities. Talk to you soon!
			</p>
		</div>
	</div>
</section>

<style>
	section {
		padding-bottom: 140px;
	}

	.form-container {
		display: flex;
		justify-content: space-between;
	}

	.form-text {
		width: 39%;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 45%;
	}

	form * {
		font-size: 20px;
		font-family: 'Inter Tight', sans-serif;
		font-weight: 500;
		color: black;
	}

	textarea,
	input {
		width: 100%;
		background-color: rgba(0, 0, 0, 0.035);
		border-radius: 8px;
		padding: 4px 12px;
		outline: none;
		border: none;
	}

	input {
		height: 48px;
		margin-bottom: 30px;
	}

	textarea {
		height: 120px;
		margin-bottom: 40px;
	}

	textarea::placeholder,
	input::placeholder {
		font-size: 20px;
		font-weight: 400;
	}

	.input-error {
		background-color: rgba(223, 87, 87, 0.667);
	}

	.input-error::placeholder {
		color: white;
	}

	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-left-color: black;
		border-radius: 50%;
		width: 16px;
		height: 16px;
		display: inline-block;
		margin-right: 8px;
		animation: spin 0.5s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.container {
		display: flex;
		width: 45%;
	}
</style>
