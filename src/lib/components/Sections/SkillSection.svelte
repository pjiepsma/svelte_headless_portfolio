<script lang="ts">
	import SectionHeadline from '$components/SectionHeadline.svelte';

	interface SkillsSectionProps {
		skills: Skill[];
	}

	let { skills }: SkillsSectionProps = $props();
</script>

<section class="mt-l">
	<SectionHeadline sectionName="skills">Skills</SectionHeadline>
	<div class="wrapper default-margin">
		<div class="skills-container mt-m">
			{#each skills as skill}
				<i class={skill.iconClass}></i>
			{/each}
		</div>
	</div>
</section>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.skills-container {
		display: flex;
		width: 40%;
		flex-wrap: wrap;
		justify-content: center;
		row-gap: 16px;
		column-gap: 16px;
	}

	i {
		font-size: 80px;
		color: black;
	}
</style>
