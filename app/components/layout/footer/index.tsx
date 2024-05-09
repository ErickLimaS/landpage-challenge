import Image from 'next/image'
import React from 'react'
import Logo from "@/public/assets/img/1.png" // placeholder img
import Link from 'next/link'

function Footer() {
    return (
        <footer className='pt-6 pb-6 md:pt-8 md:pb-8 bg-footer flex items-center justify-center'>

            <div className='max-w-36 w-full sm:max-w-30 '>

                <Link href={'/'} className='block max-w-fit'>

                    <Image src={Logo} alt={'Logo TESIS'} />

                </Link>

            </div>

        </footer>
    )

}

export default Footer