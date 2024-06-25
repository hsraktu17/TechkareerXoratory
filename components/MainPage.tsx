import BiggerSection1 from "./BiggerSection1";
import BiggerSection2 from "./BiggerSection2";
import SmallerSection from "./SmallerSection";

export default function MainPage(){
    return<div className="border">
        <div className="grid grid-cols-3">
            <div className="col-span-2 border-r-2">
                <div className="border-b">
                    <BiggerSection1/>
                </div>
                <div className="border-b">
                    <BiggerSection2/>
                </div>
            </div>
            <div className="col-span-1"> 
                <SmallerSection/>
            </div>
        </div>
    </div>
}