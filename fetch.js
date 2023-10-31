const supabase = require("./supabase");

async function fetchData() {
  const { data, error } = await supabase.from("YONO1").select("*");

  if (error) console.log(error);
  return data;
}

fetchData().then((data) => console.log(data));
