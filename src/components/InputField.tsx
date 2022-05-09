import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTodo(e.target.value);
  };

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        className='input__box'
        placeholder='Enter a task'
        value={todo}
        onChange={handleChange}
      />
      <button className='input__submit'>Add</button>
    </form>
  );
};

export default InputField;
