import hero from "../assets/hero.png"
import {Button} from "flowbite-react";
export default function Hero(){
    return (
        <>
            <div className="grid grid-cols-2 gap-2 m-10">
                <div>
                    <div className={"grid grid-rows-4 grid-flow-col gap-5"}>
                        <h1 className={"text-4xl"}> lorem ipsum dolor sit amet</h1>
                        <span className={"text-gray-500"}>lorem ipsum dolor sit amet</span>
                        <div className={"button"}>
                            <Button color={"blue"}>see more</Button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={"grid grid-cols-2"}>
                        <div></div>
                        <div><img src={hero} alt={""}/></div>
                    </div>
                </div>
            </div>
        </>
    )
}