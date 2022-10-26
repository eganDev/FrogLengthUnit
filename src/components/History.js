import React from 'react'
import { MdClose } from "react-icons/md";

function History({changeHistoryTagClose,changeHistoryTagText,changeHistoryTag,listHistory, setListHistory, toggleHistoryTag, changeHistoryBg}) {
    const deleteHistory = (index) => {
        let lackHistory = listHistory.filter((value, id) => id!==index);
        setListHistory([...lackHistory].reverse());
    }
  return (
    <>
        <div className={`w-full  h-auto transition mt-5 flex flex-col items-center ${toggleHistoryTag}`}>
            <div className='mb-2 text-green-500 select-none font-bold'>
                HISTORY
            </div>
            <div className={`w-1/2 max-h-60 overflow-y-scroll scrollbar-hide bg-green-100 rounded-md shadow-md shadow-green-300 ${changeHistoryBg} history-res`}>

                {
                        listHistory.map((value, index) => (
                        <div className={`flex mx-2 mt-2 flex-row justify-between mb-2 py-2 px-2 rounded-sm bg-green-300 shadow-md shadow-green-200 ${changeHistoryTag}`}>
                        <p className={`select-none text-green-800 ${changeHistoryTagText}`}>{value.input} {value.op1} = {value.output} {value.op2}</p>
                        <button className={`select-none text-green-600 text-lg w-6 h-6 rounded-xl flex justify-center items-center transition hover:bg-green-100 hover:rotate-180 ${changeHistoryTagClose}`}
                            onClick={() => deleteHistory(index)}
                        ><MdClose/></button>
                        </div> 
                        )   
                    )
                }
            </div>
        </div>
    </>
  )
}

export default History