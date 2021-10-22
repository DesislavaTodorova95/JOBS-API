const createJob = async (req, res) => {
  res.json(req.user);
};
const getAllJobs = async (req, res) => {
  res.send("Get All Jobs");
};
const getJob = async (req, res) => {
  res.send("Get Single Job");
};
const updateJob = async (req, res) => {
  res.send("Update Job");
};
const deleteJob = async (req, res) => {
  res.send("delete job");
};

module.exports = {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
};
