export default function DetailListItem({item}) {
    return (
        <>
            <div className="ml-10 mt-4">
                <ol className="list-decimal text-xl">
                    <li>{item?.text}</li>
                </ol>
            </div>
        </>
    );
}
