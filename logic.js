const BIN_ID = "69e506ab36566621a8cd6ac0";
const API_KEY = "$2a$10$TocawYMNB.KMjjn2ISFy9ecxge8ja9EHy3PPq75uApN/56cCRaJwq";

async function loginOrRegister(username, password) {
  const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
    headers: {
      "X-Master-Key": API_KEY
    }
  });

  const data = await res.json();
  let users = data.record;

  // najdi usera
  let user = users.find(u => u.username === username);

  if (user) {
    // LOGIN
    if (user.password === password) {
      console.log("Login success");
      return { status: "login", user };
    } else {
      console.log("Wrong password");
      return { status: "error", message: "wrong password" };
    }
  } else {
    // REGISTER
    const newUser = {
      username,
      password, // ⚠️ ideálně hash
      balance: "1",
      tickets: {}
    };

    users.push(newUser);

    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY
      },
      body: JSON.stringify(users)
    });

    console.log("User created");
    return { status: "registered", user: newUser };
  }
}