import React, {useState} from "react"


const Home = () => {
    const [user, setUser] = useState({
        name: "Mats",
        lastName: "Vingerhoets"
    });


    if (!user){
        return (
            <div>Loading...</div>
        )
    }
    const clickHandler = () =>{
        /*console.log("clicked!")*/
        if(user.name === "Mats"){
            setUser({
                name: "Ralph",
                lastName: "Gantman"
            })
        } else {
            setUser({
                name: "Mats",
                lastName: "Vingerhoets"
            })
        }
    }

    return (
      <div>
          <div className="container">
              <h1>Home Page</h1>
              <h2>hello {user.name +" "+ user.lastName}</h2>
              <button className="btn btn-primary" onClick={() => clickHandler()}>change user</button>
          </div>
      </div>
    );
}

export default Home;
