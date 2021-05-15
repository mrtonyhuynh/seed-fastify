// External Dependancies
const boom = require('boom'); // fastify-boom

exports.getPosts = async (req, reply) => {
  try {
    return { name: 'haha' };
  } catch (err) {
    throw boom.boomify(err);
  }
};
