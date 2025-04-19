
import React from 'react'
import Link from 'next/link';


export const Menu=() => {
return(
    <div className='flex items-center justify-center'>
        <div className='flex h-15 w-200 m-5 bg-gradient-to-r from-red-950 to-red-800 rounded-lg item-center justify-center space-x-20'>
            <ul className ='flex ml-6 items-center space-x-20'>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/home/new'>
                        News
                    </Link>
                </li>
                
                <li>
                    <Link href='/home/teams'>
                        Team
                    </Link>
                </li>
                <li>
                    <Link href='/home/schedule'>
                        Schedule
                    </Link>
                </li>
                <li>
                    <Link href='/home/race'>
                        Race
                    </Link>
                    </li>
                <li>
                    <Link href='/home/driver'>
                        Driver
                    </Link>
                </li>
            </ul>
        </div>
    </div>
);
}
