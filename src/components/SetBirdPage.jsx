function SetBirdPage(props) {
  let { bird } = { ...props };

  return (
    <div>
      <p>{bird.genotypeInWords}</p>
      <button onClick={() => console.log('do it')}>Change type</button>
      <button onClick={() => console.log('ok')}>Return</button>
    </div>
  );
}

export default SetBirdPage;
