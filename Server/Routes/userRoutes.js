import express from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../Controllers/userController.js'
import upload from '../Config/multer.js';

const router = express.Router()

// Get user data
router.get('/user', getUserData);

// Apply for a job
router.post('/apply', applyForJob);

// Get applied jobs data
router.get('/applications', getUserJobApplications);

// Update User profile(resume)
router.post('/update-resume', upload.single('resume'), updateUserResume);

export default router;