//import React from 'react'
import cep from 'cep-promise';

const TestComponent = () => {
    const response = cep(87005080);

    console.log(response);

    return response;
    // try {
    //   console.log('func2');
    // } catch (err) {
    //   console.log(err);
    // }
}

export default TestComponent;