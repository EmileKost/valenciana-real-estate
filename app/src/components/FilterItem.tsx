type FilterItemProps = {
	item: string;
	setState: (location: string[]) => void;
};

export const FilterItem = ({ item, setState }: FilterItemProps) => {
	return (
		<div className="w-full flex justify-between items-center">
			<h4 className="font-text text-xl text-black-primary">{item}</h4>
			<input
				type="checkbox"
				name={item}
				id={item}
			/>
		</div>
	);
};
