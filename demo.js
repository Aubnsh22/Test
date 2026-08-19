function getProjectLabel(project) {
  if (!project || !project.name) return 'Unknown project';
  const repository = project.repository || 'repository unavailable';
  return `${project.name} (${repository})`;
}

module.exports = { getProjectLabel };
