import React from 'react'
import "../components/MenuOption.css"
import { MdDarkMode, MdSwapHorizontalCircle, MdWatchLater } from "react-icons/md";
import { IoMdRefreshCircle } from "react-icons/io";

function MenuOption({changeText,handleRefresh, checkClick, checkDarkMode, changeColorMenu}) {
  return (
    <>
        <div className='MenuOption'>
            <ul>
                <li className={`bg-white trasition ${changeColorMenu}`}
                    onClick={(e) => handleRefresh(e)}>
                    <span className='icon'><IoMdRefreshCircle/></span>
                    <span className='title'>Refresh</span>
                </li>
                {/* <li className={`bg-white trasition ${changeColorMenu}`}>
                    <span className='icon'><MdSwapHorizontalCircle/></span>
                    <span className='title'>Switch</span>
                </li> */}
                <li  className={`bg-white trasition ${changeColorMenu}`}
                    onClick = {(e) => checkClick(e)}
                    >
                    <span className='icon'><MdWatchLater/></span>
                    <span className='title'>History</span>
                </li>
                <li className={`bg-white trasition ${changeColorMenu}`}
                    onClick={(e)=> checkDarkMode(e)}
                    >
                    <span className='icon'><MdDarkMode/></span>
                    <span className='title'>{changeText}</span>
                </li>
               
            </ul>
        </div>
    </>
  )
}

export default MenuOption