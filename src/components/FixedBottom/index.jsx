import React from "react";

export default function FixedBottom({ children }) {
    return <div className={'text-center'} style={{
        position: 'fixed',
        bottom: '18%',
        width: '100%',
        left: 0,
    }}>{ children }</div>;
}