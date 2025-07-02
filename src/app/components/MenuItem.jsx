import Link from 'next/link'
import React from 'react'

const MenuItem = ({ m }) => {
    return (
        <Link href={m.url}>{m.name}</Link>
    )
}

export default MenuItem