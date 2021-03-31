function Component3(){
  return <div div style={{
    width:400,
    height:450,
    backgroundColor:"lightgrey",
    borderRadius:15,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"

  }}>
     <div>
        <h3>ID</h3> <span>You can use your email as your ID</span>
      </div>
      <div style={{
        width:300,
        height:41,
        backgroundColor:"white",
        margin:10,
        borderRadius:10,
      }}></div>
      <div>
      <h3>Password</h3> <span>must be at leats 8 characters </span>
      </div>
      <div div style={{
        width:300,
        height:41,
        backgroundColor:"white",
        margin:10,
        borderRadius:10,
      }}></div>
      <button style={{
        width:300,
        height:51,
        backgroundColor:"blue",
        color:"white",
        margin:30,
        borderRadius:12,
      }}>Sign up</button>
  </div>
}
export default Component3;