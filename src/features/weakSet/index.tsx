import React from "react";

export const WeakSetComponent = () => {
    const uniqueItems = new WeakSet();

    const obj = { id: 1, name: 'Item 1' };

    if (!uniqueItems.has(obj)) {
        uniqueItems.add(obj);
    }

    return <div>Weak set</div>;
};