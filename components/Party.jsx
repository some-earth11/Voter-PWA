import Image from "next/image";

const Party = () => {
    return (  
        <div>
            <div className="partylogos">
                <Image id="aaplogo" src="/aaplogo.png" width={256} height={256} />
                <Image id="aaplogo" src="/BJPlogo.png" width={256} height={256} />
                <Image id="aaplogo" src="/shivsenalogo.png" width={256} height={256} />
                <Image id="aaplogo" src="/inclogo.png" width={256} height={256} />
            </div>
        </div>
    );
}
 
export default Party;