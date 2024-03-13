export default function Label({text, helpText}) {
	return (
		<div className="flex justify-between align-middle mt-2 mb-0">
			<label className="text-neutrals-dark-400 mb-4">{ text }</label>
			{
				helpText &&
				<p className="text-neutrals-dark-100 underline text-xs leading-7 mb-1">
					<a href="" >{ helpText }</a>
				</p>
			}
		</div>
	);
};
