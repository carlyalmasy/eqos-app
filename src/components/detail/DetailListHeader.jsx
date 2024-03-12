export default function DetailListHeader({item}) {
    return (
        <div className="container bg-platinum-100 h-10 rounded-full flex justify-center">
            <p className="text-neutrals-dark-600 text-lg leading-6">{item?.title}</p>
        </div>
    );
}
