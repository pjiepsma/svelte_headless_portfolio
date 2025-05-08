import { createClient, type ClientConfig } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
const config: ClientConfig = {
	projectId: 'xa8f1foc',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2025-05-06'
};

const sanityClient = createClient(config);
const builder = ImageUrlBuilder(sanityClient);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
	const builder = ImageUrlBuilder(sanityClient);
	const projectImageUrl = builder.image(rawProject.image).url();

	const processProject: ProcessedProject = {
		name: rawProject.name,
		company: rawProject.company,
		dateAccomplished: rawProject.dateAccomplished,
		stack: rawProject.stack,
		slug: rawProject.slug,
		projectImageUrl,
		content: rawProject.content.map(processProjectContent)
	};
	return processProject;
}

function processProjectContent(content: RawTextCeontent | RawImageContent) {
	if (content._type === 'block') {
		const processText: ProcessedTextContent = {
			type: 'text',
			style: content.style,
			textToRender: content.children.map((elem) => elem.text).join('\n')
		};
		return processText;
	} else {
		const processImage: ProcessedImageContent = {
			type: 'image',
			url: builder.image(content).url()
		};
		return processImage;
	}
}
