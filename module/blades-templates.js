/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    "systems/court-of-blades/templates/parts/coins.html",
    "systems/court-of-blades/templates/parts/attributes.html",
    "systems/court-of-blades/templates/parts/cohort-block.html",
    "systems/court-of-blades/templates/parts/factions.html",
    "systems/court-of-blades/templates/parts/active-effects.html",
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
