function Component2UI(){
return <div style={{
    fontFamily: "Arial, Helvetica, sans-serif",
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#26325B',
    width: 900,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
}} >
    <h3 style={{
            color: 'white',
            margin: 20,
    }}>
        <span style={{
        fontSize: 80,
    }}>
        TY</span></h3>

    <div style={{
            display: 'flex',
            flexDirection: 'row',
    }}>

    <p style={{
        color: 'white',
        margin: 35,
    }}> Home </p>

    <p style={{
        color: 'white',
        margin: 35 ,
    }}> About</p>

    <p style={{
        color: 'white',
        margin: 35 
    }}> Shop</p>

    <p style={{
        color: 'white',
        margin: 35 ,
    }}> Contact</p>

    <p style={{
        color: 'white',
        margin: 35 ,
    }}> Services</p>

    <p style={{
        color: 'white',
        margin: 35 ,
    }}> Help</p>

    </div>

    <button style={{
        width: 100,
        height: 100,
        backgroundColor: 'white',
    }}>Get Started</button>

</div>
}

export default Component2UI;