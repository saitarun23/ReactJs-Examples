import { useSelector } from "react-redux";

function SkillSet(){
let data=useSelector(gs=>gs.skillset)

    return(
        <div>
            <h2>SkillSet</h2>
            {data.map(ss=><li>{ss}</li>)}
        </div>
    )
}
export default SkillSet;