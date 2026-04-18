type DropdownItemProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

function DropdownFilterItem ({ label, isSelected, onClick }: DropdownItemProps) {
    return (
        <li className="list-none">
          <button
            onClick={onClick}
            className={`w-full text-left px-4 py-2 text-sm transition-all duration-200 hover:bg-gray-100 ${
              isSelected 
                ? 'bg-yellow-50 text-yellow-700 font-semibold border-l-4 border-yellow-600 hover:bg-yellow-100 ' 
                : 'text-gray-700 border-l-4 border-transparent'
            }`}
          >
            {label}
          </button>
        </li>
    )
}

export default DropdownFilterItem