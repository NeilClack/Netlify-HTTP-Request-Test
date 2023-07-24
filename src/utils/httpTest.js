const TestHTTP = async () => {
  try {
    const res = await fetch("https://dummyjson.com/todos/1");
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      return data;
    } else {
      const status = await res.status;
      console.log(status);
    }
  } catch (err) {
    console.log(err);
  }
};

export default TestHTTP;
