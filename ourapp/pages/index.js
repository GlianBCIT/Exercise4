
import styles from '../styles/main.module.css';
import Component2 from '../comps/CustomComponent2';


// this is our workflow.html
function Home() {

  // we do not need a workglow.html and do the += innerHTML stuff
  // can't use class, have to be className
  return (
    <div className="main">
        <Component2 />
    </div>
    // <div className={styles.main}>
    //   Home Page
    //   <Avatar url="https://placekitten.com./200/200"/>
    //   <Avatar url="https://placekitten.com./300/300"/>
    //   <Avatar />
    // </div>
    )
  }

export default Home;
