import React from "react";

export const WeakMapComponent = () => {
    const mapOfObjects = new WeakMap();
   
    const foo = { name: 'foo' };
    const bar = { name: 'bar' };

    // WeakMap принимает объекты в качестве ключей
    mapOfObjects.set(foo, 'Foo data');
    mapOfObjects.set(bar, 'Bar data');

    return <div>{mapOfObjects.get(foo)}</div>;
}