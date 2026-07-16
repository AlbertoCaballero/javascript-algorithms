(async () => {
  try {
    const result = await Promise.any([
      Promise.reject('Error 1'),
      Promise.reject('Error 2'),
      Promise.resolve('Success!'),
    ]);
    console.log(`Result: ${result}`);
  } catch(error) {
    console.log(`Error: ${error}`);
  }
})
