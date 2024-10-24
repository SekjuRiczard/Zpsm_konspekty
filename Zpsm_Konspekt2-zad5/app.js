const getMails = (collections) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const emails = collections.filter(
    (item) => typeof item === "string" && emailRegex.test(item)
  );
  return emails.sort();
};

const collections = [
  {},
  15,
  "hello@test.pl",
  null,
  ["aaa", "bbb", 5],
  "admin@gmail.com",
  undefined,
  "a34@yahoo.com",
  "321@a",
  "321.pl",
];
const result = getMails(collections);
console.log(result);
