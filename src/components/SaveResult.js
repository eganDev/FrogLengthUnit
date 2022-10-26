import React from 'react'
import { MdSave } from "react-icons/md";

function SaveResult({addHistory,openButton, changeSaveResult, changeSaveResultText}) {
  return (
    <>
    
            <div className={`hover:scale-105 transition ${changeSaveResult} cursor-pointer -mt-9 select-none bg-green-200 flex flex-row items-center py-1 px-2 rounded-md shadow-md ${openButton} save-btn`}
                 onClick={(e) => addHistory(e)}
            >
                <div className={` ${changeSaveResultText} text-lg mr-1`}>
                    <MdSave/>
                </div>
                <p className={`text-sm ${changeSaveResultText}`}>Save result</p>
            </div>
        
    </>
  )
}

export default SaveResult