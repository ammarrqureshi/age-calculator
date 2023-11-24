import { useState } from "react";

const Form = () => {
  const [age, setAge] = useState({ day: "", month: "", year: "s" });
  return (
    <div>
        <form onSubmit={setAge}>
        <input type="text" placeholder="DD" value={age.day}/>
      <input type="text" placeholder="MM" value={age.month}/>
      <input type="text" placeholder="YYYY" value={age.year}/>
      <button >Calculate</button>
        </form>
     
    </div>
  );
};

export default Form;
