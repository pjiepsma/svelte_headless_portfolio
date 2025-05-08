<script>
	import {
		HeroSection,
		AboutMeSection,
		MyWorkSection,
		SkillSection,
		ContactSection
	} from '$components';
	const { data } = $props();
	let {  projects } = $derived(data);
	// $inspect(skills);
</script>

<HeroSection />
<!-- <AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillSection {skills} />
<ContactSection /> -->
