function SetBirdPage(props) {
  console.log(props);
  let {bird, setBirdFunction, showPage} = {...props};
  if (!bird) {
    bird = {phenotype: "Normal grey"}
  }
  return (
    <div>
      <p>{bird.phenotype}</p>
      <button onClick={() => setBirdFunction({phenotype: "Cinnamon"})}>Change type</button>
      <button onClick={() => showPage(false)}>Return</button>
    </div>
  )
}

export default SetBirdPage;