export default function PaginationInfo({ firstPgResult, lastPgResult, totalItems }) {
    return (
        <>
            <p className="text-sm text-neutrals-dark-400 px-4 md:px-0">
                Showing <span className="font-medium">{firstPgResult}</span> to
                <span className="font-medium">{lastPgResult}</span> of{" "}
                <span className="font-medium">{totalItems}</span> results
            </p>
        </>
    );
}
