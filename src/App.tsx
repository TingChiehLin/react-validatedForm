import React from 'react';

import From from './layout/Form';
import Text from './components/Text'

const App = () => {
    return (
        <div className="h-screen flex items-center justify-center px-32
                            bg-gradient-to-tr from-custom-pink via-custom-darkblue to-custom-blue
                            font-Source-Sans
            ">
            <div className={"w-3/5 px-12 text-white"}>
                <Text text={"Learn to cook by"} customStyle={"text-6xl font-Source-Sans font-bold"}/>
                <Text text={"watching others"} customStyle={"text-6xl font-Source-Sans font-bold"}/>
                <Text
                    text={"  See how experienced chefs cooking\n" +
                    " authentic\n" +
                    " food by watching videos and reading\n" +
                    " interactive books and understand how they think"}
                    customStyle={"mt-12 text-lg font-Source-Sans font-[600]"}
                />
            </div>
            <div className={"w-2/5 px-12"}>
                <From/>
            </div>
        </div>
    );
}

export default App;
