function getProjectLabel(project) {
  if (!project || !project.name) return 'Unknown project';
  return `${project.name} (${project.repository})`;
}

module.exports = { getProjectLabel };
