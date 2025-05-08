import sanityClient, { processProjectEntries } from '$lib/util/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const rawProject: SanityProject = await sanityClient.fetch(
		`*[_type == "project" && slug == $slug][0]`,
		{ slug }
	);

	if (!rawProject) {
		throw error(404, 'Project not found');
	}

	const project = processProjectEntries(rawProject);
	return { project };
};
