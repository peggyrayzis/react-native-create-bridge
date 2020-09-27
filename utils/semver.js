const semverRegExp = /\bv?(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[\da-z-]+(?:\.[\da-z-]+)*)?(?:\+[\da-z-]+(?:\.[\da-z-]+)*)?\b/ig;
const validSemver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

module.exports = function(version) {
  if (typeof version !== "string") {
    throw new TypeError("Invalid argument expected string");
  }

  const extractedVersion = version.match(semverRegExp);

  if (extractedVersion && extractedVersion[0]) return extractedVersion[0];

  if (!validSemver.test(version)) {
    throw new Error("Invalid argument not valid semver");
  }
}
