export function asyncCloudFunctionFactory(asyncServiceFunction) {
  return async (req, res) => {
    res.set('Access-Control-Allow-Origin', "*");
    res.set('Access-Control-Allow-Headers', "Content-Type, Authorization");
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    const postData = req.body;
    try {
      const resp = await asyncServiceFunction(postData || {});
      res.status(200).send({
        errors: resp
      });
    } catch (err) {
      res.status(500).send({
        err: err
      });
    }
  }
}
