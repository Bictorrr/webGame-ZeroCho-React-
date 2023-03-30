const React = require('react');
const { useState } = React;

const WordRelay = () => {
  const [word, setWord] = useState('호랑이');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = React.useRef(null);


  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length = 2] === value[0]) {
      setResult('정답입니다.');
      setWord(value);
      setValue('');
      inputEl.current.focus();
    } else {
      setResult("땡인데;;")
      setValue('');
      input.current.focus();
    }
  };


  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
        </input>
        <button>입력!!!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;