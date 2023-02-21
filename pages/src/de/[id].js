import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Item = ({ data }) => {
    console.log(data)
    const router = useRouter();

    return (
        <>
            <article>
                <h2>item detail</h2>
                {data[0].name}
            </article>
        </>
    )
}

export default Item

