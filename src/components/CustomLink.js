import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ className, to, label }) => {
    return <Link className={className} to={to}>{label}</Link>;   
};

export default CustomLink;