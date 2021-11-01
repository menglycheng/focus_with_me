const [time, setTimes] = useState({
    hour: "",
    minute: "",
    second: "",
  });
  console.log(time);
  const getMusicUrl = (e) => {
    e.preventDefault();
    const newData = { ...time };
    newData[e.target.id] = e.target.value;
    setTimes(newData);
  };


  
// // }
