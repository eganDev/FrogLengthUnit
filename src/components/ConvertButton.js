import React from 'react'
import { MdSave } from "react-icons/md";

function ConvertButton({handleConvert, changeConvertButton}) {
  return (
    <div>
        <button
        className={`convert-btn transition hover:scale-110 select-none py-3 px-8 -mt-3 ${changeConvertButton} text-cyan-100 rounded-md  border-none`}
        onClick={(e) => handleConvert(e)}
        >Convert</button>
       
    </div>
  )
}

export default ConvertButton