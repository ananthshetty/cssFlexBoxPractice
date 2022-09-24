import React, { useState } from 'react'
import './App.css'
import {getRandomNum,getRandomColor} from './main';

export default function Example2(props) {
    const [columnJc,setColumnJc] = useState('');
    const [columnAi,setColumnAi] = useState('');
  
    const handleColumnJc = (e)=>{
      setColumnJc(e.target.id);
    };
    const handleColumnAi = (e)=>{
      setColumnAi(e.target.id);
    }

  return (
      <div id="example2">
        <div className={`h-[680px] w-full flex-col itemBoxContainer relative flex items-${columnAi} justify-${columnJc} gap-[8px]`}>
          <div className='exampleH1 absolute left-[10px] top-[10px] z-[5]'>
            <h1 className='text-white text-[22px]'>Example:2 - Flex Direction As Column</h1>
          </div>
          <div className={`h-[${getRandomNum()}px] w-[${getRandomNum()}px] bg-[${getRandomColor()}] invert `}>A</div>
          <div className={`h-[${getRandomNum()}px] w-[${getRandomNum()}px] bg-[${getRandomColor()}] invert  flex items-center`}>B</div>
          <div className={`h-[${getRandomNum()}px] w-[${getRandomNum()}px] bg-[${getRandomColor()}] invert `}>C</div>
          <div className={`h-[${getRandomNum()}px] w-[${getRandomNum()}px] bg-[${getRandomColor()}] invert  flex items-center`}>D</div>
          <div className={`h-[${getRandomNum()}px] w-[${getRandomNum()}px] bg-[${getRandomColor()}] invert `}>E</div>
        </div>
        <div className='flex flex-col items-self-start m-[15px] '>
                <div className='text-left w-[220px] text-[22px] border-b-[1px]'>Apply properties:</div>
                <div className=''>
          <table>
              <tr className='text-left'><th className='underline'>property</th>                                         <th className='underline'>Value</th></tr>
              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>display:</td>
              <td disabled={false}>
                  <button className="cursor-not-allowed py-2 px-1">
                    <span className='px-1 bg-grey-500 text-black font-semibold  border rounded' title="Sorry you can't change it">
                      flex
                    </span>
                  </button>
                </td> 
              </tr>
              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>flex-direction:</td>
                <td disabled={false}>
                  <button className="cursor-not-allowed py-2 px-1">
                    <span className='px-1 bg-grey-500 text-black font-semibold  border rounded' title="Sorry you can't change it">
                      column
                    </span>
                  </button>
                </td> 
              </tr>


              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>justify-content:</td>
              <td disabled={false}>
                  <button className="py-2 px-1">
                    <span id="center" onClick={(e)=>{handleColumnJc(e)}} className='px-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold  border border-blue-700 rounded'>
                      center
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="end" onClick={(e)=>{handleColumnJc(e)}} className='px-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold  border border-blue-700 rounded'>
                      flex-end
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id='start' onClick={(e)=>{handleColumnJc(e)}} className='px-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold  border border-blue-700 rounded'>
                      flex-start
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="around" onClick={(e)=>{handleColumnJc(e)}} className='px-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold  border border-blue-700 rounded' title=" items are evenly distributed in the line with equal space around them">
                      space-around
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="between" onClick={(e)=>{handleColumnJc(e)}} className='px-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold  border border-blue-700 rounded' title="All available space is placed between the first and last items, pushing both items to opposite edges of the container">
                      space-between
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="evenly" onClick={(e)=>{handleColumnJc(e)}} className='px-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold  border border-blue-700 rounded' title='Gives the equal space in x-axis for the flex items'>
                      space-evenly
                    </span>
                  </button>
                </td> 
              </tr>

              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>align-items:</td>
                  <button className="py-2 px-1">
                    <span id="baseline" onClick={(e)=>{handleColumnAi(e)}} className='px-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold  border border-blue-700 rounded' title="the flexbox items will align themselves in order to have the baseline of their text align along a horizontal line.">
                      baseline
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="start" onClick={(e)=>{handleColumnAi(e)}} className='px-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold  border border-blue-700 rounded' title="The flexbox items are aligned at the start of the cross axis. By default, the cross axis is vertical. This means the flexbox items will be aligned vertically at the top.">
                      flex-start
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="center" onClick={(e)=>{handleColumnAi(e)}} className='px-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold  border border-blue-700 rounded' title="This means the flexbox items will be centered vertically.">
                      center
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="end" onClick={(e)=>{handleColumnAi(e)}} className='px-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold  border border-blue-700 rounded' title="This means the flexbox items will be centered vertically.">
                      flex-end
                    </span>
                  </button>
              </tr>

              {/* gap */}
              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>gap:</td>
              <td disabled={false}>
                  <button className="cursor-not-allowed py-2 px-1">
                    <span className='px-1 bg-grey-500 text-black font-semibold  border rounded' title="Sorry you can't change it">
                      8px
                    </span>
                  </button>
                </td> 
              </tr>
          </table>
            </div>
            </div>
      </div>
  )
}