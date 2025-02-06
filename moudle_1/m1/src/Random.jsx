function Random(){
  let n= Math.random()*100;
  return <h1 style={{'background-color':'red'}}>Random number is: {Math.round(n)}</h1>
}
export default Random;