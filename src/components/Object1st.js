import React from 'react'

function Object1st({changeSeleteDark, changeInputTag ,inputRef, content1stValue, handleChangeOnject1st, handleChangeOnject1stTakeOption}) {
  return (
    <div className="input-tag changeSeleteDark flex flex-col pt-6 items-center select-none ">
        <input 
        className={` style-input text-green-700 border-2 opacity-90 ${changeInputTag} mr-2 rounded-md px-5 py-2 outline-none drop-shadow-lg`}
        type="text" placeholder="Enter origin number"
        value={content1stValue} 
        ref = {inputRef}
        onChange={(e) => handleChangeOnject1st(e)}
        >
        </input>
        <select className={`${changeSeleteDark}  shadow-md text-center z-10 mt-3  h-6 cursor-pointer rounded-md outline-none select-none`}
        onChange={(e) => handleChangeOnject1stTakeOption(e)}
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

export default Object1st