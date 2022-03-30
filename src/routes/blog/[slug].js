export const get = async (req) => {
  try {
    const { slug } = req.params
    return {
      status: 200,
      body: { slug }
    }
  }
  catch (error) {
    console.error(error);
  }
}