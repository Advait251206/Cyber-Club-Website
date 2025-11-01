export function Card(Props: any) {
    return (
        <div className="flex flex-col h-full p-6 m-3 bg-gray-900 border border-green-300 rounded-lg hover:shadow-green-400 shadow-2xl transition-shadow duration-300">
       
            <div className="mb-4">
                <img src={Props.i} alt="" srcSet="" width={50}/>
            </div>

            <div className="flex-grow">
                <div className="text-xl font-semibold text-green-300 mb-2">{Props.t}</div>
                <div className="font-serif text-gray-300">{Props.d}</div>
            </div>

            {/* {
            <a href="#" className="text-green-400 hover:text-green-300 font-semibold mt-4">
                Learn more →
            </a>
            } */}
        </div>
    );
}