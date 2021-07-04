import React from "react";

const Step = ({ name, finished, current }) => {
    return (
        <li><input type="checkbox" name="check" id="checkbox" checked={finished} /> {name} Lock </li>
    );

}
export default Step;