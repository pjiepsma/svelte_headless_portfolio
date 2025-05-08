import sanityClient, { processProjectEntries } from '$lib/util/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const workExperienceQuery = sanityClient.fetch<SanityWorkExperience[]>(
		'*[_type == "devExperience"] | order(startDate desc)'
	);

	const rawProjectsQuery = sanityClient.fetch<SanityProject[]>(
		'*[_type == "project"] | order(dateAccomplished desc)'
	);

	const skillsQuery = sanityClient.fetch<Skill[]>('*[_type == "skills"][0].skillsList');

	const [workExperience, rawProjects, skills] = await Promise.all([
		workExperienceQuery,
		rawProjectsQuery,
		skillsQuery
	]);

	const projects = rawProjects.map(processProjectEntries);

	return {
		workExperience,
		projects,
		skills
	};
};
