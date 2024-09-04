import '../Goals.css'

const Goal = (data) => {
  return (
    <div class="Goal">
        <span className="Border_Radius"></span>
        <img src={data.pic} class="Goal_Img" alt="" />
        <h1 className="Goal_Header">{data.header}</h1>
        <p className="Goal_Desc">{data.desc}</p>
    </div>
  )
}

export default Goal