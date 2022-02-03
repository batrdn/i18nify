const unflatten = (obj: Record<string, any>): Record<string, any> => {
  const result: Record<string, any> = {};
  Object.keys(obj).forEach((key) => {
    const parts = key.split('.');
    let current = result;
    for (let i = 0; i < parts.length; i++) {
      if (i === parts.length - 1) {
        current[parts[i]] = obj[key];
      } else {
        current = current[parts[i]] = current[parts[i]] || {};
      }
    }
  });
  return result;
};

export default unflatten;
