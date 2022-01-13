import React, { useRef } from 'react';
import { useState } from 'react/cjs/react.development';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickName: '',
    });

    const nameInput = useRef();
    const { name, nickName } = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
    };
    const onClick = () => {
        setInputs({
            name: '',
            nickName: '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name"
                placeholder='이름'
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickName"
                placeholder='닉네임'
                onChange={onChange}
                value={nickName}
            />
            <button onClick={onClick}>초기화</button>
            <div>
                <b>값: </b>
                {name} {nickName}
            </div>
        </div>
    );
}

export default InputSample;