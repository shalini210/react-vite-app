import React, { useRef } from 'react';

export default function Calculate() {
    let aref = useRef();
    let bref = useRef();
    let resultref = useRef();

    let Calc = (op) => {
        let a = parseInt(aref.current.value);
        let b = parseInt(bref.current.value);
        switch (op) {
            case "+":
                resultref.current.innerHTML = "Sum is " + (a + b);
                break;
            case "-":
                resultref.current.innerHTML = "Difference is " + (a - b);
                break;
            case "*":
                resultref.current.innerHTML = "Multiplication is " + (a * b);
                break;
            case "/":
                resultref.current.innerHTML = "Division is " + (a / b);
                break;
            default:
                break;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <p className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="a">
                        Enter a:
                    </label>
                    <input
                        type="text"
                        ref={aref}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="a"
                    />
                </p>
                <p className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="b">
                        Enter b:
                    </label>
                    <input
                        type="text"
                        ref={bref}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="b"
                    />
                </p>
                <div className="flex justify-between mb-4">
                    <button
                        onClick={() => Calc('+')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        +
                    </button>
                    <button
                        onClick={() => Calc('-')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        -
                    </button>
                    <button
                        onClick={() => Calc('*')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        *
                    </button>
                    <button
                        onClick={() => Calc('/')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        /
                    </button>
                </div>
                <p ref={resultref} className="text-center text-gray-700 text-lg"></p>
            </div>
        </div>
    );
}