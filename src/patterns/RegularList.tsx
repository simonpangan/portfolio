type Props = {
    items: Array<any>,
    resourceName: string,
    itemComponent: (...args: any) => JSX.Element,
};

export default (
	{items, resourceName, itemComponent: ItemComponent}  : Props
) : JSX.Element => {
	return (
		<>
			{items.map((item, i) => {
				return <ItemComponent key={item.id} {...{ [resourceName]: item}} />
			})}
		</>
	);
};