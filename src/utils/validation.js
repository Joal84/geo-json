const regexLat = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;
const regexLon = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;

// checking format of input
export const validation = (coords) => {
  // Checking format
  const { minLatitude, minLongitude, maxLatitude, maxLongitude } = coords;
  let validminLat = regexLat.test(minLatitude);
  let validminLon = regexLon.test(minLongitude);
  let validMaxLat = regexLat.test(maxLatitude);
  let validMaxLon = regexLon.test(maxLongitude);

  if (!validminLat || !validminLon || !validMaxLat || !validMaxLon) {
    return;
  }

  return validminLat && validminLon && validMaxLat && validMaxLon;
};
