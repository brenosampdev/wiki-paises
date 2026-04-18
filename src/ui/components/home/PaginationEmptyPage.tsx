function PaginationEmptyPage() {
    return (
        <div className="flex flex-col items-center justify-center py-20 gap-2">
            <h2 className="text-2xl font-serif italic">No nations found</h2>
            <p className="text-gray-500">Try adjusting your search or filter</p>
        </div>
    )
}

export default PaginationEmptyPage