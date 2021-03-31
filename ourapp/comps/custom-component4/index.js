function Component4({
  width=250,
  height=50,
  textcolor= "Red",
  backgroundColor = "#ffcc99",
  borderRadius = "15px"
}){
    return <div style={{
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
      textAlign: "center",
      Color: "black",
      width: 300,
      height: 350,
      backgroundColor: "grey",
      borderRadius: borderRadius
    }}>
      <h3 style={{
        textcolor:textcolor,
        
      }}>Hello, <span>Do you like Henry?</span></h3>
      <div>
      <button style={{
        width:width,
        height:height,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        
      }}>Yes</button>

      <button style={{
        width:width,
        height:height,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius
      }}>No</button>
      </div>
    </div>
}

export default Component4;