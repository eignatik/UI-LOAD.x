import React from 'react';
import {Link} from "react-router-dom";

const Bottom = () => (
    <div>
        <p>Powered by <Link to={'https://eignatik.space/'}>eignatik</Link>, &copy; {new Date().getFullYear()}</p>
    </div>
);

export default Bottom;