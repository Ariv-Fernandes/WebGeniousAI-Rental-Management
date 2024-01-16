import "./Message.css"

export default function Message({own}){
    return(
      <div className={own ? "message own":"message"}>
        <div className="messageTop">
        <img className="mssgImg" src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
        <p className="mssgText">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="messageBottom">30mins ago</div>
      </div>
    )
}
