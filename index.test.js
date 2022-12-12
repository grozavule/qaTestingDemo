 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

// test('test function', () => {
//   expect(2).toBe(2);
// });

// test('first name should be patten', () => {
//   expect(testData.firstName).toBe('Patten');
// });

//groups formatTitle tests
describe('formatTitle tests', () => {
  test('formatTitle should return a string', () => {
    expect(typeof formatTitle(testData.title)).toBe('string');
  });

  test('formatTitle should return a string with each word capitalized', () => {
    let formmattedTitle = formatTitle(testData.title);
    expect(formmattedTitle).toBe('Nulla Ac');
  });
});

describe('shortedBio tests', () => {
  let shortBio = shortenBio(testData.bio);
  test('shortenedBio should return a shorter string', () => {
    expect(shortBio.length < testData.bio.length).toBeTruthy();
  });

  test('shortenBio should add ... to the end', () => {
    expect(shortBio).toMatch(/\.\.\.$/);
    //expect(shortenBio(testData.bio)).toContain('...');
  });
});

describe('convertLength tests', () => {
  let result = convertLength(testData.length);

  test('convertLength should return an array with two elements', () => expect(result).toHaveLength(2));

  test('convertLength should return a minute value that is less than 60', () => expect(result[1]).toBeLessThan(60));
});

test('toStrictEqual', () => {
  const myObj = {myNum: 4};
  const myObj2 = {myNum: 4};

  expect(myObj).toStrictEqual(myObj2);
})

test('toEqual', () => {
  const myObj = {myNum: 4};
  const myObj2 = {myNum: 4};

  expect(myObj).toEqual(myObj2);
})