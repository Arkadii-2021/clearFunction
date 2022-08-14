export default function persons(val) {
  if (val > 50 && val <= 100) {
    return 'healthy';
  } if (val >= 15 && val <= 50) {
    return 'wounded';
  } if (val < 15 && val >= 1) {
    return 'critical';
  }
  return 'god mode or person death';
}
