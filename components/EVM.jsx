import { useState } from "react";

const EVM = () => {
    const [aap, setAap] = useState(0);
    const [bjp, setBjp] = useState(0);
    const [shivsena, setShivsena] = useState(0);
    const [inc, setInc] = useState(0);

    const handleClick = (party) => {
        // console.log("press")
        if(party == "aap"){
            setAap(aap+=1)
        }else if(party == "bjp"){
            setBjp(bjp+=1)
        }else if(party == "shivsena"){
            setShivsena(shivsena+=1)
        }else if(party == "inc"){
            setInc(inc+=1)
        }
    };

    return (  
        <div>
            <div className="votebuttons">
                <button className="vb" onClick={()=>{handleClick("aap")}}>Vote for AAP</button>
                <button className="vb" onClick={()=>{handleClick("bjp")}}>Vote for BJP</button>
                <button className="vb" onClick={()=>{handleClick("shivsena")}}>Vote for SS</button>
                <button className="vb" onClick={()=>{handleClick("inc")}}>Vote for INC</button>
            </div>
            <div className="counts">
                <h3 className="votenos">{aap}</h3>
                <h3 className="votenos">{bjp}</h3>
                <h3 className="votenos">{shivsena}</h3>
                <h3 className="votenos">{inc}</h3>
            </div>
        </div>
    );
}
 
export default EVM;