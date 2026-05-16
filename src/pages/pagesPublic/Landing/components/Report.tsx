import React from 'react'

const Report = () => {
    return (
        <div className='w-full h-70 bg-linear-to-t relative text-[#e9fcff] from-[#09083b] from-45% to-[#181d69]'>
            <div className='w-full flex flex-row pr-20 pl-20 pt-20 p-10 gap-35 relative'>
                <div>
                    <h1 className='text-[48px]'> 1M $ </h1>
                    <h3 className='w-35 relative left-3.5'> Minds in a month </h3>
                </div>
                <div>
                    <h1 className='text-[48px] '> +3K </h1>
                    <h3 className='mr-7 w-full'> Users </h3>
                </div>
                <div>
                    <h1 className='text-[48px] '> +1K </h1>
                    <h3 className='ml-9 w-full'> Active admins </h3>
                </div>
                <div>
                    <h1 className='text-[48px] '> +3K </h1>
                    <h3 className='mr-7 w-full'> Users </h3>
                </div>
                <div>
                    <h1 className='text-[48px] '> +1K </h1>
                    <h3 className='ml-9 w-full'> Active admins </h3>
                </div>
                <div>
                    <h1 className='text-[48px] '> +3K </h1>
                    <h3 className='mr-7 w-full'> Users </h3>
                </div>
            </div>
            <span className='text-[#181d69] absolute bottom-3 left-174'> ®Powered By Example </span>
        </div>
    )
}

export default Report