export function formatPathSegment(segment) {
  if (segment.length < 1) return "";
  return segment
    .replaceAll(/[-_.~+]/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
}
