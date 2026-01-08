import './App.css'
import { useState } from 'react'
import Card from "./component/Card"

const App = () => {

  const [name, setname] = useState('');
  const [imageUrl, setimageUrl] = useState('');
  const [role, setrole] = useState('');
  const [desc, setdesc] = useState('');

  const [allArr, setallArr] = useState(JSON.parse(localStorage.getItem("all-arr")));
  
  let afterSubmit=(e)=>{
      e.preventDefault();
      let newArr=[...allArr,{name,imageUrl,role,desc}];
      setallArr(newArr);
      localStorage.setItem("all-arr",JSON.stringify(newArr));

      setname('');
      setdesc('');
      setimageUrl('');
      setrole('');

  }
  let deleteHandler=(idx)=>{
    let newArr=[...allArr];
    newArr.splice(idx,1);
    setallArr(newArr);
    localStorage.setItem("all-arr",JSON.stringify(newArr));
  }
  return (
    <>
    <div className='text-white p-5.5'>
      <form className='flex flex-wrap gap-5' action="">
        <input value={name} className='bg-yellow-300 text-3xl h-20 lg:w-[48%] px-5 text-black rounded-2xl' onChange={(e)=>{setname(e.target.value)}} type="text" placeholder='Enter your name'/>
        <input value={imageUrl} className='bg-yellow-300 text-3xl h-20 lg:w-[48%] px-5 text-black rounded-2xl' onChange={(e)=>{setimageUrl(e.target.value)}} type="text" placeholder='ImageUrl'/>
        <input value={role} className='bg-yellow-300 text-3xl h-20 lg:w-[48%] px-5 text-black rounded-2xl' onChange={(e)=>{setrole(e.target.value)}} type="text" placeholder='Enter role'/>
        <input value={desc} className='bg-yellow-300 text-3xl h-20 lg:w-[48%] px-5 text-black rounded-2xl' onChange={(e)=>{setdesc(e.target.value)}} type="text" placeholder='Enter Description'/>        
        
        <button onClick={(e)=>{afterSubmit(e)}} className='lg:w-full w-95 h-20 bg-green-600 rounded-2xl text-3xl active:scale-95'>Create User</button>
      </form>

      <div className='flex flex-wrap gap-14'>
        {allArr.map((elem,idx)=>{
          return <Card key={idx} props={elem} index={idx} deleteHandler={deleteHandler}/>
        })}
      </div>
       
    </div>
    </>
    )
}

export default App