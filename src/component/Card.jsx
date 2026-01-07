

const Card = (props) => {
  return (
    <div className='flex gap-1 flex-col items-center h-80 w-60 bg-white mt-5 rounded-2xl p-4'>
        <div className="profile h-25 w-25 bg-red-500 rounded-full">
            <img className="h-full w-full object-cover rounded-full" src="https://i.pinimg.com/1200x/8a/78/bd/8a78bd70d34aa11a482f0c314a3141b0.jpg" alt="" />
        </div>
        <h1 className="text-2xl text-black font-semibold">{props.props.name}</h1>
        <h2 className="text-blue-700 text-xl ">Student</h2>
        <p className="text-black text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, rem.</p>
        <button onClick={()=>{props.deleteHandler(props.index)}} className="bg-red-600 p-2 rounded active:scale-95">Remove</button>
    </div>
  )
}

export default Card