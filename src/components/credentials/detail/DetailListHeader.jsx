export default function DetailListHeader({ header }) {
    return (
        <div className="container bg-platinum-100 h-10 rounded-full flex justify-center">
            <p className="text-neutrals-dark-600 text-sm">{header.title}</p>
        </div>
    );
}
