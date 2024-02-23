export default function bjoin(...items) {
	return items.filter(Boolean).join(' ')
}