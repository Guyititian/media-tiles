const owner = "Guyititian";
const repo = "media-tiles";

const baseURL = `https://${owner}.github.io/${repo}/`;
const apiBase = `https://api.github.com/repos/${owner}/${repo}/contents/collections`;

const categories = [
  "genres",
  "franchises",
  "decades",
  "networks",
  "people",
  "studios",
  "special"
];

async function fetchCategory(category) {
  const res = await fetch(`${apiBase}/${category}`);
  const data = await res.json();

  if (!Array.isArray(data)) return [];

  return data
    .filter(f => f.name.match(/\.(jpeg|jpg|png|webp|gif)$/i))
    .map(f => ({
      name: f.name.replace(/\.[^/.]+$/, ""),
      url: `${baseURL}collections/${category}/${f.name}`,
      category
    }));
}
