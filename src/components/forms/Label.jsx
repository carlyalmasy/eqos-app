export default function Label({text, helpText}) {
	return (
		<div className="flex justify-between align-middle mt-2 mb-0">
			<label className="text-gray-700 mb-1">{ text }</label>
			{
				helpText &&
				<p className="text-gray-400 underline text-xs leading-7 mb-1">
					<a href="" >{ helpText }</a>
				</p>
			}
		</div>
	);
};