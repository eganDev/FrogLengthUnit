import Object1st from "./components/Object1st";
import Object2nd from "./components/Object2nd";
import ConvertButton from "./components/ConvertButton";
import MenuOption from "./components/MenuOption";
import History from "./components/History";
import { toMetter,CoverMetter } from "./components/ConvertList";
import { useState } from "react";
import { useRef } from "react";
import SaveResult from "./components/SaveResult";
import { useEffect } from "react";
import frog from "./image/frog.png"
import frog2 from "./image/frog-1.png"
import './App.css'

function App() {
  const [object1st, setObject1st] = useState({
        content1st: "",
        option1st: "km"
  })
  const [object2nd, setObject2nd] = useState({
        content2nd: "",
        option2nd: "km",
  })
  const [history, setHistory] = useState({
        input: object1st.content1st,
        output: object2nd.content2nd,
        op1: object1st.option1st,
        op2: object2nd.option2nd
  })
  const [listHistory, setListHistory] = useState(JSON.parse(localStorage.getItem('listHistory')) ?? []);
  const inputRef = useRef(0);
  const outputRef = useRef(null)

  const handleChangeOnject1st = (event) => {
        setObject1st({
          ...object1st,
          content1st: event.target.value
        })
        setEmpty(Empty => false)
        setButtonA(buttonA => false)
        setObject2nd({
          ...object2nd,
          content2nd:""
        })
        setNum(Num => false)
  }
  const handleChangeOnject1stTakeOption = (event) => {
    setObject1st({
      ...object1st,
      option1st: event.target.value
    })
  }
  const handleChangeOnject2ndTakeOption = (event) => {
    setObject2nd({
      ...object2nd,
      option2nd: event.target.value
    })
  }
  const handleChangeOnject2nd = (e) => {
    setObject2nd({
      ...object2nd,
      content2nd: e.target.value 
    })
   
  }
  const handleRefresh = () => {
      inputRef.current.focus();
      setObject1st({
        ...object1st,
        content1st: "",
      })
      setObject2nd({
        ...object2nd,
        content2nd: ""});
      setButtonA(buttonA => false)
      setNum(Num => false)
      setEmpty(Empty => false)
  }
  const takeResult = (e) => {
      setObject2nd({
        ...object2nd,
        content2nd: (parseFloat(object1st.content1st)*toMetter[object1st.option1st]*CoverMetter[object2nd.option2nd]).toFixed(6),
      })
    }
  const addHistory = () => {
    if (object1st.content1st === "" && object1st.content1st.trimEnd() ==="") {
      return
    }
    setListHistory([
      ...listHistory,
      history
    ])
  }

  const handleConvert = (e) => {  
      if(object1st.content1st ==="" || object1st.content1st.trimEnd() ==="") {
          isEmpty();
          inputRef.current.focus();
          setObject1st({
            ...object1st,
            content1st: "",
          })
          setNum(Num => false)
          return
      } else if (isNaN(object1st.content1st)) {
          isNum();
          setButtonA(buttonA => false)
          inputRef.current.focus();
          setObject1st({
            ...object1st,
            content1st: "",
          })
          setObject2nd({
            ...object2nd,
            content2nd:"",
          })
          return
      } else {
        setNum(Num => false)
      }
      takeResult();
      setHistory({
        ...history,
        input: object1st.content1st,
        output: (parseFloat(object1st.content1st)*toMetter[object1st.option1st]*CoverMetter[object2nd.option2nd]).toFixed(6),
        op1: object1st.option1st,
        op2: object2nd.option2nd
      }) 
      checkClickA();
  }
  useEffect( () => {
    localStorage.setItem('listHistory', JSON.stringify(listHistory))
  }, [listHistory])
  
  const [button, setButton] = useState(false);
  const [buttonA, setButtonA] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [Num, setNum] = useState(false);
  const [Empty, setEmpty] = useState(false);

  const checkClick = () => {
    setButton(button => !button);
  }
  const checkClickA = () => {
    setButtonA(buttonA => true);
  }

  const isNum = () => {
    setNum(Num => true);

  }  
  const isEmpty = () => {
    setEmpty(Empty => true)
  }
  const onClickDarkMode = () => {
      setDarkMode(darkMode => !darkMode);
  }

  let ListHistory = [...listHistory].reverse()
  let trueCheck = Num ? "" : "hidden";
  let toggleHistoryTag = button ? 'opacity-100' : 'opacity-0';
  let openButton = buttonA ? "opacity-100" : "opacity-0 pointer-events-none";
  let changeColorBlack = darkMode ? "bg-black" : "bg-yellow-50"
  let changeColorMenu = darkMode ? "box-shadow-menu" : "shadow-md shadow-green-500/50"
  let changeColorTile = darkMode ? "text-shadow-dark" : "text-shadow"
  let changeCoverTag = darkMode ? "bg-green-600" : "bg-green-100"
  let changeConvertButton = darkMode ? "bg-convert-btn text-green-400 font-bold" : "bg-green-500 font-bold shadow-lg shadow-green-500/50"
  let changeInputTag = darkMode ? "input-changing" : "border-green-500"
  let EmptyInput = Empty ? "" : "hidden";
  let changeOpacityFrog = darkMode ? "frog-dark" : ""
  let changeSeleteDark = darkMode ? "selete-dark" : "bg-green-200 text-green-800"
  let changeAlertDark = darkMode ? "text-green-300" : "text-green-600"
  let changeSaveResult = darkMode ? "save-dark" : ""
  let changeSaveResultText = darkMode ? "save-dark-text" : "text-green-700"
  let changeHistoryBg = darkMode ? "history-dark" : ""
  let changeHistoryTag = darkMode ? "history-tag-dark" : ""
  let changeHistoryTagText = darkMode ? "history-tag-dark-text" : "" 
  let changeHistoryTagClose = darkMode ? "hover-close" : ""
  let changeText = darkMode ? "Light Mode" : "Dark Mode"

  return (
    <>
        <div className={`${changeColorBlack} transition h-screen flex justify-center body`}>
            <div className="h-fit mt-20 flex flex-col main">
                  <div className="flex h-10 items-center justify-center p-10 main-name">
                     <h1 className={`text-5xl font-bold text-green-300 pb-5 ${changeColorTile} select-none title-text`}>FROG LENTGH UNIT</h1>
                  </div>
                  <div className={`flex relative overflow-hidden flex-col items-center justify-center ${changeCoverTag} rounded-md shadow-xl shadow-green-500/50 convert-tag`}>
                  <div className={`frog transition ${changeOpacityFrog}`}>
                        <img src={frog} className="pointer-events-none" alt="Frog"></img>
                  </div>
                  <div className={`frog2 frog2-res transition ${changeOpacityFrog}`}>
                        <img src={frog2} className="pointer-events-none" alt="Frog"></img>
                  </div>
                        <div className="flex flex-col gap-3 justify-center h-36 px-10 items-center rounded-md main-tag-convert"
                        >   
                            <div className="flex flex-row gap-10 justify-between px-10 items-center main-input">
                           
                              <Object1st
                              changeSeleteDark = {changeSeleteDark}
                              changeInputTag = {changeInputTag}
                              inputRef = {inputRef}
                              content1stValue = {object1st.content1st}
                              handleChangeOnject1st = {(e) => handleChangeOnject1st(e)} 
                              handleChangeOnject1stTakeOption = {(e) => handleChangeOnject1stTakeOption(e)} 
                              ></Object1st>

                              <ConvertButton 
                              changeConvertButton = {changeConvertButton}
                              handleConvert = {(e) => handleConvert(e)}></ConvertButton>

                              <Object2nd
                              changeSeleteDark = {changeSeleteDark}
                              changeInputTag = {changeInputTag}
                              outputRef = {outputRef}
                              content2ndValue = {object2nd.content2nd}
                              handleChangeOnject2nd = {(e) => handleChangeOnject2nd(e)}
                              handleChangeOnject2ndTakeOption = {(e) => handleChangeOnject2ndTakeOption(e)}
                              ></Object2nd>
    
                            </div>
                            <div>
                                  <SaveResult  addHistory = {(e) => addHistory(e)}
                                               openButton = {openButton}
                                               changeSaveResult = {changeSaveResult}
                                               changeSaveResultText = {changeSaveResultText}
                                  ></SaveResult>
                            </div>  
                            
                        </div>
                        <div>
                           <p className={`select-none ${changeAlertDark} absolute top-2 text font-bold text-alert  ${trueCheck}`}>Must be a number!</p>
                           <p className={`select-none ${changeAlertDark} absolute top-2 text font-bold text-alert  ${EmptyInput}`}>Please enter the value!</p>

                        </div>
                        </div>
                  <MenuOption 
                  changeText = {changeText}
                  handleRefresh = {(e) => handleRefresh(e)}
                  checkClick = {(e) => checkClick(e)}
                  checkDarkMode = {(e) => onClickDarkMode(e)}
                  changeColorMenu = {changeColorMenu}
                  ></MenuOption>
                  <History
                           listHistory = {ListHistory}
                           setListHistory= {setListHistory}
                           toggleHistoryTag = {toggleHistoryTag}
                           changeHistoryBg = {changeHistoryBg}
                           changeHistoryTag = {changeHistoryTag}
                           changeHistoryTagText = {changeHistoryTagText}
                           changeHistoryTagClose = {changeHistoryTagClose}
                  ></History>
            </div>
        </div>
    </>
  );
}

export default App;
