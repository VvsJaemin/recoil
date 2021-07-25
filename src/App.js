import logo from './logo.svg';
import './App.css';
import { atom, RecoilRoot, selector, useRecoilState, useRecoilValue } from 'recoil';

const App=()=> {
  return (
    <RecoilRoot>
      <CharacterCouter />
    </RecoilRoot>
  );
}

const textState = atom({
  key:'textState',
  default: '',
})

const CharacterCouter =()=>{
  return(
    <div>
      <TextInput />
      <CharacterCount />

    </div>
  )
}

const TextInput = ()=>{
  const [text, setText] = useRecoilState(textState)

  const onChange=(e)=>{
    setText(e.target.value)
  }

  return(

    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo : {text}
    </div>
  )
}

const charCountState = selector({
  key: 'charCountState',
  get : ({get})=>{
    const text = get(textState)
    return text.length
  }
})

const CharacterCount = () =>{
  const count  = useRecoilValue(charCountState)
  return(
    <>
    Character Count :{count}
    </>
  )
}
export default App;
