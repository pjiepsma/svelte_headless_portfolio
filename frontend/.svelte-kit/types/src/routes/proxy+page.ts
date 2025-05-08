// @ts-nocheck
import client from '$lib/util/payload'; // Import the client you've set up
import type { PageLoad } from './$types';

export const load = async () => {
//   // Query for work experience data from Payload
//   const workExperience = await client.collections.devExperience.find({
//     sort: '-startDate', // Sorting by startDate in descending order
//     limit: 10, // Adjust limit if required
//   });

  // // Query for project data from Payload
  // const projects = await client.collections.skills.find({
  //   sort: '-dateAccomplished', // Sorting by dateAccomplished in descending order
  //   limit: 10,
  // });

  // Query for skills list from Payload
  const skills = await client.collections.skills.find({
    limit: 1, // Assuming you're fetching the first document with the skills list
  });

  // Process projects data
//   const projects = rawProjects.docs.map(processProjectEntries);

  return {
    // workExperience: workExperience.docs,
    skills,
    // skills: skills.docs,
  };
};
;null as any as PageLoad;