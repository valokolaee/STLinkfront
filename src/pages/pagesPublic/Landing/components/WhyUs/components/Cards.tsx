import React from 'react'

const Cards = () => {
    return (
        <div className='flex flex-row mr-15 gap-[60px] text-[#e9fcff]'>
            {/* these cards should have texts about what we do */}
            <div style={{boxShadow:"-10px 10px 30px #1e2464"}} className='w-[400px]0 h-[500px] p-10 mt-20 rounded-[30px] border-[#76b1ff] bg-linear-65 to-[#121d86] from-[#000764] to-50%'>
                <h3 className='text-[48px] relative right-4'> Example Title </h3>
                <ul className='text-[20px]'>
                    <li className='list-disc relative right-57 mt-10'> Example </li>
                    <li className='list-disc relative right-57'> Example </li>
                    <li className='list-disc relative right-57'> Example </li>
                    <li className='list-disc relative right-57'> Example </li>
                    <li className='list-disc relative right-57'> Example </li>
                </ul>
            </div>
            <div className='flex flex-col gap-5'>
                <div style={{boxShadow:"-10px 10px 30px #1e2464"}} className='w-[400px] h-[280px] p-10 mt-20 rounded-[30px] border-[#76b1ff] bg-linear-65 to-[#121d86] from-[#000764] to-50%'>  </div>
                <div style={{boxShadow:"-10px 10px 30px #1e2464"}} className='w-[400px] h-[200px] p-10 rounded-[30px] border-[#76b1ff] bg-linear-65 to-[#121d86] from-[#000764] to-50%'>  </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div style={{boxShadow:"-10px 10px 30px #1e2464"}} className='w-[400px] h-[140px] p-10 mt-20 rounded-[30px] border-[#76b1ff] bg-linear-65 to-[#121d86] from-[#000764] to-50%'>
                    <ul className='text-[20px] mr-50 relative bottom-4'>
                        <li className='list-disc'> example text </li>
                        <li className='list-disc'> example text </li>
                        <li className='list-disc'> example text </li>
                    </ul>
                </div>
                <div style={{boxShadow:"-10px 10px 30px #1e2464"}} className='w-[400px] h-[340px] p-10 rounded-[30px] border-[#76b1ff] bg-linear-65 to-[#121d86] from-[#000764] to-50%'>  </div>
            </div>
        </div>
    )
}

export default Cards