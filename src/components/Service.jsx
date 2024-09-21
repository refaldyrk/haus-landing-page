import {Card} from "flowbite-react";
import hero from "../assets/hero.png"

export default function Service(){
    return(
        <>
            <div className="flex flex-row justify-center gap-10 m-10">
                <div>
                    <div>
                        <Card className={"max-w-sm"}
                        >
                            <div>
                                <img className={""} width={100} height={200} src={hero} alt="image 1"/>
                            </div>
                            <span>
                                Example Text
                            </span>
                        </Card>
                    </div>
                </div>
                <div>
                    <div>
                        <Card className={"max-w-sm"}></Card>
                    </div>
                </div>
                <div>
                    <div>
                        <Card className={"max-w-sm"}></Card>
                    </div>
                </div>
                <div>
                    <div>
                        <Card className={"max-w-sm"}></Card>
                    </div>
                </div>
                <div>
                    <div>
                        <Card className={"max-w-sm"}></Card>
                    </div>
                </div>
                <div>
                    <div>
                        <Card className={"max-w-sm"}></Card>
                    </div>
                </div>
                <div>
                    <div>
                        <Card className={"max-w-sm"}></Card>
                    </div>
                </div>
            </div>
        </>
    )
}