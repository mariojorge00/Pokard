export default function Standarized(info) {
  if (!info || info.length === 0) return 0;

  if (info.id < 10) return `#00${info.id}`;
  if (info.id < 100) return `#0${info.id}`;
  else return `#${info.id}`;
}
