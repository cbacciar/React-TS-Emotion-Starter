/**
 *
 * @param classPrefix
 * @param suffix className to be appended to
 * @returns string containing the className concat
 */
const addPrefix = (
  classPrefix: string,
  suffix: string,
  divider?: string
): string => {
  if (!classPrefix && suffix) return suffix;
  else if (classPrefix && !suffix) return "";
  return classPrefix + (divider ? divider : "-") + suffix;
};

export default addPrefix;
