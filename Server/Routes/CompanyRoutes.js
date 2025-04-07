import express from 'express'
import { changeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplications, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../Controllers/companyController.js'
import upload from '../Config/multer.js';
import { protectCompany } from '../Middlewares/authMiddleware.js';

const router = express.Router();

// Register a company
router.post('/register',upload.single('image') , registerCompany);

// Company Login
router.post('/login', loginCompany);

// Get Company Data
router.get('/company', protectCompany, getCompanyData);

// Post a job
router.post('/post-job', protectCompany, postJob);

// Get applicants data of comapny
router.get('/applicants', protectCompany, getCompanyJobApplications);

//Get company job list
router.get('/list-jobs', protectCompany, getCompanyPostedJobs);

// Change Apllications Status
router.post('/change-status', protectCompany, changeJobApplicationsStatus);

// Change Applications Visibility
router.post('/change-visibility', protectCompany, changeVisibility);

export default router;