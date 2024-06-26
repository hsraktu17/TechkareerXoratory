import SmallerSection from "./SmallerSection";
import JobTitle from "./JobTitle";
import JobSkills from "./JobSkills";
import AboutJob from "./AboutJob";
import AboutCompany from "./AboutCompany";


export default function MainPage(){
    return<div className="border">
        <div className="grid grid-cols-5">
            <div className="col-span-4 border-r-2">
                <div className="border-b">
                    <JobTitle/>
                </div>
                <div className="border-b">
                    <JobSkills/>
                </div>
                <div className="border-b">
                    <AboutJob/>
                </div>
                <div>
                    <AboutCompany/>
                </div>
            </div>
            <div className="col-span-1"> 
                <SmallerSection/>
            </div>
        </div>
    </div>
}