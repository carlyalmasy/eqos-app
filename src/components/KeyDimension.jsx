export default function KeyDimension( {title, children }) {
    return (
        <>
            <h5 className="text-silver-600" style={{ fontStyle: "normal" }}>
                { title }
            </h5>
            <p className="text-silver-600 mt-1">
                { children }
            </p>
        </>
    );
}
