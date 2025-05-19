function createUserLabel(user: {name: string, age: number}) {
    // userオブジェクトは name (文字列) と age (数値) プロパティを持つことを期待
    if (typeof user.name !== 'string' || typeof user.age !== 'number') {
      return "無効なユーザーデータです";
    }
    if (user.age < 0) {
      return "年齢が不正です";
    }
    return `${user.name} (${user.age}歳)`;
  }
  
  function greetUser(user: {name: string, preferredLang?: string}) {
    // userオブジェクトは name プロパティを持つことを期待
    // さらにオプションで preferredLang (文字列) を持つ場合がある
    let greeting = `Hello, ${user.name}!`;
    if (user.preferredLang === "ja") {
      greeting = `こんにちは、${user.name}さん！`;
    } else if (user.preferredLang === "es") {
      greeting = `¡Hola, ${user.name}!`;
    }
    return greeting;
  }
  
  const user1 = { name: "Alice", age: 30 };
  const user2 = { name: "Bob", age: "twenty" }; // ageが文字列になっている！
  const user3 = { name: "Charlie", age: 25, preferredLang: "ja" };
  const user4 = { firstName: "David", lastName: "Lee" }; // nameプロパティがない！
  
  console.log("--- createUserLabel ---");
  console.log(createUserLabel(user1));
  // console.log(createUserLabel(user2)); // JSでは実行時に型チェックするか、意図しない結果になる
  // console.log(createUserLabel(user4)); // JSでは実行時エラー (user.name が undefined)
  
  console.log("\n--- greetUser ---");
  console.log(greetUser(user1));
  console.log(greetUser(user3));
  // console.log(greetUser(user4)); // JSでは "Hello, undefined!" のような結果になる
  