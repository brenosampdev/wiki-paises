const COLORS_BADGES: Record<string, { bg: string; text: string }> = {
    Americas : {
        bg: 'bg-green-200',
        text: 'text-green-600'
    },
    Africa : {
        bg: 'bg-yellow-200',
        text: 'text-yellow-600'
    },
    Europe : {
        bg: 'bg-purple-200',
        text: 'text-purple-600'
    },
    Asia : {
        bg: 'bg-red-200',
        text: 'text-red-600'
    },
    Oceania : {
        bg: 'bg-blue-200',
        text: 'text-blue-600'
    },
    Antarctic : {
        bg: 'bg-cyan-200',
        text: 'text-cyan-600'
    }
}

const FALLBACK = { bg: 'bg-gray-200', text: 'text-gray-600' }

type BadgesProps = {
    region: string
}

function Badge({ region } : BadgesProps) {
    const colorBadge = COLORS_BADGES[region] ?? FALLBACK
    return (
        <p className={`${colorBadge.bg} ${colorBadge.text} font-semibold px-2 py-0.5 rounded-full shrink-0`}>
            {region.toUpperCase()}
        </p>
    )
}

export default Badge