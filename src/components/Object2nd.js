import React from 'react'

function Object2nd({changeSeleteDark, changeInputTag,outputRef ,content2ndValue, handleChangeOnject2nd, handleChangeOnject2ndTakeOption}) {
  return (
    <div className="flex input-tag input-tag-2 flex-col pt-6 items-center select-none">
        <input 
            className={`style-input text-green-700 border-2 opacity-90 ${changeInputTag} mr-2 rounded-md px-5 py-2 outline-none drop-shadow-lg pointer-events-none`}
            type="text" placeholder="Result"
            value={content2ndValue}
            onChange = {(e) => handleChangeOnject2nd(e)}
            ref = {outputRef}
        >
        </input>
        <select className={`shadow-md text-center z-10 mt-3  h-6 cursor-pointer rounded-md ${changeSeleteDark} outline-none select-none`}
                onChange={(e) => handleChangeOnject2ndTakeOption(e)       
                }
        >
            <option value="km">km</option>
            <option value="ha">ha</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
        </select>
    </div>
  )
}

export default Object2nd