export const get = async (req) => {
  try {
    const { slug } = req.params
    const date = new Date().toLocaleString()
    return {
      status: 200,
      maxage: 15,
      body: { slug, date }
    }
  }
  catch (error) {
    console.error(error);
  }
}