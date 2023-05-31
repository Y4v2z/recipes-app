import React from 'react'
import "./ThemeSelector.css";
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const themeColors = ["warning", "danger", "primary", "success"];

const ThemeSelector = () => {
    const { changeColor } = useContext(ThemeContext)
    return (
        <div className="container theme-selector">
            <div className="theme-links">
                {
                    themeColors.map(color => (
                        <span
                            key={color}
                            className={`bg-${color}`}
                            onClick={() => changeColor(color)} >

                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default ThemeSelector