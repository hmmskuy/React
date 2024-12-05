import { products } from "../../data/data";
import Detail from "../element/Detail";
import Images from "../element/Images";
import Button from "../element/Button";
export function Card({}) {
    return (
        <div className="grid  grid-cols-4 ml-20 mb-20 ">
            {rackets.map((racket) => (
                <div key={products.id} className="bg-slate-200 mt-20 w-[300px] rounded-lg shadow-2xl    " >
                    <div className="  mx-auto">
                        <Images className="rounded-lg"  src={products.imageUrl} alt={products.imageUrl}   />
                    </div>
                    <div className="p-5 ">
                        <p className="font-bold text-[16px] bg-slate-300 py-1 px-2  rounded-lg">
                        <Detail detail={products.name} />
                        </p>
                        <p className=" text-[15px] mt-3">
                        <Detail detail={products.price}  />
                        </p>
                        <p className=" text-[14px] mt-3">
                        <Detail detail={products.description} />
                        </p>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5">
                        <Button/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
       
    );
}