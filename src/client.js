import { createClient } from "@sanity/client";

const config = {
  projectId: "olhp81k9",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
};
const client = createClient(config);

export default client;
