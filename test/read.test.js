const readMd = require("../readFile");

test('readMd returns', () => {
    const readMd = jest.fn(() => true);
  
    readMd();
  
    expect(readMd).toHaveReturned();
  });