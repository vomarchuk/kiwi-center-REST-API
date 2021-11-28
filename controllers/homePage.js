const homePage = async (req, res, next) => {
  console.log('hello, I am home page')
  res.send('<h1>Hello</h1>')
  // res.status(200).json({
  //   status: 'success',
  //   code: 200,
  // })
}

module.exports = homePage
