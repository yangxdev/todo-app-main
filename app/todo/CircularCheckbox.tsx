import React, { useState } from 'react';
import Image from 'next/image';
import checkIcon from '../../public/images/icon-check.svg';

const CircularCheckbox: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="circular-checkbox inline-flex items-center cursor-pointer absolute pl-[1rem]">
            <div className="inner-circular-checkbox relative w-6 h-6 rounded-full transition-all duration-300">
                <input
                    type="checkbox"
                    className="absolute opacity-0 w-0 h-0"
                    checked={isChecked}
                    onChange={toggleCheckbox}
                />
                <div
                    className={`absolute inset-0 transition-all duration-300 ${isChecked ? 'bg-check-gradient'
                        : 'bg-white'
                        } rounded-full`}
                ></div>
            </div>
        </label>
    );
};

export default CircularCheckbox;
