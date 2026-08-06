import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";


export const StepFinal = (props) => {
    return ( <div className="w-120 h-48.25 bg-amber-300 flex justify-center  border rounded-lg">
          <div className="p-8 flex  flex-col justify-between">
            <span>
              <PineconeLogo/>
            </span>
         <p className="font-semibold">You are All Set 🔥</p>
         <p className="font-normal text-gray-300"> We have received your submission. Thank you!</p>
          </div>
        </div>)
 



    
}