const express = require("express");
const router = express.Router();
const jobPostController = require('../controllers/jobPostController');

router.get('/', jobPostController.getJobPosts);
router.post('/', jobPostController.createJobPost);
router.get('/:id', jobPostController.getJobPost)
router.put('/:id', jobPostController.updateJobPost)
router.delete('/:id', jobPostController.deleteJobPost)
router.post('/getJobPostsMatching', jobPostController.getJobPostsMatching)
router.post('/getJobPostsMatchingWithMinimumSalary', jobPostController.getJobPostsMatchingWithMinimumSalary)
router.post('/sortJobPostsBySalary', jobPostController.sortJobPostsBySalary)


module.exports = router;