import React from 'react';
import uuid from '../../Utils/uuid';


export default class Example extends React.Component {
    render() {
        let text = ["React is running!", "Isn't that great?", "YES!"];
        return (
            <div className="wrapper">
                {text.map((line, i) =>
                    <p key={uuid()}>
                        Line {i}: {line}
                    </p>
                )}
            </div>
        );
    };
};
